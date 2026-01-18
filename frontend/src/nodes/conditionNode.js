// conditionNode.js

import { useState } from 'react';
import { BaseNode } from './BaseNode';
import styles from './BaseNode.module.css';

export const ConditionNode = ({ id, data }) => {
    const [condition, setCondition] = useState(data.condition || 'value > 10');

    const handleChange = (e) => {
        setCondition(e.target.value);
    };

    return (
        <BaseNode
            id={id}
            data={data}
            title="Condition"
            inputHandles={[
                { id: `${id}-in`, style: { top: '50%' } }
            ]}
            outputHandles={[
                { id: `${id}-true`, style: { top: '33%' } },
                { id: `${id}-false`, style: { top: '66%' } }
            ]}
        >
            <label className={styles.label}>
                Condition:
                <input
                    type="text"
                    value={condition}
                    onChange={handleChange}
                    className={styles.inputField}
                />
            </label>
        </BaseNode>
    );
}
