var pilotData = {
    x:0.0,
    y:0.0
};
var mousePos = {
    x:0.0,
    y:0.0
};
let canvas;
let context;
let dateObj;
let gameSpeed = 1.0;
let maxWidth = 0;
let maxHeight = 0;
let astroids = [];

document.onmousemove = updateMousePos;
setInterval(newAsteroid,350);

// generate new asteroid
function newAsteroid(){
    console.log("Asteroid added, " + astroids.length + " +1");
    //select top, right, bottom, left
    // 0 - top
    // 1 - right
    // 2 - bottom
    // 3 - left
    const wall = Math.floor(Math.random() * 4);
    let rand_x = 0.0;
    let rand_y = 0.0;
    let speed_x = 0.0;
    let speed_y = 0.0;
    // generate random x/y pos
    switch(wall){
        case 0:
            rand_y = 0.0;
            rand_x = Math.random() * canvas.width;
            break;
        case 1:
            rand_y = Math.random() * canvas.height;
            rand_x = canvas.width;
            break;
        case 2:
            rand_y = canvas.height;
            rand_x = Math.random() * canvas.width;
            break;
        case 3:
            rand_y = Math.random() * canvas.height;
            rand_x = 0.0;
            break;
    };
    // calculate x/y speed (should result in normal vector)
    function generateVector(){
        // traverse towards screen center
        let traverseTo_x = canvas.width/2;
        let traverseTo_y = canvas.height/2;
        // add noise to traverse point
        // +/- rand 0-0.5 screen size
        traverseTo_x = traverseTo_x + 
                       (((Math.random() * 2) - 1) * (canvas.width/2));
        traverseTo_y = traverseTo_y + 
                       (((Math.random() * 2) - 1) * (canvas.height/2));
        // start with non-normal vector
        let vec_x = rand_x - traverseTo_x;
        let vec_y = rand_y - traverseTo_y;
        let vecLength = Math.sqrt(Math.pow(vec_x,2) + Math.pow(vec_y,2));
        // normalize
        speed_x = (vec_x / vecLength) * -1;
        speed_y = (vec_y / vecLength) * -1;           

    };
    const size = (Math.random() * 60) + 20; // random diameter between 20-80px
    // construct new asteroid
    generateVector();
    const newAst = [rand_x,rand_y,speed_x,speed_y,size];
    // append asteroid
    astroids.push(newAst);
    if(astroids.length > 50){
        astroids.splice(0,1);
    }
}

function updateMousePos(event){
    mousePos.x = event.pageX;
    mousePos.y = event.pageY;
}

// iterate through astroid list:
// for performance, this will
// - check for collisions
// - if coliding, send game end signal
// - if no collisions, move asteroids
function handleAstroids(){
    context.fillStyle = 'black';
    for(let i = 0; i < astroids.length; i++){
        // update pos
        let ast_x = astroids[i][0];
        let ast_y = astroids[i][1];
        let spd_x = astroids[i][2];
        let spd_y = astroids[i][3];
        astroids[i][0] += spd_x * gameSpeed;
        astroids[i][1] += spd_y * gameSpeed;
        context.beginPath();
        context.arc(astroids[i][0],astroids[i][1],astroids[i][4],0,2 * Math.PI);
        context.fill();
    }
}

// move ship towards mouse location
// strength increases to a ceiling with delta
function shipLerp(event){
    let dx = pilotData.x - mousePos.x;
    let dy = pilotData.y - mousePos.y;
    let vec = Math.sqrt(Math.pow(dx,2) + Math.pow(dy,2));
    // normalize
    let dx_p = dx/vec;
    let dy_p = dy/vec;
    // this is currently linear but I'm leaving the extra code in case I want to make it exponential
    pilotData.x += dx_p * Math.abs(dx/maxWidth) * -10;
    pilotData.y += dy_p * Math.abs(dy/maxHeight) * -10;
}

function draw(){
    // update heights in case of window resize 
    canvas = document.getElementById("canvas");
    context = canvas.getContext('2d');
    maxWidth = canvas.width;
    maxHeight = canvas.height;
    context.clearRect(0,0,canvas.width,canvas.height);
    // move ship
    shipLerp();
    // move astroids
    handleAstroids();
    // draw items
    context.fillStyle = 'red';
    context.beginPath();
    context.arc(pilotData.x,pilotData.y,10,0,2 * Math.PI);
    context.fill();
    requestAnimationFrame(draw);
}

function loadGame(){
    console.log("ALL SYSTEMS GREEN CAPTAIN!");
    canvas = document.getElementById("canvas");
    context = canvas.getContext('2d');
    maxWidth = canvas.width;
    maxHeight = canvas.height;
    pilotData.x = canvas.width/2;
    pilotData.y = canvas.height/2;
    requestAnimationFrame(draw);
}