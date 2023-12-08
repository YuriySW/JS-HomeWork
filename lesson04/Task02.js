const modificationString = (str) => {
  const clearStr = str.trim().toLowerCase();

  return clearStr[0].toUpperCase() + clearStr.substring(1);
};

console.log(modificationString('   ПривеТ Мир'));
