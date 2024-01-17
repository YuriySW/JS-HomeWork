'use strict';

const min = 1;
const max = 100;
const random = Math.floor(Math.random() * 100) + 1;
let state = true;
console.log(random);

while (state) {
  const userData = prompt(`Загадай число от ${min} до ${max}!`);
  const changeNumber = +userData;

  switch (true) {
    case userData === null:
      alert('Игра закончена');
      state = false;
      break;
    case isNaN(changeNumber):
    case changeNumber < min:
    case changeNumber > max:
      alert(`Введите корректное число от ${min} до ${max}!`);
      break;
    case random > changeNumber:
      alert('Больше!');
      break;
    case random < changeNumber:
      alert('Меньше!');
      break;

    default:
      alert('Правильно');
      state = false;
  }
}
