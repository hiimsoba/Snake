function keyPressed() {
  if(key === 'r' || key == 'R' && gameOver) {
    resetGame() ;
  } else {
    switch(keyCode) {
      case 37 :
        snek.move(-1, 0) ;
        break ;
      case 38 :
        snek.move(0, -1) ;
        break ;
      case 39 :
        snek.move(1, 0) ;
        break ;
      case 40 :
        snek.move(0, 1) ;
        break ;
    }
  }
}

function spawnApple() {
  let x = floor(random(1, w - 1)) ;
  let y = floor(random(1, h - 1)) ;
  return new apple(x * scl, y * scl) ;
}

function resetGame() {
  console.log("reset game") ;
  snek = new snake() ;
  apl = spawnApple() ;
  gameOver = false ;
  loop() ;
}

function drawUI() {
  stroke(115, 200, 150) ;
  strokeWeight(4) ;
  line(0, 0, width, 0) ;
  line(0, 0, 0, height) ;
  line(0, height, width, height) ;
  line(width, 0, width, height) ;
  fill(255) ;
  textSize(24) ;
  noStroke() ;
  textAlign(CENTER, CENTER) ;
  text("Score : " + (snek.size - 1), 75, 50) ;
}

function checkGameOver() {
  if(gameOver) {
    fill(255, 0, 0) ;
    rectMode(CENTER) ;
    rect(dead[0], dead[1], scl, scl, 7.5) ;
    textSize(32) ;
    fill(255) ;
    textAlign(CENTER, CENTER) ;
    text("Press 'R' to restart the game!", width / 2, 2 * height / 3) ;
    noLoop() ;
  }
}
