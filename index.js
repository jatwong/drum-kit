var drums = document.querySelectorAll(".drum");

var numOfDrums = drums.length;

for (var i = 0; i < numOfDrums; i++) {
  let letter = drums[i].classList[0];

  drums[i].addEventListener("click", function () {
    alert(`${letter} got clicked`);
  });
}
