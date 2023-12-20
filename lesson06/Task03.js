'use strict';

const names = ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

const addPrefix = (arr, pre) => arr.map((item) => `${pre}  ${item}`);

console.log(addPrefix(names, 'Mr'));
