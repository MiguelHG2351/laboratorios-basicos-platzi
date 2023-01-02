import './css/base.css';
import { MyStore } from './js/store';
import { components, insertTodo } from './js/utils';
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
  console.log('clear completed');
  store.clearCompleted();
  router();
});

window.addEventListener('storage', router);
