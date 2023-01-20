import { addToStorage, getFromStorage } from './locaStorage.js';

const todoList = document.querySelector('.todoList__wrapper');
const input = document.querySelector('.input');
// edit variables
const editSection = document.querySelector('.edit__section');
const saveEditButton = document.querySelector('.save__edit');
const discardEditButton = document.querySelector('.discard__edit');
const editInput = document.querySelector('.edit__input');

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
        <p class="description" data-editindex=${index}>${description}</p>
        <div class="dots">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
        <i class="fa-solid fa-file-pen edit__todo"></i>
        <i class="fa-solid fa-trash-can remove" data-index=${index}></i>
        </div>
        `;
  });
  todoList.innerHTML = todoData.join(' ');
};

// remove todo
export const removeAndEditTodo = () => {
  todoList.addEventListener('click', (e) => {
    //* remove todo
    if (e.target.classList.contains('remove')) {
      e.target.parentElement.remove();
    }
    const todoIndex = e.target.dataset.index;
    todos = todos.filter((item) => item.index !== +todoIndex);
    addToStorage(todos);

    //* edit todo
    if (e.target.classList.contains('edit__todo')) {
      editSection.classList.add('show_edit_section');
      const todoDescription = e.target.parentElement.querySelector('.description');
      editInput.value = todoDescription.innerText;

      // discard button
      discardEditButton.addEventListener('click', () => {
        editSection.classList.remove('show_edit_section');
      });

      // save button
      saveEditButton.addEventListener('click', () => {
        todoDescription.innerText = editInput.value;
        editSection.classList.remove('show_edit_section');
        addToStorage(todos);
      });
    }
  });
};