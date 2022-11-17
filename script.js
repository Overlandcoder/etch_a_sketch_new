const container = document.querySelector(".container");
const gridSizeButton = document.querySelector(".grid-size");

function createGrid(rows, cols, resetting = false) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  if (resetting == true) container.replaceChildren();

  for (i = 0; i < (rows * cols); i++) {
    let cell = document.createElement("div");
    container.appendChild(cell);
    cell.className = "grid-item";
  }
  addListeners();
}

function addListeners() {
  let cells = document.querySelectorAll(".grid-item");
  cells.forEach(cell => cell.addEventListener("mouseover", addBackgroundColor));
}

function addBackgroundColor(cell) {
  cell.target.style.backgroundColor = "#000";
}

gridSizeButton.addEventListener("click", () => {
  let size = prompt("How many squares per side?", 0);
  createGrid(size, size, true);
})

createGrid(8, 8);
