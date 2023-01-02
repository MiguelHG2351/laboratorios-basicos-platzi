import Home from '../pages/Home';
import Pending from '../pages/pending';
import Completed from '../pages/completed';

import { renderAllTodos, renderPending, renderCompleted } from '../utils';

const routes = {
  '#/': Home(renderAllTodos),
  '#/pending': Pending(renderPending),
  '#/completed': Completed(renderCompleted),
};

const router = () => {
  console.log('router');
  const hash = window.location.hash;
  if (hash === '') {
    window.location.hash = '#/';
  }

  const render = routes[hash] ? routes[hash] : Home;

  console.log(hash);
  console.log(document.querySelector('[href="#/"]').classList);
  console.log('ñ');
  render();
};

export { router };
