import './css/base.css';
import { MyStore } from './js/store';
import { sayHello, components } from './js/utils';

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

console.log(sayHello('Hello'));
