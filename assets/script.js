let cvs = document.getElementById('canvas');
let ctx = cvs.getContext('2d');

let bird = new Image();
bird.src = "assets/bird.png";

let bg = new Image();
bg.src = "assets/bg.png";

let pipeNorth = new Image();
pipeNorth.src = "assets/pipeNorth.png";

let pipeSouth = new Image();
pipeSouth.src = "assets/pipeSouth.png";

let fg = new Image();
fg.src = "assets/fg.png"

let gravity = 1;

class Bird {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    moveUp(){
        this.y -= 20;
    }
}

const flappy = new Bird(20, 50);
document.addEventListener("keydown", function() {
    flappy.moveUp();
})


class Obstacle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

const pipeTop = new Obstacle(200, -100);
const pipeDown = new Obstacle(200, 250);
const floor = new Obstacle(0, cvs.height-118); // 118 = floor.height


function draw() {
  
    ctx.drawImage(bg, 0, 0);
    ctx.drawImage(bg, 288, 0);
    ctx.drawImage(bird, flappy.x, flappy.y);
    ctx.drawImage(pipeNorth, pipeTop.x, pipeTop.y);
    ctx.drawImage(pipeSouth, pipeDown.x, pipeDown.y);
    ctx.drawImage(fg, floor.x, floor.y);
    ctx.drawImage(fg, floor.x+306, floor.y); // 306 = fg.width

    flappy.y += gravity;

    requestAnimationFrame(draw);
}

draw();