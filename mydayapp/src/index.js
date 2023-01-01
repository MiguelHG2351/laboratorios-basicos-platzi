import './css/base.css';
import { MyStore } from './js/store';
import { components, renderTodos, insertTodo } from './js/utils';
import { initRouter } from './js/router';

// INIT STORE
const store = MyStore.initStore();

window.addEventListener('hashchange', initRouter);
window.addEventListener('load', initRouter);

// Events
// detect enter on input
components.inputNewTodo.addEventListener('keyup', (e) => {
  if (e.keyCode === 13 && e.target.value !== '') {
    let title = e.target.value.trim();
    const item = store.addItem(title);
    insertTodo(item);
    e.target.value = '';
  }
});

components.buttonClearCompleted.addEventListener('click', () => {
  store.clearCompleted();
  renderTodos();
});

document.addEventListener('DOMContentLoaded', renderTodos);

window.addEventListener('storage', () => {
  renderTodos();
});
