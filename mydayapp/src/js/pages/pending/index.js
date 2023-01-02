export default function Pending(renderTodosPending) {
  return () => {
    document.querySelector('.selected').classList.remove('selected');
    document.querySelector('[href="#/pending"]').classList.add('selected');
    renderTodosPending();
  };
}
