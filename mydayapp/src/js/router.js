// import { Home }

// const staticRouter = {
//   '/': Home,
// }

export function initRouter() {
  const hash = window.location.hash;
  if (hash === '') {
    window.location.hash = '#/';
  }

  // TODO: Add dynamic router
  switch (hash) {
    case '#/':
      break;
  }
  // const route = router[path];
}
