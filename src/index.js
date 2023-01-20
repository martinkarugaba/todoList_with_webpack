import './index.css';
import { addTodo, displayTodo, removeTodo } from './add-remove';
import { addToStorage } from './locaStorage';

const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addTodo();
  displayTodo();
  form.reset();
  removeTodo();
});

window.addEventListener('DOMContentLoaded', () => {
  displayTodo();
  removeTodo();
});
