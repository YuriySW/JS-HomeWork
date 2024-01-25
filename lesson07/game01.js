'use strict';

const min = 1;
const max = 100;
const random = Math.floor(Math.random() * 100) + 1;
let state = true;
console.log(random);

while (state) {
  const userNumber = prompt(`Загадай число от ${min} до ${max}!`);

  switch (true) {
    case userNumber === null:
      alert('Игра закончена');
      state = false;
      break;
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
      state = false;
  }
}
