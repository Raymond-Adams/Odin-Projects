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
renderGrid(9);
