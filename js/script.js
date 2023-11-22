var nav = document.querySelector("nav");
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 700) {
    nav.classList.add("bg-dark", "shadow");
  } else {
    nav.classList.remove("bg-dark", "shadow");
  }
});

function addClassToParagraphs() {
  var paragraphs = document.getElementsByTagName("p");

  var paragraphsArray = Array.from(paragraphs);

  paragraphsArray.forEach(function (paragraph) {
    paragraph.classList.add("font-weight-bold");
  });
}

const content = document.getElementById("cnt");
const trailerBtn = document.getElementById("trailerBtn");

trailerBtn.addEventListener("click", function () {
  content.style.display = "none";
});
