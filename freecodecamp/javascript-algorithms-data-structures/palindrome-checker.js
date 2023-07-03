const palindrome = (str) => {
  const strippedStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
  return strippedStr.split('').reverse().join('') === strippedStr;
};
