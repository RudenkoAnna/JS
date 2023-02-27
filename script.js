let numberOne;
let numberTwo;

numberOne = prompt("Enter first number");
numberTwo = prompt("Ënter your second number");
if (numberOne == 0 || numberTwo == 0) {
  alert(
    "Looks like one of your number is equal to 0, it's impossible to proceed with division"
  );
} else {
  alert("Division " + "" + Number(numberOne) / Number(numberTwo));
}
alert("Multiplication " + "" + Number(numberOne) * Number(numberTwo));
alert("Sum " + "" + (Number(numberOne) + Number(numberTwo)));

alert("Substraction " + "" + (Number(numberOne) - Number(numberTwo)));
