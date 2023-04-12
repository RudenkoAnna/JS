// 3
const c = calculator();
console.log(c()); // має вивести 1
console.log(c()); // має вивести 2

const calculator = function (init = 0) {
  return function () {
    return init++;
  };
};
