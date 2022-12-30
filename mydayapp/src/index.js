import './css/base.css';
import { MyStore } from './js/store';
import { components, renderTodos } from './js/utils';

// INIT STORE
const store = MyStore.initStore();

// Events
// detect enter on input
components.inputNewTodo.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    console.log(e.target.value);
    store.addItem(e.target.value);
    renderTodos();
    e.target.value = '';
  }
});

document.addEventListener('DOMContentLoaded', renderTodos);

window.addEventListener('storage', () => {
  renderTodos();
});
