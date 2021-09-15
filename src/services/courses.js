export function getCourse() {
  return fetch('http://localhost:3333/course').then((data) => data.json());
}

export function getNotes() {
  return fetch('http://localhost:3333/notes').then((res) => res.json());
}
