// Variables

let calculate = document.getElementById("cal-btn");

let topBase = document.getElementById("b1-input");
let bottomBase = document.getElementById("b2-input");
let height = document.getElementById("h-input");
let output = document.getElementById("output");

let unitDropDown = document.getElementById("area-unit");
let unitOut = document.getElementById("output-unit");

let picture = document.getElementById("pic-container");

// Event Listeners
calculate.addEventListener("click", calcArea);
unitDropDown.addEventListener("change", showUnit);

// Functions

function calcArea() {
  // INPUT
  let num1 = +topBase.value;
  let num2 = +bottomBase.value;
  let num3 = +height.value;

  // PROCESS
  let result = (1 / 2) * (num1 + num2) * num3;
  result = result.toFixed(2);

  // OUTPUT
  output.style.border = "2px solid green";
  output.innerHTML = result;

  picture.innerHTML = "<img src='img/checkmark.png' />";

  topBase.value = " ";
  bottomBase.value = " ";
  height.value = " ";
}

function showUnit() {
  let unit = unitDropDown.value;

  unitOut.innerHTML = unit + "<sup>2</sup>";
}
