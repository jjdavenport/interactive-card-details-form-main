const cardNumInput = document.getElementById("card-number-input");
const monthInput = document.getElementById("month-input");
const yearInput = document.getElementById("year-input");
const cvcInput = document.getElementById("cvc-input");
const nameInput = document.getElementById("name-input");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

nameInput.addEventListener("input", () => {
  const nameOutput = document.getElementById("name-output");
  nameOutput.innerText = nameInput.value;
});

cardNumInput.addEventListener("input", () => {
  const cardOutput = document.getElementById("card-output");
  cardOutput.innerText = cardNumInput.value;
});

monthInput.addEventListener("input", () => {
  const monthOutput = document.getElementById("month-output");
  monthOutput.innerText = monthInput.value + "/";
});

yearInput.addEventListener("input", () => {
  const yearOutput = document.getElementById("year-output");
  yearOutput.innerText = yearInput.value;
});

cvcInput.addEventListener("input", () => {
  const cvcOutput = document.getElementById("cvc-output");
  cvcOutput.innerText = cvcInput.value;
});
