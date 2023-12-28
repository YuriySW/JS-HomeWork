'use strict';

const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

const getAverageValue = (checks) => {
  let result = 0;

  for (var i = 0; i < checks.length; i++) {
    result += checks[i];
  }
  return Math.floor(result / checks.length);
};

console.log(getAverageValue(allCashbox));

{
  const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

  const getAverageValue = (checks) => Math.floor(checks.reduce((sum, current) => sum + current / checks.length, 0));

  console.log(getAverageValue(allCashbox));
}
