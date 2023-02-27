let numberOne;
let numberTwo;
const positive_reply = `yes`;
const negative_reply = `no`;

numberOne = prompt("Enter first number");
numberTwo = prompt("Ënter your second number");
if (
  numberOne === "" ||
  numberOne === null ||
  numberTwo === "" ||
  numberTwo === null
) {
  alert(
    "Please eneter two digits, as requested. It is impossible to proceed operations with one number only."
  );
} else {
  if (numberOne == 0 || numberTwo == 0) {
    alert(
      "Looks like one of your number is equal to 0, it's impossible to proceed with division"
    );
  } else {
    alert("Division " + "" + Number(numberOne) / Number(numberTwo));
  }
  alert("Multiplication " + "" + Number(numberOne) * Number(numberTwo));
  alert("Sum " + "" + (Number(numberOne) + Number(numberTwo)));
  if (numberOne < numberTwo) {
    reply = prompt(
      "Are you sure, that you want to continue substraction? write yes or no"
    );
    if (reply == positive_reply) {
      alert("Substraction " + "" + (Number(numberOne) - Number(numberTwo)));
    } else if ((reply = negative_reply)) {
      alert("Okay, we will skip the substraction");
    }
  }
  if (numberOne > numberTwo) {
    alert("Substraction " + "" + (Number(numberOne) - Number(numberTwo)));
  }
}
