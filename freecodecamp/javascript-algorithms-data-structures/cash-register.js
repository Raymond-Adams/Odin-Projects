const checkCashRegister = (price, cash, cid) => {
  const table = [
    ['PENNY', 0.01],
    ['NICKEL', 0.05],
    ['DIME', 0.1],
    ['QUARTER', 0.25],
    ['ONE', 1],
    ['FIVE', 5],
    ['TEN', 10],
    ['TWENTY', 20],
    ['ONE HUNDRED', 100],
  ].reverse();

  const totalCid = cid.reduce((sum, [_, amount]) => sum + amount);
  let changeDue = cash - price;
  const change = cid.reverse().reduce((changeArr, [unit, amount], index) => {
    const unitValue = table[index][1];
    const availableChange =
      changeDue < amount
        ? Math.floor(changeDue / unitValue) * unitValue
        : amount;

    if (availableChange > 0) {
      changeDue = Math.round((changeDue - availableChange) * 100) / 100;
      return changeArr.concat([[unit, availableChange]]);
    }
    return changeArr;
  }, []);

  if (changeDue > 0) {
    return { status: 'INSUFFICIENT_FUNDS', change: [] };
  }

  const isClosed = change.every(([unit, amount]) => {
    const findInCid = cid.find((el) => el[0] === unit);
    return findInCid[1] === amount;
  });

  if (isClosed) {
    return { status: 'CLOSED', change: cid.reverse() };
  }
  return { status: 'OPEN', change };
};
