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
// 2
debugger;
function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.sayHello = function () {
  //added ${this. }
  return `Hi. My name is ${this.name} and I'm ${this.age} years old`;
};

const user = new User("Sherlock", 27);
// Added () at the sayHello
console.log(user.sayHello()); // має вивести "Hi. My name is Sherlock and I'm 27 years old"
