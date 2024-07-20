images = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1433838552652-f9a46b332c40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1433477155337-9aea4e790195?q=80&w=1840&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1559666126-84f389727b9a?q=80&w=1777&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

var main = document.querySelector(".main");
var left = document.querySelector(".nav .left");
var right = document.querySelector(".nav .right");
var idx = 0;
var time = 3000;
var container = document.querySelector(".container");
var interval = 0; //yeh isliye kr rhe jisse ruke , wrna stack up hojarhe bhut saare

function updateBackgroundImage() {
  container.style.backgroundImage = `url(${images[idx].imageUrl})`;
}

function start() {
  interval = setInterval(function () {
    idx = (idx + 1) % images.length;
    updateBackgroundImage();
  }, time);
}

left.addEventListener("click", function () {
  idx = (idx - 1 + images.length) % images.length;
  clearInterval(interval); //ab images change ni hojaye isliye purane interval hata diye
  updateBackgroundImage(); //isse click krte hee image change hogyi
  start(); //ab waps se aapn ne start krdia interval ko , jisse repeat hote rahe images
});

right.addEventListener("click", function () {
  idx = (idx + 1) % images.length;
  clearInterval(interval);
  updateBackgroundImage();
  start();
});

updateBackgroundImage();
start();

// the setInterval returns a interval id
// stored this interval id into one variable
// and to remove this variable value we use clearInterval
// so that it doesn't stack up and images dont change rapidly
