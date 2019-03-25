class Bird {
  constructor() {
    this.y = height / 2;
    this.x = 64;
    this.gravity = 0.6;
    this.lift = -22;
    this.velocity = 0;
    this.show = function () {
      fill(255);
      ellipse(this.x, this.y, 32, 32);
      // var bird = new Image();
      // bird.src = "bird.png";
    };
    this.up = function () {
      this.velocity += this.lift;
    };
    this.update = function () {
      this.velocity += this.gravity;
      // this.velocity *= 0.9;
      this.y += this.velocity;
      if (this.y > height) {
        this.y = height;
        this.velocity = 0;
      }
      if (this.y < 0) {
        this.y = 0;
        this.velocity = 0;
      }
    };
  }
}
