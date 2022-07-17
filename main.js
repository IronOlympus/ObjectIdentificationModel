
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
    img = loadImage('tv.webp');
}
function draw(){
    image(img,0,0,490,320);
    fill('red');
    text('Samsung TV',100,60);
    noFill();
    stroke('red');
    rect(90,40,290,250)
}
function gotResult(error,results){
    if(results.length > 0){
        console.log(results);
    }
    else{
        console.error(error);
    }
}
function tv(){
    window.open('img1.html');
}
function bed(){
    window.open('img2.html');
}
function desk(){
    window.open('img3.html');
}
function bottle(){
    window.open('img4.html');
}
function basket(){
    window.open('img5.html');
}