const calculate = (total, quantity, promocode) => {
  const excessDiscount = total;
  let discount = 0;
  let difference = 0;

  if (total < 0) {
    return `Некорректный ввод`;
  }

  if (quantity > 10) {
    discount += total * 0.03;
  }

  if (total > 30000) {
    difference = excessDiscount - 30000;
    discount += difference * 0.15;
  }

  if (promocode === 'METHED') {
    discount += total * 0.1;
  }

  if (promocode === 'G3H2Z1' && total > 2000) {
    total += 500;
  }

  return total + discount;
};

console.log(calculate(5000, 11, 'G3H2Z1'));
