var finished = document.querySelector(".finished");
var form = document.querySelector(".form");
var time = document.querySelector("#timeForm");
var timer = document.querySelector(".timer");
var timeElapsed = document.querySelector(".timeElapsed");
var rt = timeElapsed.querySelector(".rt");

time.addEventListener("submit", function (elem) {
  elem.preventDefault();
  var timeSubmitted = document.querySelector("#timeInput");
  var timevalue = timeSubmitted.value;
  rt.innerHTML = 0;
  countdownTimer(timevalue);
});

function countdownTimer(timevalue) {
  timeElapsed.style.display = "inline";
  var total = timevalue;
  var timer = setInterval(function () {
    timevalue--;
    rt.innerHTML = total - timevalue;
    if (timevalue <= 0) {
      clearInterval(timer);
      finished.style.display = "inline";
      form.style.display = "none";
    }
  }, 1000);
}
