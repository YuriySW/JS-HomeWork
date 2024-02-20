'use strict';

(() => {
  const getRandomIntInclusive = (min, max) => {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  };

  const game = () => {
    const numbersOfBalls = {
      player: 5,
      computer: 5,
    };

    const randomNumBot = (userNum) => {
      const random = Math.floor(Math.random() * 2) + 1;
      if (random === 1 && userNum % 2 !== 0) {
        if (numbersOfBalls.player >= userNum) {
          // numbersOfBalls.computer = numbersOfBalls.computer + userNum;
          // numbersOfBalls.player = numbersOfBalls.player - userNum;
          numbersOfBalls.computer += userNum;
          numbersOfBalls.player -= userNum;
        } else {
          alert(`У вас ${numbersOfBalls.player} шариков`);
        }
      } else {
        if (numbersOfBalls.computer >= userNum) {
          numbersOfBalls.player = numbersOfBalls.player + userNum;
          numbersOfBalls.computer = numbersOfBalls.computer - userNum;
        } else {
          alert(`У вас ${numbersOfBalls.computer} шариков`);
        }
      }
    };
    const alertWindow = () =>
      alert(`Количество шариков\n Игрок:${numbersOfBalls.player}\n Бот:${numbersOfBalls.computer}`);

    return function start() {
      let userNum = +prompt(`Загадайте число от 1 до ${numbersOfBalls.player}`);

      randomNumBot(userNum);

      if (numbersOfBalls.computer === 0) {
        alert('Выйграл игрок');
        alertWindow();
        return;
      }

      if (numbersOfBalls.player === 0) {
        alert('Выйграл компьютер');
        alertWindow();
        return;
      }
      alertWindow();

      return start();
    };
  };
  window.RPS = game;
})();
