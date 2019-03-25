class Pipe {
  constructor() {
    this.spacing = 175;
    this.top = random(height / 6, 3 / 4 * height);
    this.bottom = height - (this.top + this.spacing);
    this.x = width;
    this.w = 80;
    this.speed = 4;
    this.hits = function (bird) {
      if (bird.y < this.top || bird.y > height - this.bottom) {
        if (bird.x > this.x && bird.x < this.x + this.w) {
          return true;
        }
      }
      return false;
    };
    this.pass = function(bird){
      if(width - bird.x > this.x + this.w){
        return true;
      }
    }
    this.show = function () {
      fill(255);
      rect(this.x, 0, this.w, this.top);
      rect(this.x, height - this.bottom, this.w, this.bottom);
    };
    this.update = function () {
      this.x -= this.speed;
    };
    this.offscreen = function () {
      if (this.x < -this.w) {
        return true;
      }
      else {
        return false;
      }
    };
  }
}
