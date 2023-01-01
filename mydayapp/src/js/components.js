import { MyStore } from './store';
import { createElement } from './dom';
import { components } from './utils';

const store = MyStore.initStore();

export const todoItem = (title, completed, id) => {
  //#region Create elements
  const destroy = createElement('button', { className: 'destroy' });
  const label = createElement('label', {}, title);
  const toggleInput = createElement('input', {
    className: 'toggle',
    type: 'checkbox',
    checked: completed,
  });
  const view = createElement('div', { className: 'view' }, [
    toggleInput,
    label,
    destroy,
  ]);
  const editInput = createElement('input', {
    className: 'edit',
    value: title,
  });
  const itemContainer = createElement(
    'li',
    {
      className: completed ? 'completed' : '',
    },
    [view, editInput]
  );
  //#endregion

  //#region Events
  itemContainer.dataset.key = id;
  toggleInput.addEventListener('change', () => {
    itemContainer.classList.toggle('completed');
    store.toggleCompleted(id);
  });
  destroy.addEventListener('click', () => {
    let count = components.todoCount.getAttribute('data-count') - 0;
    store.removeItem(id);
    itemContainer.remove();
    console.log(count);
    count--;
    components.todoCount.setAttribute('data-count', count);
    components.todoCount.innerHTML = `${count} items left`;
  });
  itemContainer.addEventListener('dblclick', () => {
    itemContainer.classList.add('editing');
    document.addEventListener(
      'keyup',
      (e) => {
        console.log(e.key);
        if (e.keyCode === 27) {
          itemContainer.classList.remove('editing');
        }
      },
      { once: true }
    );
  });
  editInput.addEventListener('change', (e) => {
    let title = e.target.value.trim();
    if (title === '') {
      alert('Please enter a value');
      return;
    }
    store.editTitleItem(title, id);
    label.innerHTML = title;
    itemContainer.classList.remove('editing');
  });
  editInput.focus();
  //#endregion
  return itemContainer;
};
