var pilotData = {
    x:0.0,
    y:0.0
};
var mousePos = {
    x:0.0,
    y:0.0
};
var gameSpeed = 1.0;
var maxWidth = 0;
var maxHeight = 0;
var astroids = [];

document.onmousemove = updateMousePos;

// generate new asteroid
function newAsteroid(){
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
            rand_x = Math.random() * maxWidth;
        case 1:
            rand_y = Math.random() * maxHeight;
            rand_x = maxWidth;
        case 2:
            rand_y = maxHeight;
            rand_x = Math.random() * maxWidth;
        case 3:
            rand_y = Math.random() * maxHeight;
            rand_x = 0.0;
    };
    // calculate x/y speed (should result in normal vector)
    function generateVector(){
        // traverse towards screen center
        let traverseTo_x = maxWidth/2;
        let traverseTo_y = maxHeight/2;
        // add noise to traverse point
        // +/- rand 0-0.5 screen size
        traverseTo_x = traverseTo_x + 
                       (((Math.random() * 2) - 1) * (maxWidth/2));
        traverseTo_y = traverseTo_y + 
                       (((Math.random() * 2) - 1) * (maxHeight/2));
        // start with non-normal vector
        let vec_x = rand_x - traverseTo_x;
        let vec_y = rand_y - traverseTo_y;
        let vecLength = Math.sqrt(Math.pow(vec_x,2) + Math.pow(vec_y,2));
        // normalize
        speed_x = vec_x / vecLength;
        speed_y = vec_y / vecLength;           

    };
    // construct new asteroid
    const newAst = [rand_x,rand_y,speed_x,speed_y];
    // append asteroid
    astroids.push(newAst);
}

function updateMousePos(event){

}

// move ship towards mouse location
// strength increases to a ceiling with delta
function shipLerp(event){

}

function loadGame(){

}