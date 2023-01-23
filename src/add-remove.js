import { addToStorage, getFromStorage } from './locaStorage.js';

const todoList = document.querySelector('.todoList__wrapper');
const input = document.querySelector('.input');
//* edit variables
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
  // update indices
  todos.forEach((item, index) => {
    item.index = index + 1;
  });
  addToStorage(todos);
};

//* display todo
export const displayTodo = () => {
  const todoData = todos.map((item) => {
    const { index, description } = item;
    return `
      <div class="todo">
        <input type="checkbox" name="" id="" />
        <p class="description" data-edit=${index}>${description}</p>
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

//* remove and edit todo
export const removeAndEditTodo = () => {
  todoList.addEventListener('click', (e) => {
    //* remove todo
    if (e.target.classList.contains('remove')) {
      e.target.parentElement.style.display = 'none';
      // remove todo from array=
      const todoIndex = e.target.dataset.index;
      todos = todos.filter((item) => item.index !== +todoIndex);
      // update indices
      //todos.forEach((todo, index) => {
      //  todo.index = index + 1;
      //});
      // update local storage
      addToStorage(todos);
    }

    //* edit todo
    if (e.target.classList.contains('edit__todo')) {
      const todoDescription =
        e.target.parentElement.querySelector('.description');
      
      editSection.classList.add('show_edit_section');
      editInput.value = todoDescription.innerText;
      // discard changes
      discardEditButton.addEventListener('click', () => {
        editSection.classList.remove('show_edit_section');
      });

      // save changes
      saveEditButton.addEventListener('click', () => {
        const editIndex = todoDescription.dataset.edit;
        const editItem = todos.find(
          (item) => item.index === +editIndex
        );
        console.log(editItem);
        editItem.description = editInput.value;
        console.log(editItem);
        todoDescription.innerText = editInput.value;
        // update local storage
        addToStorage(todos);
        // hide edit section
        editSection.classList.remove('show_edit_section');
      });
    }
  });
};
