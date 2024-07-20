let questions = [
  {
    id: 0,
    question: "Which city is known as the Silicon Valley of India?",
    options: ["Mumbai", "Bangalore", "Hyderabad", "Chennai"],
    answer: "Bangalore",
  },
  {
    id: 1,
    question: "Who was the first Prime Minister of India?",
    options: [
      "Jawaharlal Nehru",
      "Mahatma Gandhi",
      "Indira Gandhi",
      "Sardar Vallabhbhai Patel",
    ],
    answer: "Jawaharlal Nehru",
  },
  {
    id: 2,
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "Japan", "South Korea", "Thailand"],
    answer: "Japan",
  },
  {
    id: 3,
    question: "Which mountain is the tallest in the world?",
    options: [
      "Mount Everest",
      "K2",
      "Mount Kilimanjaro",
      "Mount McKinley (Denali)",
    ],
    answer: "Mount Everest",
  },
  {
    id: 4,
    question: "Which ocean is the largest in the world?",
    options: [
      "Indian Ocean",
      "Atlantic Ocean",
      "Pacific Ocean",
      "Arctic Ocean",
    ],
    answer: "Pacific Ocean",
  },
];

var main = document.querySelector(".main");
var clutter = "";
questions.forEach(function (elem) {
  clutter += `<div class="box">
                <div class="que">
                    <h5>${elem.question}</h5>
                </div>
                <div class="options">
                    <br>
                    <div class="option">
                        <button id="0">A</button>
                        <h5>${elem.options[0]}</h5>
                    </div>
                    <br>
                    <div class="option">
                        <button id="1">B</button>
                        <h5>${elem.options[1]}</h5>
                    </div>
                    <br>
                    <div class="option">
                        <button id="2">C</button>
                        <h5>${elem.options[2]}</h5>
                    </div>
                    <br>
                    <div class="option">
                        <button id="3">D</button>
                        <h5>${elem.options[3]}</h5>
                    </div>
                    <br>
                </div>
                <div class="ans">
                    <a class="correct">CORRECT</a>
                    <a class="wrong">WRONG</a>
                </div>
            </div>`;
});

main.innerHTML = clutter;
var option = document.querySelectorAll(".option");

var box = document.querySelectorAll(".box");
box.forEach(function (elem, idx) {
  elem.addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON") {
      console.log(event.target.id);
      var optionDiv = event.target.parentElement;

      var h5Element = optionDiv.querySelector("h5");

      var submittedAns = h5Element.textContent;

      var optionsDiv = optionDiv.parentElement;

      var boxDiv = optionsDiv.parentElement;

      var ansDiv = boxDiv.querySelector(".ans");

      var correct = ansDiv.querySelector(".correct");

      var wrong = ansDiv.querySelector(".wrong");

      if (questions[idx].answer === submittedAns) {
        ansDiv.style.display = "none";
        wrong.style.display = "none";
        correct.style.display = "inline";
        ansDiv.style.display = "inline";
      } else {
        ansDiv.style.display = "none";
        correct.style.display = "none";
        wrong.style.display = "inline";
        ansDiv.style.display = "inline";
      }
    }
  });
});
