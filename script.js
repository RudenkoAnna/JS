const listElement = document.getElementById("mathItems");
function Calculations() {
  this.digits = [];
}

let numberOne;
let numberTwo;

numberOne = prompt("Enter first number");
numberTwo = prompt("Ënter your second number");
alert("Multiplication " + "" + Number(numberOne) * Number(numberTwo));
alert("Sum " + "" + (Number(numberOne) + Number(numberTwo)));
alert("Division " + "" + Number(numberOne) / Number(numberTwo));
alert("Substraction " + "" + (Number(numberOne) - Number(numberTwo)));

//mathematic operations  and checking whether arguments are numbers
let items = myFunction(2, 4);
function myFunction(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    sum = a + b;
    substraction = a - b;
    division = a / b;
    multiplication = a * b;

    return (
      `Sum of a and b:` +
      sum +
      ` ` +
      `Substraction of a and b:` +
      substraction +
      ` ` +
      `Division of a and b:` +
      division +
      ` ` +
      `Multiplication of a and b:` +
      multiplication
    );
    const li = document.createElement("li");
    li.setAttribute("id", `mathItems-${i}`);
    li.textContent = this.digits;
    listElement.appendChild(li);
  } else {
    return `One of the entered arguments (or both arguments) are not a number(s)`;
  }
}
let result = myFunction(4, 4);
console.log(result);

//Searching of min and max values or an array
//function for finding max number

function getMaxClosure() {
  let max = -Infinity;

  return function (items) {
    if (items > max) {
      max = items;
    }

    return max;
  };
}

function findMaxNumber(items) {
  const getMax = getMaxClosure();

  for (let i = 1; i < items.length; i++) {
    getMax(items[i]);
  }

  return getMax(-Infinity);
}

///  function for finding min number
function getMinClosure() {
  let min = Infinity;

  return function (items) {
    if (items < min) {
      min = items;
    }

    return min;
  };
}

function findMinNumber(items) {
  const getMin = getMinClosure();

  for (let i = 1; i < items.length; i++) {
    getMin(items[i]);
  }

  return getMin(Infinity);
}
///

const array = [70, 40, 23, 18, 89, 100, 21, 71, 88, 90];

const maxNumber = findMaxNumber(array);
const minNumber = findMinNumber(array);

console.log(maxNumber);
console.log(minNumber);
