'use strict';
{
  const arrRandom = (arr) => {
    let result = [];

    for (var i = 0; i < arr; i++) {
      result.push(Math.floor(Math.random() * 100));
    }

    return result;
  };

  console.log(arrRandom(7));
}
