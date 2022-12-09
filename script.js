const body = document.querySelector("body");
const col1 = document.querySelector(".col1");
const col2 = document.querySelector(".col2");

function changeBackground() {
  body.style.background = "linear-gradient(to right," + col1.value + ", " + col2.value +")";
}

col1.addEventListener("input", changeBackground);
col2.addEventListener("input", changeBackground);
