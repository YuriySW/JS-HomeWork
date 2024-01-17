'use strict';

{
  const getArrRandom = (length, n, m) => {
    let result = [];
    const min = Math.min(n, m);
    const max = Math.max(n, m);

    for (let i = 0; i <= length; i++) {
      const random = Math.floor(Math.random() * (max - min + 1)) + min;
      result.push(random);
    }

    return result;
  };

  console.log(getArrRandom(99, -20, -10));
}
