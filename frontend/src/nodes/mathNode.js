// mathNode.js

import { useState } from 'react';
import { BaseNode } from './BaseNode';
import styles from './BaseNode.module.css';

export const MathNode = ({ id, data }) => {
    const [operation, setOperation] = useState(data.operation || 'add');

    const handleOpChange = (e) => {
        setOperation(e.target.value);
    };

    return (
        <BaseNode
            id={id}
            data={data}
            title="Math"
            inputHandles={[
                { id: `${id}-a`, style: { top: '33%' } },
                { id: `${id}-b`, style: { top: '66%' } }
            ]}
            outputHandles={[
                { id: `${id}-result`, style: { top: '50%' } }
            ]}
        >
            <label className={styles.label}>
                Op:
                <select value={operation} onChange={handleOpChange} className={styles.selectField}>
                    <option value="add">Add</option>
                    <option value="sub">Sub</option>
                    <option value="mul">Mul</option>
                    <option value="div">Div</option>
                </select>
            </label>
        </BaseNode>
    );
}
