// sliderNode.js

import { useState } from 'react';
import { BaseNode } from './BaseNode';
import styles from './BaseNode.module.css';

export const SliderNode = ({ id, data }) => {
    const [value, setValue] = useState(data.value || 50);

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <BaseNode
            id={id}
            data={data}
            title="Slider"
            outputHandles={[
                { id: `${id}-out`, style: { top: '50%' } }
            ]}
        >
            <label className={styles.label}>
                Value: {value}
            </label>
            <input
                type="range"
                min="0"
                max="100"
                value={value}
                onChange={handleChange}
                className={styles.inputField}
            />
        </BaseNode>
    );
}
