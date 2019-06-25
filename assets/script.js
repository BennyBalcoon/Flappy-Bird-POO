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


class Bird {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    moveUp(){
        this.y -= 20;
    }
}

const flappy = new Bird(20, 20);
document.addEventListener("keydown", function() {
    flappy.moveUp();
})

class Obstacle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

const pipeTop = new Obstacle();
const pipeDown = new Obstacle();