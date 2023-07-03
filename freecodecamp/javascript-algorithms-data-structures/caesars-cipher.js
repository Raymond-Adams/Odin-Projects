const rot13 = (str) => {
  const charArr = [...str];
  return charArr
    .map((char) => {
      // All input strings are already capitalized
      if (/[^A-Z]/.test(char)) return char;
      const code = char.charCodeAt() - 65;
      const shiftedCode = (code + 13) % 26;
      return String.fromCharCode(shiftedCode + 65);
    })
    .join('');
};
