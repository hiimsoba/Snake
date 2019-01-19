class apple {
  constructor(x, y) {
    this.pos = createVector(x, y) ;
  }
  show() {
    fill(255, 0, 0) ;
    noStroke() ;
    rect(this.pos.x, this.pos.y, scl, scl, 5) ;
    fill(0, 255, 0) ;
    rectMode(CENTER) ;
    rect(this.pos.x, this.pos.y - scl / 2, 5, 5, 10) ;
  }
}
