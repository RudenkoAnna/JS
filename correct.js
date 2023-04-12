// 1

function calculateAverage(arr) {
  let sum = 0;
  /// changed <= to <
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  let avg = sum / arr.length;
  /// added return
  return avg;
}

let numbers = [1, 2, 3, 4, 5];

let avg = calculateAverage(numbers);
console.log("The average is: " + avg); // має бути 3
