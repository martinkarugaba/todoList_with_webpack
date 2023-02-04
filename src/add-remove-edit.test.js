/**
 * @jest-environment jsdom
 */

import { addTodo, displayTodos, removeTodo } from './add-remove-edit';

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
});