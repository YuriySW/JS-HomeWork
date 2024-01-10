'use strict';
{
  const arrRandom = (arr, n, m) => {
    let result = [];

    for (var i = 0; i <= arr; i++) {
      const rnd = Math.floor(Math.random() * (Math.max(n, m) - Math.min(n, m) + 1)) + Math.min(n, m);
      result.push(rnd);
    }

    return result;
  };

  console.log(arrRandom(99, -20, -10));
}
