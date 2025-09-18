import React, { useState } from 'react';

function TaskForm({ columns, onCreate }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [assignee, setAssignee] = useState('');
  const [status, setStatus] = useState(columns?.[0] || 'ToDo');

  const handleSubmit = e => {
    e.preventDefault();
    if (!title.trim()) return alert('Введите название задачи');

    onCreate({
      title,
      description,
      assignee,
      status,
    });

    setTitle('');
    setDescription('');
    setAssignee('');
    setStatus(columns?.[0] || 'ToDo');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px' }}>
      <input
        type="text"
        placeholder="Название"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
        style={{ marginBottom: '10px', padding: '8px' }}
      />
      <textarea
        placeholder="Описание"
        value={description}
        onChange={e => setDescription(e.target.value)}
        rows={3}
        style={{ marginBottom: '10px', padding: '8px' }}
      />
      <input
        type="text"
        placeholder="Исполнитель"
        value={assignee}
        onChange={e => setAssignee(e.target.value)}
        style={{ marginBottom: '10px', padding: '8px' }}
      />
      <select value={status} onChange={e => setStatus(e.target.value)} style={{ marginBottom: '10px', padding: '8px' }}>
        {(columns || ['ToDo', 'In Progress', 'Done']).map(col => (
          <option key={col} value={col}>{col}</option>
        ))}
      </select>
      <button type="submit" style={{ padding: '10px' }}>Добавить задачу</button>
    </form>
  );
}

export default TaskForm;


