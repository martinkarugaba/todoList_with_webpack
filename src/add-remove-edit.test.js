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
