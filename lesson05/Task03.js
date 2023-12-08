const revers = (str) => {
  let reversStr = '';

  for (let i = str.length - 1; i >= 0; i--) {
    reversStr += str[i];
  }

  return reversStr;
};

console.log(revers('Привет мир'));
