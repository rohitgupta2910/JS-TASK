var buttons = document.querySelectorAll(".keys button");
var screens = document.querySelector(".screens");
var calci = document.querySelector(".calci");

buttons.forEach(function (key) {
  key.innerHTML = key.id;
});

var exp = "";

calci.addEventListener("click", function (elem) {
  if (elem.target.tagName === "BUTTON") {
    console.log(elem.target.id);
    if (elem.target.id === "=") {
      solve(exp);
      exp = "";
    } else if (elem.target.id === "C") {
      exp = "";
      screens.innerHTML = "";
    } else {
      exp += elem.target.id;
      screens.innerHTML = exp;
    }
  }
});

function solve(exp) {
  try {
    var result = eval(exp);
    screens.innerHTML = result;
  } catch (error) {
    console.error("Invalid", error);
    screens.innerHTML = "SYNTAX ERROR";
  }
}
