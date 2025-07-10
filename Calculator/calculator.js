let display = document.getElementById("display");

function appendValue(value) {
  // Reset color to green on next input
  display.style.color = "#0f0";

  if (display.innerText === "0" && value !== ".") {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

function resetCalc() {
  display.innerText = "0";
}

function deleteLast() {
  if (display.innerText.length > 1) {
    display.innerText = display.innerText.slice(0, -1);
  } else {
    display.innerText = "0";
  }
}

function evaluateResult() {
  try {
    let result = eval(display.innerText);
    display.innerText = result;
    display.style.color = "#0f0"; // reset to green on success
  } catch (e) {
    display.innerText = "Invalid";
    display.style.color = "red";
  }
}
