'use strict';

const arr = [];

const recursiveFunc = (arr) => {
  const random = Math.floor(Math.random() * 10);
  arr.push(random);

  const sum = arr.reduce((acc, val) => acc + val, 0);

  if (sum < 50) {
    return recursiveFunc(arr);
  }

  if (sum >= 50) {
    return arr;
  }
};

console.log(recursiveFunc(arr));
