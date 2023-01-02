export default function Home(renderAllTodos) {
  return () => {
    console.log('here route');
    document.querySelector('.selected').classList.remove('selected');
    document.querySelector('[href="#/"]').classList.add('selected');
    console.log(document.querySelector('[href="#/"]').classList);
    renderAllTodos();
    renderAllTodos();
  };
}
