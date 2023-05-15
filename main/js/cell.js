export let cellsData = [];

//drawing cells on gameboard
export const drawCells = gameBoard => {
  for(let x=1; x<11; x++){
    for(let y=1; y<11; y++){
      //cell creation
      const cell = document.createElement("div");
      //cell image
      const cellImage = document.createElement("img");
      cellImage.style.width = "100%";
      cellImage.style.display = "none";
      cellImage.classList.add("cell-image");
      cell.appendChild(cellImage);
      //cell appending
      cell.style.gridColumnStart = x;
      cell.style.gridRowStart = y;
      cell.classList.add("cell");
      cell.classList.add("blank");
      cell.classList.add("cross-turn");
      gameBoard.appendChild(cell);
    }
  }
}

export const showPossibleMark = (cell, turn, cellIndex) => {
  if (cellsData[cellIndex] !== "o") {
    switch (turn) {
      case "nought":
        cell.firstChild.src = "images/icons/nought-turn.png";
        cell.firstChild.style.display = "block";
        break;
      case "cross":
        break;
    }
  }
}

export const hidePossibleMark = (cell, turn, cellIndex) => {
  if (cellsData[cellIndex] !== "o") {
    cell.firstChild.style.display = "none";
  }
}

export const placeMark = (cell, turn, cellIndex) => {
  switch (turn) {
    case "nought":
      cellsData[cellIndex] = "o";
      cell.firstChild.src = "images/icons/nought.png";
      cell.firstChild.style.display = "block";
      break;
    case "cross":
      break;
  }
}