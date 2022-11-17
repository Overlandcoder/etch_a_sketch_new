const container = document.querySelector(".container");

function createGrid(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);

  for (i = 0; i < (rows * cols); i++) {
    let cell = document.createElement("div");
    container.appendChild(cell);
    cell.className = "grid-item";
  }
}

createGrid(8, 8);

let cells = document.querySelectorAll(".grid-item");
cells.forEach(cell => cell.addEventListener("mouseover", addBackgroundColor));

function addBackgroundColor(cell) {
  cell.target.style.backgroundColor = "#000";
}
