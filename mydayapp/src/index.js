import './css/base.css';
import { MyStore } from './js/store';
import { components, renderTodos, insertTodo } from './js/utils';
import { router } from './js/router/index.routes';

// INIT STORE
const store = MyStore.initStore();

window.addEventListener('hashchange', router);
window.addEventListener('load', router);

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

// TODO: Pasar esto a cada ruta ya que el evento hash se dispara en cada cambio de ruta
document.addEventListener('DOMContentLoaded', renderTodos);

window.addEventListener('storage', () => {
  renderTodos();
});
