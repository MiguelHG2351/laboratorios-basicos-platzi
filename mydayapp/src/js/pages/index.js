import { renderAllTodos, renderPending, renderCompleted } from '../utils';

function renderRoute(path, render) {
  document.querySelector('.selected').classList.remove('selected');
  document.querySelector(`[href="${path}"]`).classList.add('selected');
  render();
  // return () => {
  // };
}

let routes = {
  Home: (path) => renderRoute(path, renderAllTodos),
  Pending: (path) => renderRoute(path, renderPending),
  Completed: (path) => renderRoute(path, renderCompleted),
};

export const { Home, Completed, Pending } = routes;
