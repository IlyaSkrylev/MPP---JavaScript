import React from 'react';

function TaskCard({ task }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '8px', marginBottom: '8px', borderRadius: '4px', backgroundColor: '#f0f0f0ff' }}>
      <h4>{task.title} ({task.id})</h4>
      <p>{task.description}</p>
      <p><b>Исполнитель:</b> {task.assignee}</p>
    </div>
  );
}

export default TaskCard;