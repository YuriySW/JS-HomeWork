'use strict';

(() => {
  const rsp = ['камень', 'ножницы', 'бумага'];

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
    let endGame = true;

    const processTurn = (userOdd, userNum) => {
      const random = Math.floor(Math.random() * 2) + 1;
      const isOdd = userNum % 2 !== 0;

      if (random === 1 && isOdd) {
        numbersOfBalls.computer += userNum || userOdd;
        numbersOfBalls.player -= userNum || userOdd;
      } else {
        numbersOfBalls.player += userNum || userOdd;
        numbersOfBalls.computer -= userNum || userOdd;
      }
    };

    const alertWindow = () =>
      alert(`Количество шариков\n Игрок:${numbersOfBalls.player}\n Бот:${numbersOfBalls.computer}`);

    const whoWin = () => {
      if (numbersOfBalls.computer <= 0) {
        alert('Выйграл игрок');
        return (endGame = false);
      }

      if (numbersOfBalls.player <= 0) {
        alert('Выйграл бот');
        return (endGame = false);
      }
    };

    const gameNumbers = () => {
      alertWindow();
      let userNum = prompt(`Загадайте число от 1 до ${numbersOfBalls.player}`);
      if (userNum === null) {
        return (endGame = false);
      } else {
        userNum = +userNum;
        if (!isNaN(userNum)) {
          processTurn(userNum, userNum);
        } else {
          gameNumbers();
        }
      }

      if (numbersOfBalls.computer <= 0 || numbersOfBalls.player <= 0) {
        whoWin();
      } else {
        gameOddEven();
      }
    };

    const gameOddEven = () => {
      alertWindow();
      const randomComputer = getRandomIntInclusive(1, numbersOfBalls.computer);
      let userOdd = prompt(`Введите четное или нечетное!`);

      if (userOdd === null) {
        return (endGame = false);
      } else {
        userOdd = userOdd.toLowerCase() === 'нечетное' ? 1 : 2;
        if (endGame) {
          const oddEvenUser = !isNaN(userOdd) ? userOdd : gameOddEven();
          processTurn(randomComputer, oddEvenUser);
        }
      }

      if (numbersOfBalls.computer <= 0 || numbersOfBalls.player <= 0) {
        whoWin();
      } else {
        gameNumbers();
      }
    };

    return function start() {
      const randomRSP = getRandomIntInclusive(0, 2);
      const newGame = () => {
        numbersOfBalls.player = 5;
        numbersOfBalls.computer = 5;
        start();
      };

      let userRSP = prompt(`${rsp}?`);

      if (userRSP === null) {
        endGame = false;
      } else {
        const userIndex = rsp.indexOf(userRSP.toLowerCase());
        if (userIndex !== -1) {
          userRSP = userIndex;
        } else {
          return start();
        }
      }

      if (randomRSP === userRSP) {
        alert('Ничья');
        start();
      }

      if (userRSP !== null && (userRSP + 1) % 3 === randomRSP) {
        alert('Вы выиграли');
        gameNumbers();
      }

      if ((randomRSP + 1) % 3 === userRSP) {
        alert('Компьютер выиграл!');
        gameOddEven();
      }

      confirm('Хотите сыграть еще?') ? newGame() : alert(`Конец!`);
    };
  };
  window.RPS = game;
})();
