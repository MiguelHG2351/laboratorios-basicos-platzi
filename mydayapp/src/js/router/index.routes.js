import { Home, Completed, Pending } from '../pages';

const routes = {
  '#/': Home,
  '#/pending': Pending,
  '#/completed': Completed,
};

const router = () => {
  const hash = window.location.hash;
  if (hash === '') {
    window.location.hash = '#/';
  }

  const render = routes[hash] ? routes[hash] : Home;
  render(hash);
};

export { router };
