const btn = document.querySelector(".js-button");

function onClick(e) {
  console.log("click", e.target);
}

btn.addEventListener("click", onClick);
///functions from lesson 23
const arr = [20, 30, 40, 90, 120, true, false, 11, 189, 1, 18, 31, "word"];
const numbers = [];
console.log(arr);

//Displaying of sum (taking into account numbers only)
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "number") {
    sum = sum + arr[i];
  }
}
console.log(sum);

//Displaying of max values (taking into account numbers only)
let max = arr[0];
for (let i = 1; i < 10; ++i) {
  if (typeof arr[i] === "number") {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
}
console.log(max);

//Displaying of min values (taking into account numbers only)
let min = arr[0];
for (let i = 1; i < 10; ++i) {
  if (typeof arr[i] === "number") {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
}
console.log(min);

//Displaying of semi tree
let depth = 5;
let char = "#";
let output = "";
for (let i = 1; i <= depth; i++) {
  output += char.repeat(i);
  output += "\n";
}
console.log(output);
/// functions from lesson 26
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
44;

//functions from lesson 28
document.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === "f") {
    e.preventDefault();
    scrollToElement("f");
  } else if (e.key.toLowerCase() === "a") {
    e.preventDefault();
    scrollToElement("a");
  } else if (e.key.toLowerCase() === "b") {
    e.preventDefault();
    scrollToElement("b");
  } else if (e.key.toLowerCase() === "c") {
    e.preventDefault();
    scrollToElement("c");
  } else if (e.key.toLowerCase() === "d") {
    e.preventDefault();
    scrollToElement("d");
  } else if (e.key.toLowerCase() === "e") {
    e.preventDefault();
    scrollToElement("e");
  }
});

function scrollToElement(elementId) {
  const element = document.getElementById(elementId);
  element.scrollIntoView({ behavior: "smooth" });
}
