function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesEl = document.querySelector('#boxes');

createBtn.addEventListener('click', createClick);
destroyBtn.addEventListener('click', destroyClick);

function createClick() {
    const inputValue = Number(inputEl.value);
    boxesEl.innerHTML = '';
    createBoxes(inputValue);
}

function createBox(size, color) {
  const box = document.createElement('div');
  box.className = 'box';
  box.style.width = `${size}px`;
  box.style.height = `${size}px`;
  box.style.backgroundColor = color;
  return box;
}

function createBoxes(amount) {
  const boxesEl = document.querySelector('#boxes');
  boxesEl.innerHTML = ''; 
  let size = 30;

  for (let i = 0; i < amount; i += 1) {
    const color = getRandomHexColor();
    const box = createBox(size, color);
    boxesEl.appendChild(box);
    size += 10;
  }
}

function destroyClick() {
    boxesEl.innerHTML = '';
    inputEl.value = '';
}
