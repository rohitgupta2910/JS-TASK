var move = document.querySelector(".move");
var leftBox = document.querySelector(".leftbox");
var rightBox = document.querySelector(".rightbox");

move.addEventListener("dragstart", function (e) {
  var selected = e.target;

  rightBox.addEventListener("dragover", function (e) {
    e.preventDefault();
  });
  rightBox.addEventListener("drop", function (e) {
    rightBox.appendChild(selected);
    selected = null;
  });

  leftBox.addEventListener("dragover", function (e) {
    e.preventDefault();
  });
  leftBox.addEventListener("drop", function (e) {
    leftBox.appendChild(selected);
    selected = null;
  });
});
