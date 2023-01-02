import { components as _compontents } from './utils';
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
  todoCount: document.querySelector('.todo-count'),
  buttonClearCompleted: document.querySelector('.clear-completed'),
};

export const render = (todos) => {
  const items = [];
  const containerTodos = components.containerTodos;

  if (containerTodos.children.length > 0) {
    containerTodos.innerHTML = '';
  }
  for (let todo of todos) {
    const item = todoItem(todo.title, todo.completed, todo.id);
    items.push(item);
  }
  _compontents.todoCount.innerHTML = `${todos.length} items left`;
  _compontents.todoCount.setAttribute('data-count', todos.length);
  containerTodos.append(...items);
};

export const renderAllTodos = () => {
  const todos = store.getStore();
  render(todos);
};

export const renderPending = () => {
  const todos = store.getPendings();
  render(todos);
};

export const renderCompleted = () => {
  const todos = store.getCompleteds();
  render(todos);
};

/**
 * @param {import('./store').ItemStore} todo
 */
export const insertTodo = (todo) => {
  const containerTodos = components.containerTodos;
  const item = todoItem(todo.title, todo.completed, todo.id);
  let lastCount = _compontents.todoCount.getAttribute('data-count') - 0;

  containerTodos.append(item);
  lastCount++;
  _compontents.todoCount.setAttribute('data-count', lastCount);
  _compontents.todoCount.innerHTML = `${lastCount} items left`;
};
