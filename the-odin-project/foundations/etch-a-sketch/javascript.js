let isMouseDown = false;
let isBorderVisible = false;
let colorType = '#6EB7F2';

const getRandomColor = () => `#${Math.random().toString(16).slice(-6)}`;
const draw = (e) => {
  if (e.type === 'mousedown') isMouseDown = true;
  if (!isMouseDown) return;

  const cell = e.target;
  if (colorType === 'rainbow') {
    cell.style.backgroundColor = getRandomColor();
  } else {
    cell.style.backgroundColor = colorType;
  }
  e.stopPropagation();
  e.preventDefault();
};

const setColor = () => {
  const hex = document.querySelector('.change-color').value;
  colorType = hex;
};
const setRainbowColor = () => {
  colorType = 'rainbow';
};
const toggleBorder = (e) => {
  isBorderVisible = !isBorderVisible;
  if (e) document.querySelector('.grid').classList.toggle('border');
  [...document.querySelectorAll('.cell')].forEach((cell) => {
    cell.classList.toggle('border');
  });
};

const renderGrid = () => {
  const size = (() => {
    const { value } = document.querySelector('.grid-size');
    if (value > 64) return 64;
    if (value < 4) return 4;
    return value;
  })();
  const grid = document.querySelector('.grid');

  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  const cells = [];
  for (let i = 0; i < size ** 2; i += 1) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cells.push(cell);
  }
  grid.replaceChildren(...cells);

  [...document.querySelectorAll('.cell')].forEach((cell) => {
    cell.addEventListener('mouseover', draw);
    cell.addEventListener('mousedown', draw);
  });

  if (isBorderVisible) {
    toggleBorder();
    isBorderVisible = true;
  }
};

const addListeners = (...argsArr) => {
  argsArr.forEach(([query, type, fn]) => {
    const target = typeof query === 'string'
      ? document.querySelector(query) : query;
    target.addEventListener(type, fn);
  });
};

addListeners(
  [window, 'mouseup', () => { isMouseDown = false; }],
  ['.change-color', 'input', setColor],
  ['.grid-size', 'input', renderGrid],
  ['.refresh-grid', 'click', renderGrid],
  ['.rainbow', 'click', setRainbowColor],
  ['.toggle-border', 'click', toggleBorder],
);
renderGrid();
setColor();
