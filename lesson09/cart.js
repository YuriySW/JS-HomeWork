'use strict';

const cart = {
  items: [],
  count: 0,

  get totalPrice() {
    return this.calculateItemPrice();
  },

  add(productName, productPrice, productCount = 1) {
    if (isNaN(productCount) || productCount <= 0) {
      productCount = 1;
    }

    this.items.push({
      productName,
      productPrice,
      productCount,
    });

    this.increaseCount(productCount);
  },

  increaseCount(num) {
    this.count += num;
  },

  calculateItemPrice() {
    return this.items.reduce(
        (acc, item) => acc + item.productPrice * item.productCount,
        0,
    );
  },

  clear() {
    this.items.length = this.count = 0;
  },

  print() {
    console.log(JSON.stringify(this.items));
    console.log(`Общая стоимость корзины: ${this.totalPrice}`);
  },
};

cart.add('Fanta', 100, 'w');
cart.add('Cola', 200, 1);
cart.add('Sprite', 300, 1);
cart.print();
