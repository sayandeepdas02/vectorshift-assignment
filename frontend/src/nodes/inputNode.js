// inputNode.js

import { useState } from 'react';
import { BaseNode } from './BaseNode';
import styles from './BaseNode.module.css';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      data={data}
      title="Input"
      outputHandles={[
        { id: `${id}-value`, style: { top: '50%' } }
      ]}
    >
      <label className={styles.label}>
        Name:
        <input
          type="text"
          value={currName}
          onChange={handleNameChange}
          className={styles.inputField}
        />
      </label>
      <label className={styles.label}>
        Type:
        <select value={inputType} onChange={handleTypeChange} className={styles.selectField}>
          <option value="Text">Text</option>
          <option value="File">File</option>
        </select>
      </label>
    </BaseNode>
  );
}
