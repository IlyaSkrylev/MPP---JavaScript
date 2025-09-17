import React, { useMemo, useState } from 'react';
import ProjectList from '../components/ProjectList';
import TaskCard from '../components/TaskCard';
import {generateId} from '../utils/generateId'

export default function Projects() {
  const columns = ['ToDo', 'In Progress', 'Done'];

  const [projects, setProjects] = useState([
    {
      id: 1,
      name: 'Учебный проект',
      tasks: [
        { id: generateId(), title: 'Инициализация проекта', description: 'Создать проект на Vite и установить зависимости', assignee: 'Петров Петр', status: columns[0] },
        { id: generateId(), title: 'Добавить навигацию', description: 'Маршруты: Главная, Проекты, Профиль', assignee: 'Иванов Иван', status: columns[1] },
        { id: generateId(), title: 'Добавить Kanban-доску', description: 'Создать три колонки: TODO, В работе, Готово', assignee: 'Сидоров Василий', status: columns[2] },
      ],
    },
    { id: 2, name: 'Система управления клиентами', tasks: [
        { id: generateId(), title: 'Настроить базу данных', description: 'Создать таблицы для клиентов и контактов', assignee: 'Кузнецова Мария', status: columns[0] },
        { id: generateId(), title: 'Импорт контактов', description: 'Добавить загрузку CSV с валидацией', assignee: 'Иванов Иван', status: columns[1] },
        { id: generateId(), title: 'Поиск и фильтры', description: 'Реализовать поиск по имени и фильтрацию по статусу', assignee: 'Петров Петр', status: columns[0] },
        { id: generateId(), title: 'API для мобильного клиента', description: 'Создать REST-эндпоинты для основных операций', assignee: 'Сидоров Василий', status: columns[2] },
      ] },
    { id: 3, name: 'Корпоративный сайт', tasks: [
        { id: generateId(), title: 'Главная страница', description: 'Верстка и адаптивный макет главной страницы', assignee: 'Иванова Ольга', status: columns[0] },
        { id: generateId(), title: 'SEO и аналитика', description: 'Добавить мета-теги, sitemap и подключить аналитикy', assignee: 'Сидоров Василий', status: columns[2] },
      ] },
  ]);

  const [selectedProjectId, setSelectedProjectId] = useState(projects[0]?.id ?? null);

  const selectedProject = useMemo(
    () => projects.find(p => p.id === selectedProjectId) || null,
    [projects, selectedProjectId]
  );

  const handleSelectProject = id => setSelectedProjectId(id);

  const addTask = (projectId, task) => {
    setProjects(prev => prev.map(p => (
      p.id === projectId
        ? { ...p, tasks: [...p.tasks, task] }
        : p
    )));
  };

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [assignee, setAssignee] = useState('');
  const [status, setStatus] = useState(columns[0]);

  const handleSubmit = e => {
    e.preventDefault();
    if (!selectedProject) return;
    if (!title.trim()) return alert('Введите название задачи');

    addTask(selectedProject.id, {
      id: generateId(),
      title,
      description,
      assignee,
      status,
    });

    setTitle('');
    setDescription('');
    setAssignee('');
    setStatus(columns[0]);
  };

  return (
    <div style={{ display: 'flex', gap: '24px' }}>
      <div style={{ width: '280px', flexShrink: 0 }}>
        <ProjectList projects={projects} onSelect={handleSelectProject} />
      </div>

      <div style={{ flex: 1 }}>
        {selectedProject ? (
          <div>
            <h2>{selectedProject.name}</h2>

            <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
              {columns.map(col => (
                <div key={col} style={{ flex: 1 }}>
                  <h3>{col}</h3>
                  {selectedProject.tasks.filter(task => task.status === col).map(task => (
                    <TaskCard key={task.id} task={task} />
                  ))}
                </div>
              ))}
            </div>

            <h3>Создать задачу</h3>
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
                {columns.map(col => (
                  <option key={col} value={col}>{col}</option>
                ))}
              </select>
              <button type="submit" style={{ padding: '10px' }}>Добавить задачу</button>
            </form>
          </div>
        ) : (
          <p>Выберите проект из списка слева</p>
        )}
      </div>
    </div>
  );
}