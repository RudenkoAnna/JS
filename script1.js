// created function and added increment + decrement options
function Accumulator(insertedDigit) {
  this.value = insertedDigit;
  this.increment = function () {
    this.value++;
  };
  this.decrement = function () {
    this.value--;
  };
}

let insertedDigit = parseInt(prompt("Please insert the digit:"));
let accumulator = new Accumulator(insertedDigit);

console.log("Inserted value: " + accumulator.value);

accumulator.increment();
console.log("Increment: " + accumulator.value);

accumulator.decrement();
console.log("Decrement: " + accumulator.value);

//created CancelableAccumulator function
