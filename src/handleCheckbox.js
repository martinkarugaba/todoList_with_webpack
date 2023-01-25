import { addToStorage, getFromStorage } from './locaStorage';

const todoList = document.querySelector('.todoList__wrapper');

const handleCheck = () => {
  todoList.addEventListener('change', (e) => {
    let todos = getFromStorage();
    const todoItem =
      e.target.parentElement.querySelector('.description');
    const todoIndex = todoItem.dataset.edit;
    if (
      e.target.classList.contains('checkbox') &&
      e.target.checked === true
    ) {
      todos[todoIndex - 1].completed = true;
      todoItem.classList.add('line-through');
      addToStorage(todos);
    }
    if (
      e.target.classList.contains('checkbox') &&
      e.target.checked === false
    ) {
      todos[todoIndex - 1].completed = false;
      todoItem.classList.remove('line-through');
      addToStorage(todos);
    }
  });
};

export default handleCheck;
