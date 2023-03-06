const arr = [20, 30, 40, 90, 120, 11, 189, 1, 18, 31, "word"];

let sum = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] == isNaN(i)) {
    continue;
  }
  sum = sum + arr[i];
}
console.log(arr);

console.log(sum);

let max = arr[0];
for (let i = 1; i < 10; ++i) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
console.log(max);
let min = arr[0];
for (let i = 1; i < 10; ++i) {
  if (arr[i] < min) {
    min = arr[i];
  }
}
console.log(min);
