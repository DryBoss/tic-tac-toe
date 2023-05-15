//imports
import { drawCells, cellClick } from "./cell.js";

//selectors
const gameBoard = document.querySelector(".game-board");

//variables
let turn = "nought";

//generating cells
drawCells(gameBoard);

//selcting cells after generation
const cells = document.querySelectorAll(".cell");

cells.forEach(cell => {
  cell.addEventListener("click", cellClick(cell, turn))
})
