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
