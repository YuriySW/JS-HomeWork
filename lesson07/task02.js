'use strict';

{
  const arrRandom = (arr, n, m) => {
    let result = [];

    for (var i = 0; i < arr; i++) {
      result.push(Math.floor(Math.random() * (n - m) + m));
    }

    return result;
  };

  console.log(arrRandom(7, 30, 50));
}
