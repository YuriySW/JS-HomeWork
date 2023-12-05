const calculate = (total, quantity, promocode) => {
  let discount = 0;

  if (quantity > 10) {
    discount += total * 0.03;
  }

  if (total > 30000) {
    discount += (total - 30000) * 0.15;
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
