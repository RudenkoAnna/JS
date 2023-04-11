let numberOne = prompt("Enter first number");
let numberTwo = prompt("Enter your second number");

// Perform calculations
let sum = Number(numberOne) + Number(numberTwo);
let division = Number(numberOne) / Number(numberTwo);
let subtraction = Number(numberOne) - Number(numberTwo);
let multiplication = Number(numberOne) * Number(numberTwo);

// container with results
const container = document.getElementById("resultContainer");

// HTML elements with results
const p1 = document.createElement("p");
p1.textContent = `You have entered Number One: ${numberOne}`;

const p2 = document.createElement("p");
p2.textContent = `You have entered  Number Two: ${numberTwo}`;

const p3 = document.createElement("p");
p3.textContent = `The Sum of your numbers will be : ${sum}`;
if (sum < 0) {
  p3.style.color = "red";
} else {
  p3.style.color = "green";
}

const p4 = document.createElement("p");
p4.textContent = `The Division of your numbers will be: ${division}`;
if (division < 0) {
  p4.style.color = "red";
} else {
  p4.style.color = "green";
}

const p5 = document.createElement("p");
p5.textContent = `The Subtraction of your numbers will be: ${subtraction}`;
if (subtraction < 0) {
  p5.style.color = "red";
} else {
  p5.style.color = "green";
}

const p6 = document.createElement("p");
p6.textContent = `The Multiplication of your numbers will be: ${multiplication}`;
if (multiplication < 0) {
  p6.style.color = "red";
} else {
  p6.style.color = "green";
}

// Append the HTML elements to the container
container.appendChild(p1);
container.appendChild(p2);
container.appendChild(p3);
container.appendChild(p4);
container.appendChild(p5);
container.appendChild(p6);
/////

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

const array = [70, 400, 230, 1800, 89, 8000, 200, 71, 52, 88, 90];

const maxNumber = findMaxNumber(array);
const minNumber = findMinNumber(array);
const p7 = document.createElement("p");

p7.textContent = `The maximum number of array will be: ${maxNumber}`;
if (maxNumber < 0 && maxNumber <= 50) {
  p7.style.color = "light grey";
} else if (maxNumber >= 51 && maxNumber <= 1000) {
  p7.style.color = "grey";
} else if (maxNumber >= 1000 && maxNumber <= 10000) {
  p7.style.color = "dark grey";
} else {
  p7.style.color = "black";
  p7.style.fontWeight = "bold";
}
container.appendChild(p7);

const p8 = document.createElement("p");
p8.textContent = `The minimum number of array will be: ${minNumber}`;
if (minNumber < 0 && minNumber <= 50) {
  p8.style.color = "black";
  p8.style.fontWeight = "bold";
} else if (minNumber >= 51 && minNumber <= 1000) {
  p8.style.color = "#93a1a3";
} else if (minNumber >= 1000 && minNumber <= 10000) {
  p8.style.color = "grey";
} else {
  p8.style.color = "#494e4f";
}
container.appendChild(p8);
console.log(maxNumber);
console.log(minNumber);
