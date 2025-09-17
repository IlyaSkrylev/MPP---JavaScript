export function filterTasksByStatus(tasks, status) {
  return tasks.filter(task => task.status === status);
}
