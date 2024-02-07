'use strict';

const cart = {
  items: [],
  count: 0,
  _discount: 0,

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

  set discount(promocode) {
    if (promocode === 'METHED') {
      this._discount = 15;
    }

    if (promocode === 'NEWYEAR') {
      this._discount = 21;
    }
  },

  increaseCount(num) {
    this.count += num;
  },

  calculateItemPrice() {
    const total = this.items.reduce((acc, item) => {
      return acc + item.productPrice * item.productCount;
    }, 0);
    const discountedPrice = total - (this._discount * total) / 100;
    return discountedPrice;
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
cart.discount = 'NEWYEAR';
cart.print();
