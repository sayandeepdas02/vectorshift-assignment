// draggableNode.js

export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType }
    event.target.style.cursor = 'grabbing';
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div
      className={type}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = 'grab')}
      style={{
        cursor: 'grab',
        minWidth: '80px',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '6px',
        backgroundColor: 'var(--bg-tertiary)',
        color: 'var(--text-primary)',
        border: '1px solid var(--border-primary)',
        justifyContent: 'center',
        flexDirection: 'column',
        fontSize: '13px',
        fontWeight: '500',
        transition: 'all 0.2s',
        padding: '0 12px',
      }}
      draggable
      onMouseOver={(e) => {
        e.target.style.borderColor = 'var(--border-hover)';
        e.target.style.color = 'var(--accent-primary)';
        e.target.style.backgroundColor = 'var(--accent-light)';
      }}
      onMouseOut={(e) => {
        e.target.style.borderColor = 'var(--border-primary)';
        e.target.style.color = 'var(--text-primary)';
        e.target.style.backgroundColor = 'var(--bg-tertiary)';
      }}
    >
      <span>{label}</span>
    </div>
  );
};
