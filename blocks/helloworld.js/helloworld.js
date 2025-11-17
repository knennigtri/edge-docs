export default function decorate(block) {
  const h1 = document.createElement('h1');
  h1.textContent = 'I am Hello World!';
  block.appendChild(h1);
}
