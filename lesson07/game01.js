'use strict';

let rnd = Math.floor(Math.random() * 100) + 1;
console.log(rnd);

const game = () => {
  let guessTheNumber;

  while (true) {
    guessTheNumber = prompt('Загадай число от 1 до 100!');

    if (guessTheNumber === null) {
      console.log('Игра закончена');
      return;
    }

    if (isNaN(guessTheNumber) || guessTheNumber < 1 || guessTheNumber > 100) {
      console.log('Введите корректное число!');
    } else if (+guessTheNumber === rnd) {
      console.log('Правильно');
      return;
    } else {
      console.log(`${rnd > guessTheNumber ? 'Больше!' : 'Меньше!'}`);
    }
  }
};

game();
