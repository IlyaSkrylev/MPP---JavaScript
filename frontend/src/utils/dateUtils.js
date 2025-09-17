export function formatDate(date) {
  const d = new Date(date);
  return d.toLocaleDateString();
}

export function getCurrentDate() {
  return new Date();
}
