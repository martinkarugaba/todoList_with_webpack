/**
 * @jest-environment jsdom
 */

import {
  addTodo,
  displayTodos,
  removeAndEditTodo,

} from './add-remove-edit';

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

//* test remove todo
describe('remove todo', () => {
  test('check if a todo has been removed from the DOM', () => {
    document.body.innerHTML = `
      <div class="todoList__wrapper">
      </div>`;
    const todoList = document.querySelector('.todoList__wrapper');
    removeAndEditTodo(todoList, 1);
    const todos = todoList.querySelectorAll('.todo');
    expect(todos).toHaveLength(0);
  });

  test('checks if todo has been removed from local storage', () => {
    document.body.innerHTML = `
      <div class="todoList__wrapper">
      </div>`;
    const todoList = document.querySelector('.todoList__wrapper');
    todoList.click();
    let id = 1;
    removeAndEditTodo(todoList, id);
    const mockLocalStorage = JSON.parse(
      window.localStorage.getItem('todos')
    );
    expect(mockLocalStorage).toHaveLength(0);
  });
});
