const convertToRub = (euro) => {
  if (Number.isNaN(parseFloat(euro)) || euro < 0) {
    return `Некорректный ввод`;
  }
  const toEuro = euro;
  const toDollar = toEuro * 1.2;
  const toRub = toDollar * 73;

  return Math.round(toRub);
};

console.log(convertToRub(50));
console.log(convertToRub(50.5));
console.log(convertToRub(200));
console.log(convertToRub(-100));
