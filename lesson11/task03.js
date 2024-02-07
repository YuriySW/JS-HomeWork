'use strict';

const rectangle = {
  _width: 5,
  _height: 5,

  set width(num) {
    this._width = num;
  },

  set height(num) {
    this._height = num;
  },
  get perimetr() {
    return `${2 * (this._width + this._height)}см`;
  },
  get square() {
    return `${this._width * this._height}см`;
  },
};

console.log(rectangle.perimetr);
console.log(rectangle.square);
