'use strict';
{
  const getArrRandom = (length) => {
    const result = [];

    for (let i = 0; i < length; i++) {
      result.push(Math.floor(Math.random() * 100));
    }

    return result;
  };

  console.log(getArrRandom(7));
}
