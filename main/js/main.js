const gameBoard = document.querySelector(".game-board");

const drawCells = (gameBoard) => {
  for(let x=1; x<11; x++){
    for(let y=1; y<11; y++){
      const cell = document.createElement("div");
      cell.style.gridColumnStart = x;
      cell.style.gridRowStart = y;
      cell.classList.add("cell");
      gameBoard.appendChild(cell);
    }
  }
}

drawCells(gameBoard);