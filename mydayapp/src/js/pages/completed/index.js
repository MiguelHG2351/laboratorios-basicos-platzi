export default function Completed(renderTodosCompleted) {
  return () => {
    document.querySelector('.selected').classList.remove('selected');
    document.querySelector('[href="#/completed"]').classList.add('selected');
    console.log('selected');
    renderTodosCompleted();
  };
}
