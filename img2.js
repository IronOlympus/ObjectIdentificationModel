
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
    img = loadImage('bed.jpeg');
}
function draw(){
    image(img,0,0,490,320);
    fill('red');
    text('Bed',100,130);
    noFill();
    stroke('red');
    rect(90,110,350,150)
}
function gotResult(error,results){
    if(results.length > 0){
        console.log(results);
    }
    else{
        console.error(error);
    }
}