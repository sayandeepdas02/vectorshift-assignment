// Alert.js
import { useEffect, useState } from 'react';

const Alert = ({ title, children, isOpen, onClose }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setVisible(true);
        } else {
            const timer = setTimeout(() => setVisible(false), 300); // Wait for transition
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    if (!visible) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'var(--overlay-bg)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            opacity: isOpen ? 1 : 0,
            transition: 'opacity 0.3s ease',
        }}>
            <div style={{
                backgroundColor: 'var(--bg-secondary)',
                borderRadius: '12px',
                padding: '24px',
                width: '90%',
                maxWidth: '400px',
                boxShadow: '0 20px 25px -5px var(--shadow-md), 0 10px 10px -5px var(--shadow-sm)',
                transform: isOpen ? 'translateY(0) scale(1)' : 'translateY(-20px) scale(0.95)',
                transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                border: '1px solid var(--border-primary)',
            }}>
                <div style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    marginBottom: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                }}>
                    <span>Running Query...</span> {/* Helper text or Icon can go here */}
                    {title}
                </div>

                <div style={{
                    color: 'var(--text-secondary)',
                    fontSize: '14px',
                    lineHeight: '1.5',
                    marginBottom: '24px'
                }}>
                    {children}
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <button
                        onClick={onClose}
                        style={{
                            padding: '8px 16px',
                            backgroundColor: 'var(--accent-primary)',
                            color: 'white',
                            borderRadius: '6px',
                            border: 'none',
                            fontSize: '14px',
                            fontWeight: '500',
                            cursor: 'pointer',
                            outline: 'none',
                            transition: 'background-color 0.2s',
                        }}
                        onMouseOver={(e) => e.target.style.backgroundColor = 'var(--accent-hover)'}
                        onMouseOut={(e) => e.target.style.backgroundColor = 'var(--accent-primary)'}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Alert;
