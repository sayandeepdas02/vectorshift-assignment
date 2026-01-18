// submit.js

import { useStore } from './store';
import { shallow } from 'zustand/shallow';
import { useState } from 'react';
import Alert from './ui/Alert';

const selector = (state) => ({
    nodes: state.nodes,
    edges: state.edges,
});

export const SubmitButton = () => {
    const { nodes, edges } = useStore(selector, shallow);
    const [alertState, setAlertState] = useState({ isOpen: false, title: '', message: null });

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:8000/pipelines/parse', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nodes, edges }),
            });

            const data = await response.json();

            setAlertState({
                isOpen: true,
                title: 'Pipeline Analysis',
                message: (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span>Number of Nodes:</span>
                            <span style={{ fontWeight: '600' }}>{data.num_nodes}</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span>Number of Edges:</span>
                            <span style={{ fontWeight: '600' }}>{data.num_edges}</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span>Is DAG:</span>
                            <span style={{
                                fontWeight: '600',
                                color: data.is_dag ? '#16a34a' : '#dc2626'
                            }}>
                                {data.is_dag ? 'Yes' : 'No'}
                            </span>
                        </div>
                    </div>
                )
            });

        } catch (error) {
            console.error('Error submitting pipeline:', error);
            setAlertState({
                isOpen: true,
                title: 'Error',
                message: 'Failed to submit pipeline. Please ensure the backend is running.'
            });
        }
    };

    const closeAlert = () => {
        setAlertState(prev => ({ ...prev, isOpen: false }));
    };

    return (
        <>
            <div style={{
                padding: '16px 20px',
                borderTop: '1px solid var(--border-primary)',
                backgroundColor: 'var(--bg-secondary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background-color 0.3s ease, border-color 0.3s ease'
            }}>
                <button
                    type="submit"
                    onClick={handleSubmit}
                    style={{
                        padding: '10px 20px',
                        borderRadius: '6px',
                        border: 'none',
                        backgroundColor: 'var(--accent-primary)',
                        color: 'white',
                        fontSize: '14px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                        transition: 'all 0.15s ease',
                    }}
                    onMouseOver={(e) => {
                        e.target.style.backgroundColor = 'var(--accent-hover)';
                        e.target.style.boxShadow = '0 4px 6px -1px var(--shadow-sm)';
                    }}
                    onMouseOut={(e) => {
                        e.target.style.backgroundColor = 'var(--accent-primary)';
                        e.target.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
                    }}
                >
                    Submit
                </button>
            </div>

            <Alert
                title={alertState.title}
                isOpen={alertState.isOpen}
                onClose={closeAlert}
            >
                {alertState.message}
            </Alert>
        </>
    );
}
