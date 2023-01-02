export default function Pending() {
  document.querySelector('.selected').classList.remove('selected');
  document.querySelector('[href="#/pending"]').classList.add('selected');
}
