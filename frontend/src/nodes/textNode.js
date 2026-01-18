// textNode.js

import { useState, useLayoutEffect, useRef, useEffect } from 'react';
import { BaseNode } from './BaseNode';
import styles from './BaseNode.module.css';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [inputHandles, setInputHandles] = useState([]);
  const textareaRef = useRef(null);
  const containerRef = useRef(null);

  // Auto-resize textarea
  useLayoutEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  }, [currText]);

  // Extract variables and update handles
  useEffect(() => {
    const regex = /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;
    const matches = [...currText.matchAll(regex)];
    const variables = Array.from(new Set(matches.map(m => m[1]))); // Unique variables

    const newHandles = variables.map((variable, index) => {
      // Calculate position - distribute evenly or stack
      // For simplicity, let's stack them based on index/count
      const top = 100 / (variables.length + 1) * (index + 1);
      return {
        id: `${id}-${variable}`,
        style: { top: `${top}%` } // Start after header
      };
    });

    setInputHandles(newHandles);
  }, [currText, id]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      data={data}
      title="Text"
      inputHandles={inputHandles}
      outputHandles={[
        { id: `${id}-output`, style: { top: '50%' } }
      ]}
      style={{ height: 'auto', minHeight: '100px' }} // Allow dynamic height
    >
      <label className={styles.label}>
        Text:
        <textarea
          ref={textareaRef}
          value={currText}
          onChange={handleTextChange}
          className={styles.inputField}
          style={{
            minHeight: '40px',
            overflow: 'hidden',
            resize: 'none',
            fontSize: '12px',
            fontFamily: 'monospace'
          }}
          rows={1}
        />
      </label>
    </BaseNode>
  );
}
