const cardInput = document.getElementById("card-input");
const monthInput = document.getElementById("month-input");
const yearInput = document.getElementById("year-input");
const cvcInput = document.getElementById("cvc-input");
const nameInput = document.getElementById("name-input");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.querySelectorAll(".input");
  input.forEach((i) => {
    if (i.value === "") {
      i.classList.add("error");
    }
  });
});

nameInput.addEventListener("input", () => {
  const nameOutput = document.getElementById("name-output");
  nameOutput.innerText = nameInput.value;
  if (nameInput.value) {
    nameInput.classList.remove("error");
  }
});

cardInput.addEventListener("input", () => {
  const regex = /^[\d\s]+$/;
  let val = cardInput.value.replace(/\s/g, "").slice(0, 16);
  const regVal = val.replace(/(.{4})/g, "$1 ");
  cardInput.value = regVal.trim();
  document.getElementById("card-output").innerText = regVal;
  if (!cardInput.value) {
    cardInput.classList.remove("error");
  } else if (!cardInput.value.match(regex)) {
    cardInput.classList.add("error");
  } else {
    cardInput.classList.remove("error");
  }
});

monthInput.addEventListener("input", () => {
  const regex = /^\d+$/;
  const monthOutput = document.getElementById("month-output");
  monthInput.value = monthInput.value.slice(0, 2);
  monthOutput.innerText = monthInput.value + "/";
  if (!monthInput.value) {
    monthInput.classList.remove("error");
  } else if (!monthInput.value.match(regex)) {
    monthInput.classList.add("error");
  } else {
    monthInput.classList.remove("error");
  }
});

yearInput.addEventListener("input", () => {
  const regex = /^\d+$/;
  const yearOutput = document.getElementById("year-output");
  yearInput.value = yearInput.value.slice(0, 2);
  yearOutput.innerText = yearInput.value;
  if (!yearInput.value) {
    yearInput.classList.remove("error");
  } else if (!yearInput.value.match(regex)) {
    yearInput.classList.add("error");
  } else {
    yearInput.classList.remove("error");
  }
});

cvcInput.addEventListener("input", () => {
  const regex = /^\d+$/;
  const cvcOutput = document.getElementById("cvc-output");
  cvcInput.value = cvcInput.value.slice(0, 3);
  cvcOutput.innerText = cvcInput.value;
  if (!cvcInput.value) {
    cvcInput.classList.remove("error");
  } else if (!cvcInput.value.match(regex)) {
    cvcInput.classList.add("error");
  } else {
    cvcInput.classList.remove("error");
  }
});
