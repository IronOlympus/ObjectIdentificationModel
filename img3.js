function setup(){
    canvas = createCanvas(490,320);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
}
function modelLoaded(){
    console.log('Model Loaded');
    status1 = "true";
    objectDetector.detect(img, gotResult);
}
img = "";
status1 = ""
function preload(){
    img = loadImage('desk.jpg');
}
function draw(){
    image(img,0,0,490,320);
    fill('red');
    text('Desk',50,130);
    noFill();
    stroke('red');
    rect(20,110,450,150)
}
function gotResult(error,results){
    if(results.length > 0){
        console.log(results);
    }
    else{
        console.error(error);
    }
}