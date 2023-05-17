//imports
import { drawCells, placeMark, showPossibleMark, hidePossibleMark, checkWin } from "./cell.js";

//selectors
const gameBoard = document.querySelector(".game-board");

//variables

//generating cells
drawCells(gameBoard);

//selcting cells after generation
const cells = document.querySelectorAll(".cell");

cells.forEach( (cell, cellIndex) => {
  cell.addEventListener("mouseover", () => {
    showPossibleMark(cell, cellIndex)
  })
  
  cell.addEventListener("mouseout", () => {
    hidePossibleMark(cell, cellIndex)
  })

  cell.addEventListener("click", () => {
    placeMark(cell, cellIndex);
    checkWin();
  })
})