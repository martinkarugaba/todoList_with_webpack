export default class handleLocalStorage {
  static addToStorage = (todosArr) => {
    const storage = localStorage.setItem(
      'todos',
      JSON.stringify(todosArr)
    );
    return storage;
  };

  static getFromStorage = () => {
    const storage = localStorage.getItem('todos') === null ? [] : JSON.parse(localStorage.getItem('todos'));
    return storage;
  };
}
