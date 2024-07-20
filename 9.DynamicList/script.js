var left = document.querySelector(".left");
var right = document.querySelector(".right");
var dataFill = document.querySelector(".datafill");
var dataSubmit = document.querySelector(".datasubmit");

dataSubmit.addEventListener("click", function (event) {
  event.preventDefault();
  var inp = dataFill.value;
  if (inp != "") {
    // console.log("khaali ni hai")
    var clutter = `<form action="">
                        <input class="data" type="text" value=${inp} readonly>
                        <button class="dataremove" type="button">Remove Item</button>
                    </form>`;
    right.innerHTML += clutter;
    right.style.display = "inline-block";
    dataFill.value = "";

    var dataRemove = document.querySelectorAll(".dataremove");
    dataRemove.forEach(function (removeButton) {
      removeButton.addEventListener("click", function (event) {
        event.preventDefault();
        //   console.log("rempve click hua");
        this.parentElement.remove();
        if (right.children.length === 0) {
          right.style.display = "none";
        }
      });
    });
  }
});
