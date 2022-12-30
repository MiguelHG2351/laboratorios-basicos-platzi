import './css/base.css';
import { MyStore } from './js/store';
import { components } from './js/utils';
import { todoItem } from './js/components';

// INIT STORE
const store = MyStore.initStore();

// Events
// detect enter on input
components.inputNewTodo.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    console.log(e.target.value);
    store.addItem(e.target.value);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const items = [];
  const todos = store.getStore();
  const containerTodos = components.containerTodos;
  console.log(todos);

  for (let todo of todos) {
    const item = todoItem(todo.title, todo.completed);
    items.push(item);
  }
  containerTodos.append(...items);
});
