//drawing cells on gameboard
export const drawCells = gameBoard => {
  for(let x=1; x<11; x++){
    for(let y=1; y<11; y++){
      //cell creation
      const cell = document.createElement("div");
      //cross turn hover image
      const cellImageCrossTurn = document.createElement("img");
      cellImageCrossTurn.style.width = "100%";
      cellImageCrossTurn.src = "images/icons/cross-turn.png";
      cellImageCrossTurn.style.display = "none";
      cell.appendChild(cellImageCrossTurn);
      //nought turn hover image
      const cellImageNoughtTurn = document.createElement("img");
      cellImageNoughtTurn.style.width = "100%";
      cellImageNoughtTurn.src = "images/icons/nought-turn.png";
      cellImageNoughtTurn.style.display = "none";
      cell.appendChild(cellImageNoughtTurn);
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

//what happens on cell click
export const cellClick = (cell, turn) => {
  //place mark
  switch (turn) {
    case "nought":
      break;
    case "cross":
      break;
  }
}