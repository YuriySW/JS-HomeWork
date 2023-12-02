const convertToRub = (euro) => {
  if (Number.isNaN(parseFloat(euro)) || euro < 0) {
    return console.log(`Некорректный ввод`);
  }
  const toEuro = euro;
  const toDollar = toEuro * 1.2;
  const toRub = toDollar * 73;

  return toRub;
};

console.log(convertToRub(50));
console.log(convertToRub(200));
console.log(convertToRub(-100));
console.log(convertToRub('кэ'));
