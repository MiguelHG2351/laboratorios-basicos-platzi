export default function Completed() {
  document.querySelector('.selected').classList.remove('selected');
  document.querySelector('[href="#/completed"]').classList.add('selected');
}
