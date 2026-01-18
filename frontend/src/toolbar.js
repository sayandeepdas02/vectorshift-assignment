
// toolbar.js

import { DraggableNode } from './draggableNode';
import { ThemeToggle } from './ThemeToggle';

export const PipelineToolbar = () => {

    return (
        <div style={{
            padding: '16px 20px',
            borderBottom: '1px solid var(--border-primary)',
            backgroundColor: 'var(--bg-secondary)',
            transition: 'background-color 0.3s ease, border-color 0.3s ease'
        }}>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                maxWidth: '1400px',
                margin: '0 auto',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <img
                        src="/vectorshift-logo.png"
                        alt="Vector Shift Logo"
                        style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '8px'
                        }}
                    />
                    <h1 style={{
                        margin: 0,
                        fontSize: '20px',
                        fontWeight: '600',
                        color: 'var(--text-primary)',
                        letterSpacing: '-0.02em'
                    }}>
                        Vector Shift
                    </h1>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', flex: 1, justifyContent: 'center' }}>
                    <DraggableNode type='customInput' label='Input' />
                    <DraggableNode type='llm' label='LLM' />
                    <DraggableNode type='customOutput' label='Output' />
                    <DraggableNode type='text' label='Text' />
                    <DraggableNode type='math' label='Math' />
                    <DraggableNode type='delay' label='Delay' />
                    <DraggableNode type='boolean' label='Boolean' />
                    <DraggableNode type='slider' label='Slider' />
                    <DraggableNode type='condition' label='Condition' />
                </div>
                <ThemeToggle />
            </div>
        </div>
    );
};
