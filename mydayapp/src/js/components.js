import { MyStore } from './store';
import { createElement } from './dom';

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
    value: 'Create a TodoMVC template',
  });
  const itemContainer = createElement(
    'li',
    {
      className: completed ? 'completed' : null,
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
    store.removeItem(id);
    itemContainer.remove();
  });
  //#endregion
  return itemContainer;
};
