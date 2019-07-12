import Cell from './cell.js'
import * as constants from './constants.js';

export default class Grid{
  constructor(rows, cols){
    // grid contains rows, columns and cells array, each cell item consists of its position information in the grid.
    this.rows = rows;
    this.cols = cols;
    this.cells = Array(rows).fill().map(() => Array(cols).fill());

    this.cells.forEach((row, i) => {
      row.forEach((cell, j) => {
        this.cells[i][j] = new Cell(i, j, constants.WIDTH / cols, constants.HEIGHT / rows);
        this.cells[i][j].countMines(cell);
      });
    });
  }

  // draw the grid
  draw(ctx){
    this.cells.forEach((row) => {
      row.forEach((cell) => {
        cell.draw(ctx);
      });
    });
  }

  // capture the click event and show the cell
  onclick(mouseX, mouseY){
    this.cells.forEach((row) => {
      row.forEach((cell) => {
        if (cell.getCell(mouseX, mouseY)) {
          console.log("Cell: ", cell);
          cell.show();
        }
      });
    });
  }
}
