import React from 'react';

function ProjectCard({ project, onSelect }) {
  return (
    <div 
      onClick={() => onSelect(project.id)} 
      style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px', cursor: 'pointer' }}
    >
      <h3>{project.name}</h3>
      <p>Задач: {project.tasks.length}</p>
    </div>
  );
}

export default ProjectCard;