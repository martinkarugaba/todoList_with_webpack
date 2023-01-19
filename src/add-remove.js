const todoList = document.querySelector('.todoList__wrapper');
const input = document.querySelector('.input');
const todoArr = [];

export const addTodo = () => {
  const todo = {
    index: 0,
    description: input.value,
    completed: false,
  };
  console.log(todo);
  todoArr.push(todo);
  console.log(todoArr);
};

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
      </div>
    `;
  });
  todoList.innerHTML = todoData.join(' ');
};
