//imports
import { cellsData, drawCells, placeMark, showPossibleMark, hidePossibleMark } from "./cell.js";

//selectors
const gameBoard = document.querySelector(".game-board");

//variables
let turn = "nought";

//generating cells
drawCells(gameBoard);

//selcting cells after generation
const cells = document.querySelectorAll(".cell");

cells.forEach( (cell, cellIndex) => {
  cell.addEventListener("mouseover", () => {
    showPossibleMark(cell, turn, cellIndex)
  })
  
  cell.addEventListener("mouseout", () => {
    hidePossibleMark(cell, turn, cellIndex)
  })

  cell.addEventListener("click", () => {
    placeMark(cell, turn, cellIndex)
  })
})
