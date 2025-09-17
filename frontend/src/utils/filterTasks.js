// tasks - массив объектов { id, status, ... }
// status - строка, например 'completed', 'pending', 'in-progress'
export function filterTasksByStatus(tasks, status) {
  return tasks.filter(task => task.status === status);
}
