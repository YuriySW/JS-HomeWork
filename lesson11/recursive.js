'use strict';

// Задача #1

const random = Math.floor(Math.random() * 100) + 1;

const game = (min, max) => {
  (min = 1), (max = 100);

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
const arr2 = [7, 9, 4, 4, 4, 2, 4, 4, 8, 2, 4];

const recursiveFunc = (arr) =>
  arr.reduce((acc, val) => acc + val, 0) > 50
    ? [...arr]
    : recursiveFunc([...arr, Math.floor(Math.random() * 10)]);

console.log(recursiveFunc(arr));
console.log(recursiveFunc(arr2));
console.log(arr);
console.log(arr2);
