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
function CancelableAccumulator(insertedDigit) {
  Accumulator.call(this, insertedDigit);
  this.originalValue = insertedDigit;
  this.clear = function () {
    this.value = this.originalValue;
  };
}

// Наслідуємо прототип Accumulator для CancelableAccumulator
CancelableAccumulator.prototype = Object.create(Accumulator.prototype);
CancelableAccumulator.prototype.constructor = CancelableAccumulator;
let cancelableAccumulator = new CancelableAccumulator(insertedDigit);

console.log(
  "value after CancelableAccumulator function: " + cancelableAccumulator.value
);
