const todoList = document.querySelector('.todoList__wrapper');
const input = document.querySelector('.input');
let todoArr = [];

export const addTodo = () => {
  const todo = {
    index: todoArr.length + 1,
    description: input.value,
    completed: false,
  };
  console.log(todo);
  todoArr.push(todo);
};

// display todo
export const displayTodo = () => {
  const todoData = todoArr.map((item) => {
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
        <button class="remove" data-index=${index}>rmv</button>
        </div>
        `;
      });
      todoList.innerHTML = todoData.join(' ');
      //<i class="fa-solid fa-trash-can remove" data-index=${index}></i>
};

// remove todo
export const removeTodo = () => {
  todoList.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove')) {
      e.target.parentElement.remove();
    }
    const todoIndex = e.target.dataset.index;
    console.log(todoIndex);
    removeTodoFromArray(todoIndex);
  });
};

export const removeTodoFromArray = (value) => {
  todoArr = todoArr.filter((item) => item.index !== value);
};

// edit todo
export const editTodo = () => {
  const editSection = document.querySelector('.edit-btn')
}
