var bird;
var pipes = [];
var isGameOver = false;
var userScore = 0;
var safe = true;
var life = 3;

function setup() {
  createCanvas(1350, 580);
  bird = new Bird();
  pipes.push(new Pipe());
}

function draw() {
  if (!isGameOver) {
    background(156);

    for (var i = pipes.length - 1; i >= 0; i--) {
      pipes[i].show();
      pipes[i].update();

      if (pipes[i].hits(bird)) {
          isGameOver = true;
          safe = false;
          alert('Game over!')
          document.location.reload();
        }
      if (pipes[i].offscreen()) {
        pipes.splice(i, 1);
      }
    }

    bird.update();
    bird.show();

    if (frameCount % 75 == 0) {
      pipes.push(new Pipe());
    }
  }


  if (safe) {
    userScore++; 
  } else {
    console.log(userScore);
  }

  fill(139, 115, 85);
  textSize(20);
  text('Score:', width-160, 30);

  fill(139, 115, 85);
  textSize(20);
  text(userScore, width-100, 30);
  userScore = constrain(userScore, 0, userScore);
 
  fill(139, 115, 85);
  textSize(20);
  text('Lives:', (width/20)-55, 20);

  fill(139, 115, 85);
  textSize(20);
  text(life, width/20, 20);

}

function keyPressed() {
  if (key == ' ') {
    bird.up();
    //console.log("SPACE");
  }
}