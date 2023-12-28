'use strict';

{
  const arrRandom = (arr, n, m, evenOdd) => {
    let result = [];

    while (result.length < arr) {
      let rndNum = Math.floor(Math.random() * (n - m) + m);
      if (evenOdd === 'even' && rndNum % 2 === 0) {
        result.push(rndNum);
      }

      if (evenOdd === 'odd' && rndNum % 2 === 1) {
        result.push(rndNum);
      }
    }

    return result;
  };

  console.log(arrRandom(7, -10, 10, 'even'));
}
