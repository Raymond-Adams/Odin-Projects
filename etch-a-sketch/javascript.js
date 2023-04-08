const renderGrid = (cols) => {
  const grid = document.querySelector('.grid');

  grid.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${cols}, 1fr)`;

  const cells = [];
  for (let i = 0; i < cols ** 2; i += 1) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cells.push(cell);
  }
  grid.replaceChildren(...cells);
};

let isMouseDown = false;

const draw = (e) => {
  if (!isMouseDown) return;
  const cell = e.target;
  cell.style.backgroundColor = 'red';
  e.stopPropagation();
  e.preventDefault();
};

renderGrid(16);
document.querySelector('.grid').addEventListener('mousedown', () => {
  isMouseDown = true;
});
document.querySelector('.grid').addEventListener('mouseup', () => {
  isMouseDown = false;
});
[...document.querySelectorAll('.cell')].forEach((cell) => {
  cell.addEventListener('mouseover', draw);
});
