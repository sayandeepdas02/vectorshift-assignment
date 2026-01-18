// booleanNode.js

import { useState } from 'react';
import { BaseNode } from './BaseNode';
import styles from './BaseNode.module.css';

export const BooleanNode = ({ id, data }) => {
    const [value, setValue] = useState(data.value || false);

    const handleChange = (e) => {
        setValue(e.target.checked);
    };

    return (
        <BaseNode
            id={id}
            data={data}
            title="Boolean"
            outputHandles={[
                { id: `${id}-out`, style: { top: '50%' } }
            ]}
        >
            <label className={styles.label} style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                <input
                    type="checkbox"
                    checked={value}
                    onChange={handleChange}
                />
                <span>{value ? 'True' : 'False'}</span>
            </label>
        </BaseNode>
    );
}
