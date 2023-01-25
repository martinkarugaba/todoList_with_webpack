import { displayTodos } from './add-remove-edit.js';
import { addToStorage } from './locaStorage.js';

const handleCheck = (todos, todoList) => {
  todoList.addEventListener('change', (e) => {
    const todoItem =
      e.target.parentElement.querySelector('.description');
    const todoIndex = todoItem.dataset.edit;

    todos.forEach((todo) => {
      if (todo.completed === true) {
        todoItem.classList.add('line-through');
      }
    });

    if (
      e.target.classList.contains('checkbox') &&
      e.target.checked === true
    ) {
      todos[todoIndex - 1].completed = true;
      todoItem.classList.add('line-through');
      addToStorage(todos);
      displayTodos()
    }
    if (
      e.target.classList.contains('checkbox') &&
      e.target.checked === false
    ) {
      todos[todoIndex - 1].completed = false;
      todoItem.classList.remove('line-through');
      addToStorage(todos);
      displayTodos()
    }
  });
};

export { handleCheck };
