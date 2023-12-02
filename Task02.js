const modificationString = (words) => {
  const toWords = words.split(' ');
  const modWord = toWords[0][0].toUpperCase() + toWords[0].substring(1);
  const modWords = modWord.concat(' ', toWords[1].toLowerCase());
  return modWords;
};

console.log(modificationString('привет Мир'));
