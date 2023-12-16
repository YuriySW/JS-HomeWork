'use strict';

const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

const filter = (all, failed) => {
  let passed = [];

  for (var i = 0; i < all.length; i++) {
    if (!failed.includes(all[i])) {
      passed.push(all[i]);
    }
  }

  return passed;
};

console.log(filter(allStudents, failedStudents));
