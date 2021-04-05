import "../styles/main.scss";
import favicon from "../favicon-32x32.png";
import Jaspreet from "../assets/miscellaneous/developer.svg";

const texts = ["coding", "music", "poetry", "design"];
let count = 0;
let index = 0;
let currentText = "";
let letters = "";

(function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letters = currentText.slice(0, ++index);
  document.querySelector(".typing").textContent = letters;
  if (letters.length === currentText.length) {
    count++;
    index = 0;
  }
  setTimeout(type, 400);
})();
