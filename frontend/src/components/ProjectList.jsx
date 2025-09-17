import React from 'react';
import ProjectCard from './ProjectCard';

function ProjectList({ projects, onSelect }) {
  return (
    <div>
      <h2>Список проектов</h2>
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} onSelect={onSelect} />
      ))}
    </div>
  );
}

export default ProjectList;