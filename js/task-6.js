function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");
const input = document.querySelector("input");
const boxes = document.querySelector("#boxes");

buttonCreate.addEventListener("click", () => {
  const amount = input.value;
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  }
});

buttonDestroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  boxes.innerHTML = '';
  let markup = "";
  const size = 30;
    for (let i = 0; i < amount; i++){
      const color = getRandomHexColor();
      const sizeBox = size + i * 10;
      markup += `<div style="width: ${sizeBox}px; height: ${sizeBox}px; background-color: ${color};"></div>`;
    }

  boxes.insertAdjacentHTML("afterbegin", markup);
  input.value = "";
}

function destroyBoxes() {
  boxes.innerHTML = '';
}
