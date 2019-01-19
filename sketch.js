let w ;
let h ;
let scl = 20 ;

let snek ;
let apl ;

let gameOver ;
let dead ;

function setup() {
  createCanvas(800, 800) ;
  w = width / scl ;
  h = height / scl ;
  snek = new snake() ;
  apl = spawnApple() ;
  frameRate(10) ;
}

function draw() {
  background(0) ;
  apl.show() ;
  snek.update() ;
  snek.show() ;
  if(snek.eatsApple(apl)) {
    apl = spawnApple() ;
    snek.grow() ;
  }
  checkGameOver() ;
  drawUI() ;
  /*
  stroke(255) ;
  strokeWeight(1) ;
  fill(255) ;
  for(let i = 0 ; i < w ; i++) {
    line(0, i * scl, width, i * scl) ;
    line(i * scl, 0, i * scl, height) ;
  }
  */
}
