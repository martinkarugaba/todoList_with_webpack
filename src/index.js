import './index.css';
import {
  addTodo,
  displayTodos,
  removeAndEditTodo,
} from './add-remove-edit.js';

const todoList = document.querySelector('.todoList__wrapper');

const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addTodo();
  displayTodos(todoList);
  form.reset();
});

window.addEventListener('DOMContentLoaded', () => {
  displayTodos(todoList);
  removeAndEditTodo(todoList);
});