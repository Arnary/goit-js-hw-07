function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const changeColor = document.querySelector(".change-color");
const body = document.querySelector("body")
const color = document.querySelector(".color");

changeColor.addEventListener("click", handlerClick);

function handlerClick() {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  color.textContent = randomColor;
}
