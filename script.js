//function to check whether object is empty
function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}
const emptyObj = {};
const nonEmptyObj = { name: "Anna", age: 30 };

console.log(isEmpty(emptyObj));
console.log(isEmpty(nonEmptyObj));

// creating user object  +  and sayHello reply
function createUser(name, age) {
  return {
    name: name,
    age: age,
    getNameAndAge() {
      return `Привіт, я ${this.name}, мені ${this.age} років`;
    },
  };
}

const showMessage = function (user) {
  if (!user) {
    return;
  }

  const userInfo = user.getNameAndAge();
  console.log(`${userInfo}`);
};

const Anna = createUser("Anna", 30);
const Brian = createUser("Brian", 29);

showMessage(Anna);
showMessage(Brian);

/// calculator with sum and multiplication of 2 numbers
const calculator = {
  firstNumber: 0,
  secondNumber: 0,

  ask: function () {
    this.firstNumber = Number(prompt("Введіть перше число:"));
    this.secondNumber = Number(prompt("Введіть друге число:"));
  },

  sum: function () {
    return this.firstNumber + this.secondNumber;
  },

  mul: function () {
    return this.firstNumber * this.secondNumber;
  },
};
calculator.ask();
console.log(calculator.sum());
console.log(calculator.mul());
