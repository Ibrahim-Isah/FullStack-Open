export function getCourse() {
  return fetch('http://localhost:3333/course').then((data) => data.json());
}
