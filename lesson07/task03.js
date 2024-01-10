'use strict';

const arrRandom = (arr, n, m, evenOdd) => {
  const even = (num) => num % 2 === 0;
  const odd = (num) => num % 2 !== 0;
  let result = [];
  let rndNum;

  for (var i = 0; i < arr; i++) {
    rndNum = Math.floor(Math.random() * (Math.max(n, m) - Math.min(n, m) + 1)) + Math.min(n, m);

    if (evenOdd === 'even' && !even(rndNum)) {
      i--;
      continue;
    } else if (evenOdd === 'odd' && !odd(rndNum)) {
      i--;
      continue;
    }

    result.push(rndNum);
  }

  return result;
};

console.log(arrRandom(140, -10, 20, 'even'));
