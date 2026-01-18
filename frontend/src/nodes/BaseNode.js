import { Handle, Position } from 'reactflow';
import styles from './BaseNode.module.css';

export const BaseNode = ({
    id,
    data,
    title,
    children,
    inputHandles = [],
    outputHandles = [],
    style = {}
}) => {
    return (
        <div className={styles.nodeContainer} style={style}>
            {/* Input Handles */}
            {inputHandles.map((handle) => (
                <Handle
                    key={handle.id}
                    type="target"
                    position={Position.Left}
                    id={handle.id}
                    className={styles.handle}
                    style={handle.style}
                />
            ))}

            {/* Header */}
            <div className={styles.nodeHeader}>
                <span>{title}</span>
            </div>

            {/* Content */}
            <div className={styles.nodeBody}>
                {children}
            </div>

            {/* Output Handles */}
            {outputHandles.map((handle) => (
                <Handle
                    key={handle.id}
                    type="source"
                    position={Position.Right}
                    id={handle.id}
                    className={styles.handle}
                    style={handle.style}
                />
            ))}
        </div>
    );
};
