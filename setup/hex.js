const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    const randomNumber = randNum();
    hexColor = hexColor + hex[randomNumber];
  }
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
  console.log(hexColor);
});

const randNum = () => {
  return Math.floor(Math.random() * hex.length);
};
