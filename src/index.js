import './index.css';

const todoList = document.querySelector('.todoList__wrapper');

const todoArray = [
  {
    index: 0,
    description: 'Buy Groceries',
    completed: false,
  },
  {
    index: 1,
    description: 'Go to the gym',
    completed: false,
  },
  {
    index: 2,
    description: 'Have lunch',
    completed: false,
  },
  {
    index: 3,
    description: 'Take an afternoon nap',
    completed: false,
  },
];

todoArray.forEach((item) => {
  const { description } = item;

  todoList.innerHTML += `
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
