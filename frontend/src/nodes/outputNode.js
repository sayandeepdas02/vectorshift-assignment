// outputNode.js

import { useState } from 'react';
import { BaseNode } from './BaseNode';
import styles from './BaseNode.module.css';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      data={data}
      title="Output"
      inputHandles={[
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
        <select value={outputType} onChange={handleTypeChange} className={styles.selectField}>
          <option value="Text">Text</option>
          <option value="File">Image</option>
        </select>
      </label>
    </BaseNode>
  );
}
