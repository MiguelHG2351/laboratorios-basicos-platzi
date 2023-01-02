import Home from '../pages/Home';
import Pending from '../pages/pending';
import Completed from '../pages/completed';

const routes = {
  '#/': Home,
  '#/pending': Pending,
  '#/completed': Completed,
};

const router = () => {
  console.log('router');
  const hash = window.location.hash;
  if (hash === '') {
    window.location.hash = '#/';
  }

  const render = routes[hash] ? routes[hash] : Home;

  render();
};

export { router };
