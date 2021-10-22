const baseUrl = `${process.env.REACT_APP_API_URL}/todos`;

export const loadTodos = async () => {
  const response = await fetch(baseUrl);
  return response.json();
};

export const getTodo = async (id) => {
  const response = await fetch(`${baseUrl}/${id}`);
  return response.json();
};

export const createTodo = async (todo) => {
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: todo.title, completed: todo.completed }),
  });
  return response.json();
};

export const updateTodo = async (todo) => {
  const response = await fetch(`${baseUrl}/${todo.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id: todo.id, title: todo.title, completed: todo.completed }),
  });
  return response.json();
};

export const deleteTodo = async (id) => {
  const response = await fetch(`${baseUrl}/${id}`, { method: 'DELETE' });
  return response.json();
};
