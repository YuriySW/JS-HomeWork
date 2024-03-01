'use strict';

(() => {
  const rsp = ['камень', 'ножницы', 'бумага'];
  let exitCount = 0;
  let playStart = false;

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
    const newGame = () => {
      exitCount = 0;
      numbersOfBalls.player = 5;
      numbersOfBalls.computer = 5;
    };

    const gameExit = (func) => {
      confirm('Точно ли вы хотите выйти?')
        ? alert(
            `Количество шариков:\n Компьютер: ${numbersOfBalls.computer}\n Игрок: ${numbersOfBalls.player}\n`
          )
        : func();
    };

    const processTurn = (userOdd, userNum) => {
      const random = Math.floor(Math.random() * 2) + 1;
      const isOdd = userNum % 2 !== 0;
      const canGuessEven =
        (numbersOfBalls.computer === 1 || numbersOfBalls.player === 1) && userNum === 2;

      random === 1 && (isOdd || canGuessEven)
        ? ((userNum = Math.min(numbersOfBalls.computer, numbersOfBalls.player, userNum)),
          (numbersOfBalls.computer += userNum || userOdd),
          (numbersOfBalls.player -= userNum || userOdd))
        : ((userNum = Math.min(numbersOfBalls.computer, numbersOfBalls.player, userNum)),
          (numbersOfBalls.player += userNum || userOdd),
          (numbersOfBalls.computer -= userNum || userOdd));
    };

    const alertWindow = () =>
      alert(`Количество шариков\n Игрок:${numbersOfBalls.player}\n Бот:${numbersOfBalls.computer}`);

    const whoWin = () => {
      if (numbersOfBalls.computer <= 0) {
        alert('Выиграл игрок');
        alertWindow();
        return false;
      }

      if (numbersOfBalls.player <= 0) {
        alert('Выиграл бот');
        alertWindow();
        return false;
      }
      return true;
    };

    const gameNumbers = () => {
      alertWindow();
      let userNum = prompt(`Загадайте число от 1 до ${numbersOfBalls.player}`);

      if (userNum === null) {
        gameExit(gameNumbers);
        exitCount++;
        return;
      }

      userNum = +userNum;
      if (isNaN(userNum) || userNum < 1 || userNum > numbersOfBalls.player) {
        alert('Некорректное число');
        gameNumbers();
        return;
      }

      processTurn(userNum, userNum);

      if (!whoWin()) {
        return;
      }

      gameOddEven();
    };

    const gameOddEven = () => {
      alertWindow();
      const randomComputer = getRandomIntInclusive(1, numbersOfBalls.computer);
      const userOdd = confirm('Нажмите "ОК", если число четное, "Отмена" если нечетное');

      processTurn(randomComputer, userOdd ? 2 : 1);

      if (!whoWin()) {
        return;
      }

      gameNumbers();
    };

    const rspGame = () => {
      let userRSP = prompt(`${rsp}?`);

      if (userRSP === null) {
        gameExit(rspGame);
        return;
      }

      if (userRSP.trim() === '') {
        rspGame();
        return;
      }

      const userIndex = rsp.indexOf(userRSP.toLowerCase());
      if (userIndex === -1) {
        rspGame();
        return;
      }

      const randomRSP = getRandomIntInclusive(0, 2);

      if (randomRSP === userIndex) {
        alert('Ничья');
        rspGame();
      }

      if ((userIndex + 1) % 3 === randomRSP) {
        alert('Вы выиграли');
        gameNumbers();
      }

      if (randomRSP !== userIndex && (userIndex + 1) % 3 !== randomRSP) {
        alert('Компьютер выиграл!');
        gameOddEven();
      }

      if (exitCount < 1) {
        const playAgain = confirm('Хотите сыграть еще?');
        if (playAgain) {
          playStart = true;
          return newGame();
        } else {
          alert('Конец!');
        }
        exitCount++;
      }
    };

    return function start() {
      rspGame();

      if (playStart) {
        playStart = false;
        start();
      }
    };
  };

  window.MARBLES = game;
})();
