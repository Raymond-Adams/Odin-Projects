const screen = {
  currentEl: document.querySelector('.current'),
  lastEl: document.querySelector('.last'),
  get current() {
    return this.currentEl.textContent;
  },
  set current(val) {
    this.currentEl.textContent = val;
  },
  get last() {
    return this.lastEl.textContent;
  },
  set last(val) {
    this.lastEl.textContent = val;
  },
};

const addClickListeners = (...entries) => {
  entries.forEach(([query, listener]) => {
    document.querySelectorAll(query).forEach((el) => {
      el.addEventListener('click', listener);
    });
  });
};

const clearHandler = () => {
  screen.current = '';
  screen.last = '';
};
const deleteHandler = () => {
  screen.current = screen.current.slice(0, -1);
};
const numberHandler = (e) => {
  const key = e.target.textContent;
  if (screen.current.length < 15) screen.current += key;
};
const pointHandler = () => {
  const [a, b] = screen.current.split(/[+\-×÷]/).filter((i) => i);

  if (!a || (a.includes('.') && !b) || (b && b.includes('.'))) return;
  // if (!(/[0-9]/.test(screen.current.slice(-1)))) screen.current += '0';
  screen.current += '.';
};
const operationHandler = (e) => {
  const ops = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '×': (a, b) => a * b,
    '÷': (a, b) => a / b,
  };

  const key = e.target.textContent;
  const [a, op, b] = screen.current.split(/([+\-×÷])/);

  if (screen.current === '') return;
  if (/[+\-×÷]/.test(screen.current) && !(/[+\-×÷]/.test(screen.current.slice(-1)))) {
    screen.last = `${screen.current}=`;
    const result = ops[op](+a, +b);
    screen.current = result > 9e9 ? result.toExponential(5) : result;
  }
  if (key !== '=') screen.current += key;
};

addClickListeners(
  ['.clear', clearHandler],
  ['.delete', deleteHandler],
  ['.number', numberHandler],
  ['.point', pointHandler],
  ['.operation', operationHandler],
);
