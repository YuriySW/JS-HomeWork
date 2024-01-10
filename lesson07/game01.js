'use strict';

const game = () => {
  let guessTheNumber;
  const min = 1;
  const max = 100;
  let rnd = Math.floor(Math.random() * 100) + 1;
  console.log(rnd);

  while (true) {
    guessTheNumber = prompt(`Загадай число от ${min} до ${max}!`);

    if (guessTheNumber === null) {
      alert('Игра закончена');
      break;
    }

    switch (true) {
      case isNaN(+guessTheNumber):
      case +guessTheNumber < min:
      case +guessTheNumber > max:
        alert(`Введите корректное число от ${min} до ${max}!`);
        break;
      case rnd > +guessTheNumber:
        alert('Больше!');
        break;
      case rnd < +guessTheNumber:
        alert('Меньше!');
        break;
      default:
        alert('Правильно');
    }

    if (+guessTheNumber === rnd) {
      break;
    }
  }
};

game();
