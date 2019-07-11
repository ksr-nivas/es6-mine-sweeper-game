const mine = new Image();
mine.src = './';

export default class Cell {
  constructor(row, col, w, h){
    this.row = row;
    this.col = col;
    
    this.padding = 1;

    this.width = w - this.padding*2;
    this.height = h - this.padding*2;

    this.x = col * w + this.padding;
    this.y = row * h + this.padding;

    this.isMine = Math.random() < 0.1; // will place bombs at random cells.
  }

  draw(ctx){
    ctx.fillStyle = color(255);
    ctx.fillRect(this.x, this.y, this.width, this.height);

    if(this.isMine){
      ctx.drawImage(mine, this.x, this.y, this.width, this.height);
    }
  }
}