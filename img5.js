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
    img = loadImage('fruitbasket.jpeg');
}
function draw(){
    image(img,0,0,490,320);
    fill('red');
    text('Fruit Basket',90,110);
    noFill();
    stroke('red');
    rect(75,75,380,210)
}
function gotResult(error,results){
    if(results.length > 0){
        console.log(results);
    }
    else{
        console.error(error);
    }
}