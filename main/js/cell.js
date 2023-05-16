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
let turn = "o";

const cellImages = document.querySelectorAll(".cell-image")



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
      case "o":
        cell.firstChild.src = "images/icons/nought-turn.png";
        cell.firstChild.style.display = "block";
        break;
      case "x":
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

  if (cellsData[cellIndex_x][cellIndex_y] !== "o" && cellsData[cellIndex_x][cellIndex_y] !== "x") {
    switch (turn) {
      case "o":
        cellsData[cellIndex_x][cellIndex_y] = "o";
        cell.firstChild.src = "images/icons/nought.png";
        cell.firstChild.style.display = "block";
        break;
      case "x":
        cellsData[cellIndex_x][cellIndex_y] = "x";
        cell.firstChild.src = "images/icons/cross.png";
        cell.firstChild.style.display = "block";
        break;
    }
  }
}

export const checkWin = () => {
  //check rows
  for(let row = 0; row < 10; row++){
    let similarIcon = 0;
    for(let column = 0; column < 10; column++){
      if (turn === cellsData[row][column]){
        similarIcon++
      } else {
        similarIcon = 0
      }
      if (similarIcon === 5) {
        winDialog();
      }
    }
  }
  //check columns
  for(let column = 0; column < 10; column++){
    let similarIcon = 0;
    for(let row = 0; row < 10; row++){
      if (turn === cellsData[row][column]){
        similarIcon++
      } else {
        similarIcon = 0
      }
      if (similarIcon === 5) {
        winDialog();
      }
    }
  }
  //check diagonal [top left to bottom right]
  for(let row = 0; row < 6; row++){
    for(let column = 0; column < 6; column++){
      let similarIcon = 0;
      for(let diagonal = 0; diagonal < 5; diagonal++){
        if (turn === cellsData[row + diagonal][column + diagonal]){
          similarIcon++
        } else {
          similarIcon = 0
        }
        if (similarIcon === 5) {
          winDialog();
        }
      }
    }
  }
  //check diagonal [top right to bottom left]
  for(let row = 0; row < 6; row++){
    for(let column = 4; column < 10; column++){
      let similarIcon = 0;
      for(let diagonal = 0; diagonal < 5; diagonal++){
        if (turn === cellsData[row + diagonal][column - diagonal]){
          similarIcon++
        } else {
          similarIcon = 0
        }
        if (similarIcon === 5) {
          winDialog();
        }
      }
    }
  }
  changeTurn();
}

const changeTurn = () => {
  switch (turn) {
    case "o" :
      turn = "x"
      break;
    case "x" :
      turn = "o"
      break;
  }
}

const winDialog = () => {
  document.querySelector(".win-dialog").style.display = "block"
  document.querySelector(".win-dialog p span").innerHTML = `${turn}`
}

export const resetGame = () => {
  cellsData = [
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
  document.querySelector(".win-dialog").style.display = "none"
  turn = "o"
  cellImages.forEach(cellImage => {
    cellImage.style.display = "none"
  })
}

document.getElementById("restart").addEventListener("click", resetGame)
document.getElementById("play-again").addEventListener("click", resetGame)