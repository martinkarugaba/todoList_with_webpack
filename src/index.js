import './index.css';
import {
  addTodo,
  displayTodo,
  removeAndEditTodo,
} from './add-remove.js';

const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addTodo();
  displayTodo();
  form.reset();
  removeAndEditTodo();
});

window.addEventListener('DOMContentLoaded', () => {
  displayTodo();
  removeAndEditTodo();
});
