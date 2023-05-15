export let cellsData = [
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""]
];
let cellIndex_x = 0;
let cellIndex_y = 0;
let turn = "nought";

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

const convertCellIndex = cellIndex => {
  cellIndex_x = Math.floor(cellIndex / 10);
  cellIndex_y = cellIndex % 10;
}

export const showPossibleMark = (cell, cellIndex) => {
  convertCellIndex(cellIndex);

  if (cellsData[cellIndex_x][cellIndex_y] !== "o" && cellsData[cellIndex_x][cellIndex_y] !== "x") {
    switch (turn) {
      case "nought":
        cell.firstChild.src = "images/icons/nought-turn.png";
        cell.firstChild.style.display = "block";
        break;
      case "cross":
        cell.firstChild.src = "images/icons/cross-turn.png";
        cell.firstChild.style.display = "block";
        break;
    }
  }
}

export const hidePossibleMark = (cell, cellIndex) => {
  convertCellIndex(cellIndex);

  if (cellsData[cellIndex_x][cellIndex_y] !== "o" && cellsData[cellIndex_x][cellIndex_y] !== "x") {
    cell.firstChild.style.display = "none";
  }
}

export const placeMark = (cell, cellIndex) => {
  convertCellIndex(cellIndex);

  switch (turn) {
    case "nought":
      cellsData[cellIndex_x][cellIndex_y] = "o";
      cell.firstChild.src = "images/icons/nought.png";
      cell.firstChild.style.display = "block";
      turn = "cross"
      break;
    case "cross":
      cellsData[cellIndex_x][cellIndex_y] = "x";
      cell.firstChild.src = "images/icons/cross.png";
      cell.firstChild.style.display = "block";
      turn = "nought"
      break;
  }

  console.log(cellsData)
}