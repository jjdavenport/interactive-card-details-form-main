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
  validateForm();
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
  const spanVal = val.padEnd(16, "0");
  const regexOutput = spanVal.replace(/(.{4})/g, "$1 ").trim();
  document.getElementById("card-output").innerText = regexOutput;
  const empty = cardInput.nextElementSibling;
  if (empty.classList.contains("empty")) {
    empty.remove();
  }
  if (!cardInput.value) {
    cardInput.classList.remove("error");
    removeMissing(cardInput);
    removeWrongFormat(cardInput);
  } else if (!cardInput.value.match(regex)) {
    cardInput.classList.add("error");
    wrongFormatNum(cardInput);
  } else {
    removeMissing(cardInput);
    removeWrongFormat(cardInput);
    cardInput.classList.remove("error");
  }
  missingCardNum(cardInput);
});

monthInput.addEventListener("input", () => {
  const regex = /^\d+$/;
  const monthRegex = /^(0[0-9]|1[0-2])$/;
  const monthOutput = document.getElementById("month-output");
  let val = monthInput.value.slice(0, 2);
  const spanVal = val.padEnd(2, "0");
  monthInput.value = val;
  monthOutput.innerText = spanVal + "/";
  const empty = monthInput.nextElementSibling;
  if (empty.classList.contains("empty")) {
    empty.remove();
  }
  if (monthInput.value.length < 2) {
    removeWrongFormat(monthInput);
    removeMissing(monthInput);
    monthInput.classList.remove("error");
  } else if (!monthInput.value.match(regex)) {
    monthInput.classList.add("error");
    wrongFormatNum(monthInput);
  } else if (!monthInput.value.match(monthRegex)) {
    monthInput.classList.add("error");
    wrongFormatMonth(monthInput);
  } else {
    removeWrongFormat(monthInput);
    removeMissing(monthInput);
    monthInput.classList.remove("error");
  }
  missingMonthYear(monthInput);
});

yearInput.addEventListener("input", () => {
  const regex = /^\d+$/;
  const yearOutput = document.getElementById("year-output");
  let val = yearInput.value.slice(0, 2);
  const spanVal = val.padEnd(2, "0");
  yearInput.value = val;
  yearOutput.innerText = spanVal;
  const empty = yearInput.nextElementSibling;
  if (empty.classList.contains("empty")) {
    empty.remove();
  }
  if (!yearInput.value) {
    removeWrongFormat(yearInput);
    removeMissing(yearInput);
    yearInput.classList.remove("error");
  } else if (!yearInput.value.match(regex)) {
    wrongFormatNum(yearInput);
    yearInput.classList.add("error");
  } else {
    removeWrongFormat(yearInput);
    removeMissing(yearInput);
    yearInput.classList.remove("error");
  }
  missingMonthYear(yearInput);
});

cvcInput.addEventListener("input", () => {
  const regex = /^\d+$/;
  const cvcOutput = document.getElementById("cvc-output");
  let val = cvcInput.value.slice(0, 3);
  const spanVal = val.padEnd(3, "0");
  cvcInput.value = val;
  cvcOutput.innerText = spanVal;
  const empty = cvcInput.nextElementSibling;
  if (empty.classList.contains("empty")) {
    empty.remove();
  }
  if (!cvcInput.value) {
    removeWrongFormat(cvcInput);
    removeMissing(cvcInput);
    cvcInput.classList.remove("error");
  } else if (!cvcInput.value.match(regex)) {
    wrongFormatNum(cvcInput);
    cvcInput.classList.add("error");
  } else {
    removeMissing(cvcInput);
    removeWrongFormat(cvcInput);
    cvcInput.classList.remove("error");
  }
  missingCvc(cvcInput);
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

function wrongFormatMonth(i) {
  const createSpan = i.nextElementSibling;
  if (createSpan.classList.contains("wrong-format") < 1) {
    const errorFormat = document.createElement("span");
    errorFormat.innerText = "Wrong format, only 12 months in a year";
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

function missingCardNum(i) {
  const submitButton = document.getElementById("submit-button");
  submitButton.addEventListener("click", () => {
    const createSpan = i.nextElementSibling;
    if (!createSpan.classList.contains("missing")) {
      if (i.value.length < 19 && i.value.length > 0) {
        wrongCardNum(i);
      }
    }
  });
}

function missingMonthYear(i) {
  const submitButton = document.getElementById("submit-button");
  submitButton.addEventListener("click", () => {
    const createSpan = i.nextElementSibling;
    if (!createSpan.classList.contains("missing")) {
      if (i.value.length === 1) {
        wrongMonthYear(i);
      }
    }
  });
}

function missingCvc(i) {
  const submitButton = document.getElementById("submit-button");
  submitButton.addEventListener("click", () => {
    const createSpan = i.nextElementSibling;
    if (!createSpan.classList.contains("missing")) {
      if (i.value.length === 1 || i.value.length === 2) {
        wrongCvc(i);
      }
    }
  });
}

function removeMissing(i) {
  const missing = i.nextElementSibling;
  if (missing.classList.contains("missing")) {
    missing.remove();
  }
}

function validateForm() {
  const formatCheck = document.querySelectorAll(".error");
  if (formatCheck.length > 0) {
    console.log("invalid");
  } else {
    console.log("valid");
  }
}

function wrongCardNum(i) {
  const createSpan = i.nextElementSibling;
  if (createSpan.classList.contains("wrong-format") < 1) {
    const errorFormat = document.createElement("span");
    errorFormat.innerText = "16 Digits Required";
    i.insertAdjacentElement("afterend", errorFormat);
    errorFormat.className = "missing";
    i.classList.add("error");
  }
}

function wrongMonthYear(i) {
  const createSpan = i.nextElementSibling;
  if (createSpan.classList.contains("wrong-format") < 1) {
    const errorFormat = document.createElement("span");
    errorFormat.innerText = "2 Digits Required";
    i.insertAdjacentElement("afterend", errorFormat);
    errorFormat.className = "missing";
    i.classList.add("error");
  }
}

function wrongCvc(i) {
  const createSpan = i.nextElementSibling;
  if (createSpan.classList.contains("wrong-format") < 1) {
    const errorFormat = document.createElement("span");
    errorFormat.innerText = "3 Digits Required";
    i.insertAdjacentElement("afterend", errorFormat);
    errorFormat.className = "missing";
    i.classList.add("error");
  }
}
