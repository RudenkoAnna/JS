function updateTimer(deadline) {
  var time = deadline - new Date();
  return {
    days: Math.floor(time / (1000 * 60 * 60 * 24)),
    hours: Math.floor((time / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((time / 1000 / 60) % 60),
    seconds: Math.floor((time / 1000) % 60),
    total: time,
  };
}

function startTimer(id, deadline) {
  var timerInterval = setInterval(function () {
    var clock = document.getElementById(id); //getting the match id from the DOM.
    var timer = updateTimer(deadline); // generating a function and injecting it a deadline.

    clock.innerHTML =
      "<span>" +
      timer.days +
      "</span>" +
      "<span>" +
      timer.hours +
      "</span>" +
      "<span>" +
      timer.minutes +
      "</span>" +
      "<span>" +
      timer.seconds +
      "</span>";

    if (timer.total < 1) {
      clearInterval(timerInterval);
      clock.innerHTML =
        "<span>0</span><span>0</span><span>0</span><span>0</span>";
    }
  }, 1000);
}

window.onload = function (event) {
  event.preventDefault();
  var deadline = new Date("January 1, 2024 23:59:59"); // Declare a deadline.
  startTimer("clock", deadline); // we're going to inject into the clock id of the html the deadline.
};
