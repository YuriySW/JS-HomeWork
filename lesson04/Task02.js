const modificationString = (str) => {
  const clearStr = str.trim();

  return clearStr[0].toUpperCase() + clearStr.substring(1).toLowerCase();
};

console.log(modificationString('   ПривеТ Мир'));
