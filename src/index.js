import './index.css';
import { addTodo, displayTodo, removeTodo } from './add-remove';

const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addTodo();
  displayTodo();
  form.reset();
});

removeTodo();
