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
let gap = 80;
let constant = 322; // pipeNorth.height + gap

class Bird {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    moveUp() {
        this.y -= 20;
    }
}

const flappy = new Bird(100, 100, 38, 26);
document.addEventListener("keydown", function () {
    flappy.moveUp();
})

class Obstacle {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
}

const pipeN = new Obstacle(100, 0, 52, 242);
const pipeS = new Obstacle(100, 0 + constant, 52, 378);
const floor = new Obstacle(0, cvs.height - 118, 306, 118); // 118 = floor.height

let pipes = [];
pipes[0] = {
    x: cvs.width,
    y: 0
}

function draw() {

    ctx.drawImage(bg, 0, 0);
    ctx.drawImage(bg, 288, 0); // 288 = bg.width
    ctx.drawImage(bird, flappy.x, flappy.y);

    for (let i = 0; i < pipes.length; i++) {
        ctx.drawImage(pipeNorth, pipes[i].x, pipes[i].y);
        ctx.drawImage(pipeSouth, pipes[i].x, pipes[i].y + constant);
        pipes[i].x--;

        if (pipes[i].x === 100) {
            pipes.push({
                x: cvs.width,
                y: Math.floor((Math.random() * pipeN.h) - pipeN.h)
            })
        }
        if (flappy.x + flappy.w >= pipes[i].x && flappy.x<=pipes[i].x + pipeN.w && (flappy.y <= pipes[i].y+pipeN.h || flappy.y + flappy.h>=pipes[i].y+constant)) {
            location.reload();
        }
    }
    ctx.drawImage(fg, floor.x, floor.y);
    ctx.drawImage(fg, floor.x + 306, floor.y); // 306 = fg.width

    flappy.y += gravity;


    requestAnimationFrame(draw);
}

draw();