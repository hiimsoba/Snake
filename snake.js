class snake {
  constructor() {
    this.pos = createVector(floor(w / 2) * scl, floor(h / 2) * scl) ;
    this.vel = createVector(1, 0) ;
    this.tail = [] ;
    this.size = 1 ;
  }

  move(x, y) {
    if(this.size > 1) {
      if((-1) * x != this.tail[this.size - 1][2] || (-1) * y != this.tail[this.size - 1][3]) {
        this.vel.x = x ;
        this.vel.y = y ;
      }
    } else {
      this.vel.x = x ;
      this.vel.y = y ;
    }
  }

  update() {
    this.pos.x += this.vel.x * scl ;
    this.pos.y += this.vel.y * scl ;
    if(this.pos.x >= width || this.pos.y >= height || this.pos.x <= 0 || this.pos.y <= 0) {
      gameOver = true ;
      dead = [this.pos.x, this.pos.y] ;
    }
    if(this.size) {
      this.tail = this.tail.slice(1) ;
      this.tail.push([this.pos.x, this.pos.y, this.vel.x, this.vel.y]) ;
    }
    this.checkTailIntegrity() ;
  }

  checkTailIntegrity() {
    let head = this.tail[this.size - 1] ;
    for(let i = 0 ; i < this.size - 1 ; i++) {
      if(head[0] == this.tail[i][0] && head[1] == this.tail[i][1]) {
        dead = head ;
        gameOver = true ;
        break ;
      }
    }
  }

  eatsApple(a) {
    return this.pos.x == a.pos.x && this.pos.y == a.pos.y ;
  }

  grow() {
    this.size++ ;
    this.tail.push([this.pos.x, this.pos.y, this.vel.x, this.vel.y]) ;
  }

  show() {
    fill(0, 255, 100) ;
    noStroke() ;
    for(let i = 0 ; i < this.size ; i++) {
      let sz ;
      if(this.size == 1) {
        sz = scl ;
      } else {
        sz = map(i, 0, this.size - 1, scl / 2, scl) ;
      }
      rectMode(CENTER) ;
      rect(this.tail[i][0], this.tail[i][1], sz, sz, 7.5) ;
    }
  }
}
