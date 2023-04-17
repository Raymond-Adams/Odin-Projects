let isMouseDown = false;
let isBorderVisible = false;
let colorType = 'brown';
let gridSize = 24;

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

const setColor = (e) => {
  colorType = 'red';
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
  const grid = document.querySelector('.grid');

  grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

  const cells = [];
  for (let i = 0; i < gridSize ** 2; i += 1) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cells.push(cell);
  }
  grid.replaceChildren(...cells);

  document.querySelector('.grid').addEventListener('mouseup', () => {
    isMouseDown = false;
  });
  [...document.querySelectorAll('.cell')].forEach((cell) => {
    cell.addEventListener('mouseover', draw);
    cell.addEventListener('mousedown', draw);
  });

  if (isBorderVisible) {
    toggleBorder();
    isBorderVisible = true;
  }
};

renderGrid();

document.querySelector('.change-color').addEventListener('click', setColor);
document.querySelector('.rainbow').addEventListener('click', setRainbowColor);
document.querySelector('.refresh-grid').addEventListener('click', renderGrid);
document.querySelector('.toggle-border').addEventListener('click', toggleBorder);
