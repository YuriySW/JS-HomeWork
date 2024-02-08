'use strict';

const rectangle = {
  _width: 5,
  _height: 5,

  set width(num) {
    if (typeof num === 'number' && num > 0) {
      this._width = num;
    } else {
      console.log('Width должен быть числом и больше нуля!');
    }
  },

  set height(num) {
    if (typeof num === 'number' && num > 0) {
      this._height = num;
    } else {
      console.log('Height должен быть числом и больше нуля!');
    }
  },
  get perimetr() {
    return `${2 * (this._width + this._height)}см`;
  },
  get square() {
    return `${this._width * this._height}см`;
  },
};

rectangle.width = 10;
rectangle.height = 10;
console.log(rectangle.perimetr);
console.log(rectangle.square);
