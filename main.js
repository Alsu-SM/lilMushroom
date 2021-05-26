//alert('test');

const Player = function(x,y) {
  this.x = x;
  this.y = y;
};

const ViewPort = function (x, y, w, h) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
}

ViewPort.prototype = {

  scrollTo: function(x,y) {
    this.x = (x );
    //this.y = (y - this.w*0.5);

  }
};

Player.prototype = {
  moveTo: function(x,y) {
    this.x += (x - this.x - tile_size)*0.05;
    this.y += (y - this. y - tile_size/2)*0.05;

    //console.log("move");
  },

  
}


let pointer = {x:200, y:210};

let scaled_size = 32;
let tile_size = 32;
let columns = 10;
let rows = 10;
let layer1 = [
  [133, 133, 133, 133, 133, 133, 133, 133, 133, 133], 
  [133, 133, 133, 133, 133, 133, 133, 133, 133, 133], 
  [133, 133, 133, 133, 133, 133, 133, 133, 133, 133], 
  [133, 133, 133, 133, 133, 129, 130, 131, 132, 133],
  [133, 133, 133, 133, 133, 137, 138, 139, 140, 141], 
  [133, 133, 133, 133, 133, 133, 133, 133, 133, 133], 
  [133, 133, 133, 133, 133, 133, 133, 133, 133, 133], 
  [86, 86, 86, 86, 86, 86, 86, 86, 86, 86], 
  [86, 86, 86, 86, 86, 86, 86, 86, 86, 86], 
  [86, 86, 86, 86, 86, 86, 86, 86, 86, 86]
];

let layer2 = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
  [0, 0, 0, 0, 0, 0, 124, 123, 0, 0], 
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
  [126, 127, 128, 0, 0, 0, 0, 0, 0, 0], 
  [134, 135, 136, 0, 0, 0, 0, 0, 0, 0], 
  [142, 143, 144, 0, 0, 0, 0, 0, 0, 0], 
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

let longLayer1 =  [133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 129, 130, 131, 132, 133, 133, 133, 133, 133, 133, 129, 130, 131, 132, 133, 133, 133, 133, 133, 129, 130, 131, 132, 133, 133, 133, 133, 133, 133, 133, 137, 138, 139, 140, 141, 133, 133, 133, 133, 133, 137, 138, 139, 140, 141, 133, 133, 133, 133, 137, 138, 139, 140, 141, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86];

let longLayer2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 124, 124, 0, 0, 0, 0, 0, 0, 0, 0, 124, 123, 0, 0, 0, 0, 0, 0, 0, 123, 123, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 126, 127, 128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 126, 127, 128, 0, 0, 0, 0, 0, 0, 0, 134, 135, 136, 0, 0, 0, 0, 0, 0, 0, 111, 112, 111, 112, 0, 0, 0, 0, 0, 0, 134, 135, 136, 0, 0, 0, 0, 111, 112, 101, 142, 143, 144, 101, 101, 101, 101, 101, 101, 101, 119, 120, 119, 120, 101, 101, 101, 101, 101, 101, 142, 143, 144, 101, 101, 101, 101, 119, 120, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

let newCols = 10; let newRows = 30;
let temp = new Array(newCols);
let temp2 = new Array(newCols);
//console.log(temp.length);
let arrX = 0;
let arrY = 0;

for (let i = 0; i < temp.length; i++) {
  temp[i] = new Array(newRows);
  temp2[i] = new Array(newRows);
}

let k = 0;
for (let i = 0; i < temp.length; i++) {
  for (let j = 0; j < temp[2].length; j++) {
    
    temp[i][j] = longLayer1[k];
    temp2[i][j] = longLayer2[k];
    k++;

  }
}




// console.log(temp);
// console.log(temp2);


let fieldWidth = newRows*tile_size;
let fieldHeight = newCols*tile_size;

console.log("fieldWidth: ", fieldWidth);

let canvas = document.getElementById('canvasID');
let ctx = canvas.getContext('2d');





let height = document.documentElement.clientHeight;
let width = document.documentElement.clientWidth;
let player = new Player(100,100);



let viewport = new ViewPort(pointer.x, 0,300 + tile_size, fieldHeight);
function loop() {
  
//  viewport.x++;  



  window.requestAnimationFrame(loop);
  
  height = document.documentElement.clientHeight;
  width = document.documentElement.clientWidth;

  ctx.canvas.height = height;
  ctx.canvas.width = width;

  ctx.fillStyle = 'pink';

  ctx.fillRect(0,0,width, height);
  ctx.stroke();
  
  player.moveTo(pointer.x, pointer.y);  
  viewport.scrollTo(player.x, player.y);

  let x_min = Math.floor(viewport.x/tile_size);
  let y_min = Math.floor(viewport.y/tile_size);

  let x_max = Math.ceil((viewport.x+viewport.w + 200)/tile_size);
  let y_max = Math.ceil((viewport.y+viewport.h)/tile_size);

  // if (x_min < 0) x_min = 0;
  // if (y_min < 0) y_min = 0;
  // if (x_max > newCols) x_max = newCols;
  // if (y_max > newRows) y_max = newRows;




  viewWidth = 470;
  //console.log(viewWidth);

  /* layer 1 */
  let value1, value2, sx, sy, tile_x, tile_y;

//  let centralElemX = width*0.5 - viewport.w*0.5;
//  let centralElemY = height*0.5 - viewport.h*0.5;


  for (let x = x_min; x < x_max; x++) {
 
    for (let y = 0; y < rows; y++) {

      //value1 = layer1[y][x];  
      value1 = temp[y][x];  

      //viewport.x++;
      sx = (value1-1) % 8;
     
      sy = Math.floor((value1-1)/8);
      tile_x = Math.floor(x*tile_size - viewport.x);// вроде как смягчает границы тайлов
      tile_y = Math.floor(y*tile_size - viewport.y);// вроде как смягчает границы тайлов

      ctx.drawImage(tile_sheet, sx*tile_size, sy*tile_size, tile_size, tile_size, tile_x, tile_y, 32, 32);
      

      value2 = temp2[y][x];
      if (value2 !==0) {
        
        sx = (value2-1) % 8;
        
        sy = Math.floor((value2-1)/8);
        tile_x = Math.floor(x*tile_size - viewport.x);// вроде как смягчает границы тайлов
        tile_y = Math.floor(y*tile_size - viewport.y);// вроде как смягчает границы тайлов
        
        ctx.drawImage(tile_sheet, sx*tile_size,   sy*tile_size, tile_size, tile_size, tile_x,   tile_y, 32, 32);
      }

 

  }
};
  


  ctx.imageSmoothingEnabled = false;

  ctx.drawImage(tile_sheet, 4*tile_size, 15*tile_size, tile_size, tile_size, player.x, player.y, 32, 32);

};

let tile_sheet = new Image();

tile_sheet.addEventListener("load", (event)=>{loop();}); // как только картинки загрузятся, вызываем цикл

tile_sheet.src = "genericPlatformer.png";

ctx.canvas.addEventListener("click", (event) => {
  viewport = new ViewPort(pointer.x, 0,300 + tile_size, fieldHeight);
  if (event.pageX < 0 + tile_size/2 + 5) 
    { 
      pointer.x = 0 + tile_size/2 + 5;
    }
  else if (event.pageX > viewWidth) 
  {
    pointer.x = viewWidth;
  }

  else {
  pointer.x = event.pageX;
  }

  if (event.pageY < 0 + tile_size/2 + 5) 
    { 
      pointer.y = 0 + tile_size/2 + 5;
    }
  else if (event.pageY > fieldHeight - tile_size/2-5) 
  {
    pointer.y = fieldHeight - tile_size/2-5;
  }

  else {
  pointer.y = event.pageY;
  }

 

})

window.addEventListener("keydown", startMove); 



function startMove(event) {
  viewport = new ViewPort(pointer.x, 0,300 + tile_size, fieldHeight);

  switch(event.key) {
    case "ArrowDown": {

      //console.log(viewport.w);
      if (pointer.y<fieldHeight-tile_size/2-5)
      {
      pointer.y+=3;
      break;
      }
      else 
      break;
    }
    case "s": {
      if (pointer.y<fieldHeight-tile_size/2-5)
      {
      pointer.y+=3;
      break;
      }
      else 
      break;
    }
    case "ArrowUp": {
     
      if (pointer.y > 0 + tile_size/2+5) {
      pointer.y-=3;
      break;
      }
      else 
      break;
    }
    case "w": {
      
      if (pointer.y > 0 + tile_size/2+5) {
        pointer.y-=3;
        break;
        }
        else 
        break;
    }
    case "ArrowRight" : {

      
      
      if (pointer.x < viewWidth) 
      {
      pointer.x+=3;
      break;
      }
      else
      break;
    }
    case "d" : {
      //if (pointer.x < fieldWidth - tile_size/2-5) 
      if (pointer.x < viewWidth) 

      {
      pointer.x+=3;
      break;
      }
      else
      break;
    }
    case "ArrowLeft": {
      if (pointer.x > 0 + tile_size/2 + 5) 
      {
      pointer.x-=3;
      break;
      }

      else break;
    }
    case "a": {

      if (pointer.x > 0 + tile_size/2 + 5) 
      {
      pointer.x-=3;
      break;
      }

      else break;
    }


    case " ": {
          
      break;

    }
  }
    
  }
