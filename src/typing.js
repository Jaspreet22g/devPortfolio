

export const texts = ["coding", "music", "poetry", "design"];
export let count = 0;
export let index = 0;
export let currentText = "";
export let letters = "";
const typing=()=>{

    if (count === texts.length) {
      count = 0;
    }
    currentText = texts[count];
    letters = currentText.slice(0, ++index);
    window.document.querySelector(".typing").textContent = letters;
    if (letters.length === currentText.length) {
      count++;
      index = 0;
    }
    setTimeout(typing, 400);
  };
export default typing;