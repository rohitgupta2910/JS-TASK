var fs = document.querySelector(".formStructure");
var submission = document.querySelector(".submission");
var username = document.querySelector("#name");
var email = document.querySelector("#email");
var password = document.querySelector("#password");
var nameCheck = document.querySelector(".nameCheck");
var emailCheck = document.querySelector(".emailCheck");
var passwordCheck = document.querySelector(".passwordCheck");
var success = document.querySelector(".success");
var submit = document.querySelector(".submit");

submit.addEventListener("click", function (event) {
  event.preventDefault();
  var valid = true;

  if (!validateUsername(username.value)) {
    nameCheck.style.display = "inline";
    valid = false;
  }

  if (!validateEmail(email.value)) {
    email.style.display = "inline";
    valid = false;
  }

  if (!validatePassword(password.value)) {
    passwordCheck.style.display = "inline";
    valid = false;
  }

  if (valid) {
    success.style.display = "inline";
  }

  submission.style.display = "inline";
});

function validateUsername(username) {
  var re = /^[a-zA-Z_ ]{3,16}$/;
  return re.test(username);
}

function validateEmail(email) {
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validatePassword(password) {
  var re = /^(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;
  return re.test(password);
}
