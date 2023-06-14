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

    // ref to the HTML with div clock - concat the series of spans
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

    // Check for the end of timer.
    if (timer.total < 1) {
      //means the difference
      clearInterval(timerInterval);
      clock.innerHTML =
        "<span>0</span><span>0</span><span>0</span><span>0</span>";
    }
  }, 1000);
}

// when the window loads fire this function.
window.onload = function () {
  var deadline = new Date("January 1, 2024 23:59:59"); // Declare a deadline.
  startTimer("clock", deadline); // we're going to inject into the clock id of the html the deadline.
};
