'use strict';

(() => {
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

  const getRandomIntInclusive = (min, max) => {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  };

  const game = () => {
    const result = {
      player: 0,
      computer: 0,
    };

    return function start() {
      const randomIndex = getRandomIntInclusive(0, FIGURES_RUS.length - 1);
      const randomWordComputer = FIGURES_RUS[randomIndex];
      let userWord = prompt('Камень, ножницы, бумага?');
      let whoWin;

      const gameExit = () => {
        const exit = confirm('Точно ли вы хотите выйти?');
        if (exit) {
          return alert(`Результат:\n Компьютер: ${result.computer}\n Игрок: ${result.player}\n`);
        } else {
          return start();
        }
      };

      const alertWindow = () =>
        alert(`Компьютер:${randomWordComputer}\nВы:${userWord}\n${whoWin}\n`);

      if (userWord !== null) {
        switch (userWord.toLowerCase()) {
          case 'к':
          case 'кам':
          case 'камень':
            userWord = 'камень';
            break;
          case 'н':
          case 'нож':
          case 'ножницы':
            userWord = 'ножницы';
            break;
          case 'б':
          case 'бум':
          case 'бумага':
            userWord = 'бумага';
            break;
          default:
            return start();
        }
      } else {
        return gameExit();
      }

      if (userWord === randomWordComputer) {
        whoWin = 'Ничья';
        alertWindow();
        return start();
      } else if (
        (userWord === 'камень' && randomWordComputer === 'ножницы') ||
        (userWord === 'ножницы' && randomWordComputer === 'бумага') ||
        (userWord === 'бумага' && randomWordComputer === 'камень')
      ) {
        whoWin = 'Вы выиграли';
        result.player++;
      } else {
        whoWin = 'Компьютер выиграл!';
        result.computer++;
      }

      alertWindow();

      const agreement = confirm('Ещё?');
      if (agreement) {
        return start();
      } else {
        return gameExit();
      }
    };
  };
  window.RPS = game;
})();
