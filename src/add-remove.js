import { addToStorage, getFromStorage } from './locaStorage.js';

const todoList = document.querySelector('.todoList__wrapper');
const input = document.querySelector('.input');
let todos = getFromStorage();

export const addTodo = () => {
  const todo = {
    index: todos.length + 1,
    description: input.value,
    completed: false,
  };
  todos.push(todo);
  addToStorage(todos);
};

// display todo
export const displayTodo = () => {
  const todoData = todos.map((item) => {
    const { index, description } = item;
    return `
      <div class="todo">
        <input type="checkbox" name="" id="" />
        <p class="description">${description}</p>
        <div class="dots">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
        <i class="fa-solid fa-trash-can remove" data-index=${index}></i>
        </div>
        `;
  });
  todoList.innerHTML = todoData.join(' ');
};

// remove todo
export const removeTodo = () => {
  todoList.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove')) {
      e.target.parentElement.remove();
    }
    const todoIndex = e.target.dataset.index;
    todos = todos.filter((item) => item.index !== +todoIndex);
    addToStorage(todos);
  });
};

// edit todo
export const editTodo = () => {
  const editSection = document.querySelector('.edit-btn');
};
