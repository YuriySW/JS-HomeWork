'use strict';

const names = ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

const addPrefix = (arr, pre) => {
  let result = [];

  for (var i = 0; i < arr.length; i++) {
    result.push(pre + ' ' + arr[i]);
  }

  return result;
};

console.log(addPrefix(names, 'Mr'));
