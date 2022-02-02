module.exports = function check(str, bracketsConfig) {
  // your solution
  let stack = [];
  let duplicate = [];
  let differentBrackets = [];
  bracketsConfig.map((arr) => {
    if (arr[0] === arr[1]) {
      duplicate.push(arr[0]);
    } else {
      differentBrackets.push(arr);
    }
  });

  let openBrackets = differentBrackets.map((arr) => arr[0]);
  let brackets = differentBrackets.map(([openBracket, closeBracket]) => ({
    [openBracket]: closeBracket,
  }));

  for (let i = 0; i < str.length; i++) {
    let topElement = stack[stack.length - 1];
    let currentSym = str[i];

    if (duplicate.includes(currentSym)) {
      if (topElement !== currentSym || stack.length === 0) {
        stack.push(currentSym);
        continue;
      } else if (topElement === currentSym) {
        stack.pop();
      }
    } else if (openBrackets.includes(currentSym)) {
      stack.push(currentSym);
    } else if (stack.length === 0) {
      return false;
    }

    brackets.map((obj) => {
      if (obj[topElement] === currentSym) {
        stack.pop();
      } else {
        return false;
      }
    });
  }

  return stack.length === 0;
};
