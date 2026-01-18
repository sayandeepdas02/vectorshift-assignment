// llmNode.js

import { BaseNode } from './BaseNode';
import styles from './BaseNode.module.css';

export const LLMNode = ({ id, data }) => {

  return (
    <BaseNode
      id={id}
      data={data}
      title="LLM"
      inputHandles={[
        { id: `${id}-system`, style: { top: '33%' } },
        { id: `${id}-prompt`, style: { top: '66%' } }
      ]}
      outputHandles={[
        { id: `${id}-response`, style: { top: '50%' } }
      ]}
    >
      <div className={styles.nodeBody}>
        <span>This is a LLM.</span>
      </div>
    </BaseNode>
  );
}
