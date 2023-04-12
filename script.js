// 2
function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.sayHello = function () {
  return `Hi. My name is {name} and I'm {this.age} years old`;
};

const user = new User("Sherlock", 27);
console.log(user.sayHello); // має вивести "Hi. My name is Sherlock and I'm 27 years old"

// 3
const c = calculator();
console.log(c()); // має вивести 1
console.log(c()); // має вивести 2

const calculator = function (init = 0) {
  return function () {
    return init++;
  };
};
