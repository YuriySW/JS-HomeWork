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
    const lang = language === 'EN' || language === 'ENG' ? FIGURES_ENG : FIGURES_RUS;
    const result = {
      player: 0,
      computer: 0,
    };

    return function start() {
      const randomComputer = getRandomIntInclusive(0, 2);
      let userWord;
      let whoWin;
      userWord = prompt(`${lang}?`);

      const gameExit = () => {
        confirm('Точно ли вы хотите выйти?')
          ? alert(`Результат:\n Компьютер: ${result.computer}\n Игрок: ${result.player}\n`)
          : start();
      };

      const alertWindow = () =>
        alert(`Компьютер:${lang[randomComputer]}\nВы:${lang[userWord]}\n${whoWin}\n`);

      if (userWord !== null) {
        const userIndex = lang.indexOf(userWord.toLowerCase());
        if (userIndex !== -1) {
          userWord = userIndex;
        } else {
          return start();
        }
      } else {
        return gameExit();
      }

      if (userWord === randomComputer) {
        whoWin = 'Ничья';
        alertWindow();
        return start();
      }

      if (
        (userWord === 0 && randomComputer === 1) ||
        (userWord === 1 && randomComputer === 2) ||
        (userWord === 2 && randomComputer === 0)
      ) {
        whoWin = 'Вы выиграли';
        result.player++;
      } else {
        whoWin = 'Компьютер выиграл!';
        result.computer++;
      }

      alertWindow();
      confirm('Ещё?') ? start() : gameExit();
    };
  };
  window.RPS = game;
})();
