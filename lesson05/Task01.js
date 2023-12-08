for (let i = 1; i < 11; i++) {
  let content = '';

  for (let y = 1; y < 11; y++) {
    content += i ** y + '|';
    // console.log(Math.pow(y, i));
  }

  console.log(`${content}`);
}
