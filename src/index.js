import './index.css';
import Todo from './todo.js';
import Storage from './handleLocalStorage.js';

const todoListWrapper = document.querySelector('.todoList__wrapper');
const form = document.querySelector('.form');
const input = document.querySelector('.input');

let todosArr = Storage.getFromStorage();
let index = todosArr.length;

class handleTodos {
  static displayTodos = () => {
    const displayTodos = todosArr.map((todo) => {
      const { description } = todo;

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
    todoListWrapper.innerHTML = displayTodos.join(' ');
  };

  static removeTodo = () => {
    todoListWrapper.addEventListener('click', (e) => {
      if (e.target.classList.contains('remove')) {
        // remove todo from ui
        e.target.parentElement.remove();
      }

      // remove todo from array
      const todoIndex = e.target.dataset.index;
      handleTodos.removeTodoFromArray(todoIndex);
    });
  };

  static removeTodoFromArray(index) {
    todosArr.filter((todo) => todo.index !== index);
    Storage.addToStorage(todosArr);
    console.log(todosArr);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  handleTodos.displayTodos();
  handleTodos.removeTodo();
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const todo = new Todo(index, input.value, false);
  console.log(todo);
  todosArr = [...todosArr, todo];
  handleTodos.displayTodos();
  form.reset();
  handleTodos.removeTodo();
  Storage.addToStorage(todosArr);
});
