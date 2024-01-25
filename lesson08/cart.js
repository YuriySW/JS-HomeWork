'use strict';

const cart = {
  items: [],
  totalPrice: 0,
  count: 0,

  getTotalPrice() {
    return console.log(this.totalPrice);
  },

  add(productName, productPrice, productCount) {
    this.calculateItemPrice();
    this.increaseCount(productCount);

    return this.items.push({
      productName,
      productPrice,
      productCount: productCount ?? 1,
    });
  },

  increaseCount(number) {
    this.count += number;
  },

  calculateItemPrice() {
    this.totalPrice = this.items.reduce((acc, item) => {
      return acc + item.productPrice * item.productCount;
    }, 0);
    return this.totalPrice;
  },

  clear() {
    for (let key of Object.keys(this)) {
      if (this.items.length > 1) {
        this[key] = [];
      } else {
        this[key] = 0;
      }
    }
  },

  print() {
    this.calculateItemPrice();
    console.log(JSON.stringify(this.items));
    return console.log(`Общая стоимость корзины: ${this.totalPrice}`);
  },
};

cart.add('Fanta', 102, 4);
cart.add('Cola', 115, 3);
cart.add('Sprite', 120, 2);
cart.print();
