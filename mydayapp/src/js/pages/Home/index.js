export default function Home() {
  document.querySelector('.selected').classList.remove('selected');
  document.querySelector('[href="#/"]').classList.add('selected');
}
