import Cell from './cell.js'

export default class Grid{
  constructor(rows, cols){
    this.rows = rows;
    this.cols = cols;
    this.cells = Array(rows).fill().map(() => Array(cols).fill());

    this.createCells((cell, i, j) => {
      this.cells[i][j] = new Cell(i, j, width / cols, height / rows);
    });
  }

  createCells(callback){
    this.cells.forEach((row, i) => {
      row.forEach((cell, j) => {
        callback(cell, i, j);
      });
    });
  }

  draw(ctx){
    this.createCells((cell, row, col) => {
      cell.draw(ctx);
    });
  }
}
