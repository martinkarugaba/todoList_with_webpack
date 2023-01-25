export const addToStorage = (todos) => {
  const storage = localStorage.setItem(
    'todos',
    JSON.stringify(todos)
  );
  return storage;
};

export const getFromStorage = (todoList) => {
  let storage =
    localStorage.getItem('todos') === null
      ? []
      : JSON.parse(localStorage.getItem('todos'));

  todoList.addEventListener('click', (e) => {
    
  })
  storage.forEach((item) => {
    if (item.completed === true) {
      console.log(item);
    }
  });

  return storage;
};
