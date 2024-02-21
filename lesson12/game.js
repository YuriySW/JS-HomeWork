'use strict';

(() => {
  const FIGURES_ENG = ['rock', 'scissors', 'paper'];
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

  const getRandomIntInclusive = (min, max) => {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  };

  const game = (language) => {
    const result = {
      player: 0,
      computer: 0,
    };

    const lang = language === 'EN' || language === 'ENG' ? FIGURES_ENG : FIGURES_RUS;

    return function start() {
      const randomWordComputer = getRandomIntInclusive(0, 2);
      let userWord;

      if (lang === FIGURES_ENG) {
        userWord = prompt('rock, scissors, paper?');
      } else {
        userWord = prompt('Камень, ножницы, бумага?');
      }

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
        lang === FIGURES_ENG
          ? alert(`Компьютер:${FIGURES_ENG[randomWordComputer]}\nВы:${userWord}\n${whoWin}\n`)
          : alert(`Компьютер:${FIGURES_RUS[randomWordComputer]}\nВы:${userWord}\n${whoWin}\n`);

      if (userWord !== null) {
        if (lang === FIGURES_ENG) {
          switch (userWord.toLowerCase()) {
            case 'rock':
              userWord = 'rock';
              break;
            case 'scissors':
              userWord = 'scissors';
              break;
            case 'paper':
              userWord = 'paper';
              break;
            default:
              return start();
          }
        } else {
          switch (userWord.toLowerCase()) {
            case 'камень':
              userWord = 'камень';
              break;
            case 'ножницы':
              userWord = 'ножницы';
              break;
            case 'бумага':
              userWord = 'бумага';
              break;
            default:
              return start();
          }
        }
      } else {
        return gameExit();
      }

      if (
        userWord === FIGURES_RUS[randomWordComputer] ||
        userWord === FIGURES_ENG[randomWordComputer]
      ) {
        whoWin = 'Ничья';
        alertWindow();
        return start();
      } else if (
        (userWord === FIGURES_RUS[0] && FIGURES_RUS[randomWordComputer] === FIGURES_RUS[1]) ||
        (userWord === FIGURES_RUS[1] && FIGURES_RUS[randomWordComputer] === FIGURES_RUS[2]) ||
        (userWord === FIGURES_RUS[2] && FIGURES_RUS[randomWordComputer] === FIGURES_RUS[0]) ||
        (userWord === FIGURES_ENG[0] && FIGURES_ENG[randomWordComputer] === FIGURES_ENG[1]) ||
        (userWord === FIGURES_ENG[1] && FIGURES_ENG[randomWordComputer] === FIGURES_ENG[2]) ||
        (userWord === FIGURES_ENG[2] && FIGURES_ENG[randomWordComputer] === FIGURES_ENG[0])
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
