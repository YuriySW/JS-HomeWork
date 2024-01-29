'use strict';

const cart = {
  items: [],
  totalPrice: 0,
  count: 0,

  getTotalPrice() {
    return this.totalPrice;
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
    this.calculateItemPrice();
  },

  increaseCount(num) {
    this.count += num;
  },

  calculateItemPrice() {
    this.totalPrice = this.items.reduce((acc, item) => {
      return acc + item.productPrice * item.productCount;
    }, 0);
  },

  clear() {
    this.items.length = this.totalPrice = this.count = 0;
  },

  print() {
    console.log(JSON.stringify(this.items));
    console.log(`Общая стоимость корзины: ${this.totalPrice}`);
  },
};

cart.add('Fanta', 102, 's');
cart.add('Cola', 115, 3);
cart.add('Sprite', 120, 3);
cart.print();
