import { todoItem } from './components';
import { MyStore } from './store';

const store = MyStore.initStore();

export const TYPES = {
  object: '[object Object]',
  htmlElement: '[object HTMLElement]',
  array: '[object Array]',
  string: '[object String]',
  number: '[object Number]',
  boolean: '[object Boolean]',
  undefined: '[object Undefined]',
  null: '[object Null]',
};

export const components = {
  body: document.querySelector('body'),
  inputNewTodo: document.querySelector('.new-todo'),
  inputToggle: document.querySelector('.toggle'),
  inputEdit: document.querySelector('.edit'),
  containerTodos: document.querySelector('.todo-list'),
};

export const renderTodos = () => {
  const items = [];
  const todos = store.getStore();
  const containerTodos = components.containerTodos;
  console.log(todos);

  if (containerTodos.children.length > 0) {
    containerTodos.innerHTML = '';
  }
  for (let todo of todos) {
    const item = todoItem(todo.title, todo.completed, todo.id);
    items.push(item);
  }
  containerTodos.append(...items);
};
