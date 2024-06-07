const cardInput = document.getElementById("card-input");
const monthInput = document.getElementById("month-input");
const yearInput = document.getElementById("year-input");
const cvcInput = document.getElementById("cvc-input");
const nameInput = document.getElementById("name-input");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.querySelectorAll(".input");
  const submitBtn = document.getElementById("submit-button");
  input.forEach((i) => {
    if (i.value === "") {
      const empty = i.nextElementSibling;
      if (empty.classList.contains("empty") < 1) {
        i.classList.add("error");
        const span = document.createElement("span");
        span.innerText = "Can't be blank";
        i.insertAdjacentElement("afterend", span);
        span.className = "empty";
      }
    }
  });
});

nameInput.addEventListener("input", () => {
  const regex = /^[a-zA-Z\s]+$/;
  const nameOutput = document.getElementById("name-output");
  nameOutput.innerText = nameInput.value;
  const empty = nameInput.nextElementSibling;
  if (empty.classList.contains("empty")) {
    empty.remove();
  }
  if (!nameInput.value) {
    nameInput.classList.remove("error");
    removeWrongFormat(nameInput);
  } else if (!nameInput.value.match(regex)) {
    nameInput.classList.add("error");
    wrongFormatLetter(nameInput);
  } else {
    removeWrongFormat(nameInput);
    nameInput.classList.remove("error");
  }
});

cardInput.addEventListener("input", () => {
  const regex = /^[\d\s]+$/;
  let val = cardInput.value.replace(/\s/g, "").slice(0, 16);
  const regVal = val.replace(/(.{4})/g, "$1 ");
  cardInput.value = regVal.trim();
  document.getElementById("card-output").innerText = regVal;
  const empty = cardInput.nextElementSibling;
  if (empty.classList.contains("empty")) {
    empty.remove();
  }
  if (!cardInput.value) {
    cardInput.classList.remove("error");
    removeWrongFormat(cardInput);
  } else if (!cardInput.value.match(regex)) {
    cardInput.classList.add("error");
    wrongFormatNum(cardInput);
  } else {
    removeWrongFormat(cardInput);
    cardInput.classList.remove("error");
  }
});

monthInput.addEventListener("input", () => {
  const regex = /^\d+$/;
  const monthOutput = document.getElementById("month-output");
  monthInput.value = monthInput.value.slice(0, 2);
  monthOutput.innerText = monthInput.value + "/";
  const empty = monthInput.nextElementSibling;
  if (empty.classList.contains("empty")) {
    empty.remove();
  }
  if (!monthInput.value) {
    removeWrongFormat(monthInput);
    monthInput.classList.remove("error");
  } else if (!monthInput.value.match(regex)) {
    monthInput.classList.add("error");
    wrongFormatNum(monthInput);
  } else {
    removeWrongFormat(monthInput);
    monthInput.classList.remove("error");
  }
});

yearInput.addEventListener("input", () => {
  const regex = /^\d+$/;
  const yearOutput = document.getElementById("year-output");
  yearInput.value = yearInput.value.slice(0, 2);
  yearOutput.innerText = yearInput.value;
  const empty = yearInput.nextElementSibling;
  if (empty.classList.contains("empty")) {
    empty.remove();
  }
  if (!yearInput.value) {
    removeWrongFormat(yearInput);
    yearInput.classList.remove("error");
  } else if (!yearInput.value.match(regex)) {
    wrongFormatNum(yearInput);
    yearInput.classList.add("error");
  } else {
    removeWrongFormat(yearInput);
    yearInput.classList.remove("error");
  }
});

cvcInput.addEventListener("input", () => {
  const regex = /^\d+$/;
  const cvcOutput = document.getElementById("cvc-output");
  cvcInput.value = cvcInput.value.slice(0, 3);
  cvcOutput.innerText = cvcInput.value;
  const empty = cvcInput.nextElementSibling;
  if (empty.classList.contains("empty")) {
    empty.remove();
  }
  if (!cvcInput.value) {
    removeWrongFormat(cvcInput);
    cvcInput.classList.remove("error");
  } else if (!cvcInput.value.match(regex)) {
    wrongFormatNum(cvcInput);
    cvcInput.classList.add("error");
  } else {
    removeWrongFormat(cvcInput);
    cvcInput.classList.remove("error");
  }
});

function wrongFormatLetter(i) {
  const createSpan = i.nextElementSibling;
  if (createSpan.classList.contains("wrong-format") < 1) {
    const errorFormat = document.createElement("span");
    errorFormat.innerText = "Wrong format, letters only";
    i.insertAdjacentElement("afterend", errorFormat);
    errorFormat.className = "wrong-format";
  }
}

function wrongFormatNum(i) {
  const createSpan = i.nextElementSibling;
  if (createSpan.classList.contains("wrong-format") < 1) {
    const errorFormat = document.createElement("span");
    errorFormat.innerText = "Wrong format, numbers only";
    i.insertAdjacentElement("afterend", errorFormat);
    errorFormat.className = "wrong-format";
  }
}

function removeWrongFormat(i) {
  const wrongFormat = i.nextElementSibling;
  if (wrongFormat.classList.contains("wrong-format")) {
    wrongFormat.remove();
  }
}
