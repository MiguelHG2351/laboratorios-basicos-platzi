import { createElement } from './dom';

export const todoItem = (title, completed) => {
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
  toggleInput.addEventListener('change', () => {
    itemContainer.classList.toggle('completed');
  });
  //#endregion
  return itemContainer;
};
