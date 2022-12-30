import { createElement } from './dom';

export const todoItem = (title) => {
  const destroy = createElement('button', { className: 'destroy' });
  const label = createElement('label', {}, title);
  const toggleInput = createElement('input', {
    className: 'toggle',
    type: 'checkbox',
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
  const itemContainer = createElement('li', {}, [view, editInput]);

  return itemContainer;
};
