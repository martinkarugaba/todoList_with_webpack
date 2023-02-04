/**
 * @jest-environment jsdom
 */

import {
  addTodo,
  displayTodos,
  editTodo,
  removeTodo,
} from './add-remove-edit.js';

//* test add todo
describe('addTodo', () => {
  test('checks if a todo is added to the DOM', () => {
    document.body.innerHTML = `
    <div class="todoList__wrapper">
      </div>`;
    addTodo('hello there');
    const todoList = document.querySelector('.todoList__wrapper');
    displayTodos(todoList);
    const todos = document.querySelectorAll('.todo');
    expect(todos).toHaveLength(1);
  });

  test('checks if todo has been added to local storage', () => {
    const mockLocalStorage = JSON.parse(
      window.localStorage.getItem('todos')
    );
    expect(mockLocalStorage).toHaveLength(1);
  });
});

describe('remove todo', () => {
  test('check if a todo has been removed from the DOM', () => {
    document.body.innerHTML = `
      <div class="todoList__wrapper">
      </div>`;
    const todoList = document.querySelector('.todoList__wrapper');
    removeTodo(todoList, 1);
    const todos = todoList.querySelectorAll('.todo');
    expect(todos).toHaveLength(0);
  });
  test('checks if todo has been removed from local storage', () => {
    document.body.innerHTML = `
      <div class="todoList__wrapper">
      </div>`;
    const todoList = document.querySelector('.todoList__wrapper');
    todoList.click();
    const id = 1;
    removeTodo(todoList, id);
    const mockLocalStorage = JSON.parse(
      window.localStorage.getItem('todos')
    );
    expect(mockLocalStorage).toHaveLength(0);
  });
});

// test edit
describe('test edit', () => {
  test('check if todo  description has changed', () => {
    document.body.innerHTML = `
      <p class="description">Hello</p>
    `;
    const todoDescription =
      document.querySelector('.description').innerText;
    
    document.body.innerHTML = `
      <input type='text' class='input' placeholder='edit todo' value='Edit todo' />
    `;
    const input = document.querySelector('.input');
    const newDescription = input.value;
    
    expect(todoDescription).toBe(newDescription);
  });
});
