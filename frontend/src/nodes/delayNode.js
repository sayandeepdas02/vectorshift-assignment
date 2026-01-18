// delayNode.js

import { useState } from 'react';
import { BaseNode } from './BaseNode';
import styles from './BaseNode.module.css';

export const DelayNode = ({ id, data }) => {
    const [delay, setDelay] = useState(data.delay || 1000);

    const handleDelayChange = (e) => {
        setDelay(e.target.value);
    };

    return (
        <BaseNode
            id={id}
            data={data}
            title="Delay"
            inputHandles={[
                { id: `${id}-in`, style: { top: '50%' } }
            ]}
            outputHandles={[
                { id: `${id}-out`, style: { top: '50%' } }
            ]}
        >
            <label className={styles.label}>
                Delay (ms):
                <input
                    type="number"
                    value={delay}
                    onChange={handleDelayChange}
                    className={styles.inputField}
                />
            </label>
        </BaseNode>
    );
}
