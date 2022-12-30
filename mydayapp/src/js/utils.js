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
