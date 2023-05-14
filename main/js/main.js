const gameBoard = document.querySelector(".game-board");

const drawCells = (gameBoard) => {
  for(let x=1; x<11; x++){
    for(let y=1; y<11; y++){
      const cell = document.createElement("div");
      const cellImageCrossTurn = document.createElement("img");
      cellImageCrossTurn.style.width = "100%";
      cellImageCrossTurn.src = "images/icons/cross-turn.png";
      cell.appendChild(cellImageCrossTurn);
      cell.style.gridColumnStart = x;
      cell.style.gridRowStart = y;
      cell.classList.add("cell");
      cell.classList.add("blank");
      gameBoard.appendChild(cell);
    }
  }
}

drawCells(gameBoard);