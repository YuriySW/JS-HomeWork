'use strict';

// Задача #1

const min = 1;
const max = 100;
const random = Math.floor(Math.random() * 100) + 1;

const game = () => {
  const userNumber = prompt(`Загадай число от ${min} до ${max}!`);

  switch (true) {
    case userNumber === null:
      alert('Игра закончена');
      return;

    case isNaN(userNumber):
    case +userNumber < min:
    case +userNumber > max:
      alert(`Введите корректное число от ${min} до ${max}!`);
      break;
    case random > +userNumber:
      alert('Больше!');
      break;
    case random < +userNumber:
      alert('Меньше!');
      break;

    default:
      alert('Правильно');
      return;
  }
  game();
};

game();

// Задача #2

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
