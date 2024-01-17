'use strict';

const getArrRandom = (length, n, m, rules) => {
  const result = [];
  const min = Math.min(n, m);
  const max = Math.max(n, m);
  const mode = ['even', 'odd'].indexOf(rules);

  while (result.length < length) {
    const random = Math.floor(Math.random() * (max - min + 1)) + min;

    if (mode === -1 || Math.abs(num % 2) === mode) {
      result.push(rndNum);
    }
  }

  return result;
};

console.log(getArrRandom(140, -10, 20, 'even'));
