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

//mathematic operations
let items = myFunction(2, 4);
function myFunction(a, b) {
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
    division
  );
}
let result = myFunction(4, 8);
console.log(result);
