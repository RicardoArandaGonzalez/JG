let player;
let warrior;
let rez = 20;
let food;
let w;
let h;
let img;
let cnv;


let levelArrary = ["../../Levels/level1/game of life/index.html",
 "../../Levels/level2/game of life/index.html",
  "../../Levels/level3/game of life/index.html",
   "../../Levels/level4/game of life/index.html",
    "../../Levels/level5/game of life/index.html"];

function preload(){
    img = loadImage('./kirito.jpg')
}

function setup() {
    cnv = createCanvas(400, 400);
    cnv.position(((windowWidth - width) / 2), ((windowHeight - height) / 2))
    w = floor(width / rez);
    h = floor(height / rez);
    frameRate(5);
    player = new Player();
    // warrior = new Warrior(player.body.x, player.body.y)
    foodLocation();

}

function foodLocation() {
    let x = floor(random(w));
    let y = floor(random(h));
    food = createVector(x, y);

}

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        if(player.borderLateralColition()){
            player.body.x = w -2;
            foodLocation();
        }else{
            player.setDir(-1, 0);
        } 
    } else if (keyCode === RIGHT_ARROW) {
        if(player.borderLateralColition()){
            player.body.x = 1;
            foodLocation();
        }else{
            player.setDir(1, 0);
        }
    } else if (keyCode === DOWN_ARROW) {
        if(player.borderVerticalColition()){
            player.body.y = 1;
            foodLocation();
        }else{
            player.setDir(0, 1);
        }
    } else if (keyCode === UP_ARROW) {
        if(player.borderVerticalColition()){
            player.body.y = h - 2;
            foodLocation();
        }else{
            player.setDir(0, -1);
        }
    }else if (keyCode === 13) {
        if (player.eat(food)) {
            alert("Accesing computer")
            location.replace(levelArrary[Math.floor(Math.random()*5)])
            console.log('acceso')
        }
    }
}

function keyReleased() {
    if (keyCode === LEFT_ARROW) {
        player.setDir(0, 0);
    } else if (keyCode === RIGHT_ARROW) {
        player.setDir(0, 0);
    } else if (keyCode === DOWN_ARROW) {
        player.setDir(0, 0);
    } else if (keyCode === UP_ARROW) {
        player.setDir(0, 0);
    }
}





function draw() {
    scale(rez);
    background(220);

    player.update();
    player.show();
    Image(img, player.body.x, player.body.y)


    // warrior.update();

    noStroke();
    fill(255, 0, 0);
    rect(food.x, food.y, 1, 1);
}
