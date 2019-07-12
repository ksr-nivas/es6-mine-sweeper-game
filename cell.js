const mine = '9';

export default class Cell {
    constructor(row, col, w, h){
      this.row = row;
      this.col = col;
      
      this.padding = 1;
  
      this.width = w - this.padding*2; // actual cell width excluding right & left padding
      this.height = h - this.padding*2;// actual cell height excluding top & bottom padding
  
      this.x = col * w + this.padding; // cell position
      this.y = row * h + this.padding;
  
      this.isMine = Math.random() < 0.1; // will place bombs at random cells.
      this.isHidden = true; // by default all the cells are in hidden mode. on click only it will displays mine / count
  
      this.mineCount = 0; // holds the neighbour cells mine count.
      this.fontSize = this.width/2;
    }
  
    // returns a particular cell based on mouse click
    getCell(mouseX, mouseY){
      return (mouseX > this.x && mouseX < this.x + this.width &&
              mouseY > this.y && mouseY < this.y + this.height);
    }
  
    // draw the cells
    draw(ctx){
      ctx.fillStyle = color(this.isHidden ? 90 : 200);
      ctx.fillRect(this.x, this.y, this.width, this.height);
  
      if(this.isHidden) return;
  
      // based on the mine cell we have to display a mine(9) or the count(0/1/2) of mines on the adjacent cells
      if(this.isMine){
        ctx.font = `${this.fontSize}px Arial`;
        ctx.fillStyle = color(0);
        ctx.fillText(mine, this.x + this.width/2, this.y + 2*this.height/3);
      }
      else{
        ctx.font = `${this.fontSize}px Arial`;
        ctx.fillStyle = color(0);
        ctx.fillText(this.mineCount, this.x + this.width/2, this.y + 2*this.height/3);
      }
    }
  
    // flips the cell and shows whether it is a mine(9) or mines count
    show(){
      this.isHidden = false;

      // Need to reveal all the cells till it identifies any mine cells
    }

    countMines(){
        // Need to count the neighbour mines and display on the adjacent cells
    }
  }