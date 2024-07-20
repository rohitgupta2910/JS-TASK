var allSubsections = document.querySelectorAll(".subsection");
allSubsections.forEach(function (sub) {
  sub.style.display = "none";
});

var sections = document.querySelectorAll(".section > a");

sections.forEach(function (section) {
  section.addEventListener("click", function (event) {
    event.preventDefault();

    var subsection = this.nextElementSibling;

    if (subsection.style.display === "block") {
      subsection.style.display = "none";
    } else {
      var allSubsections = document.querySelectorAll(".subsection");
      allSubsections.forEach(function (sub) {
        sub.style.display = "none";
      });
      subsection.style.display = "block";
    }
  });
});
