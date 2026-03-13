/** @type {import('./$types').PageLoad} */
export const load = async ({ fetch }) => {
  const res = await fetch('/projects.json');
  const projects = await res.json();

  return {
    projects
  };
};