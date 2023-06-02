function preload(){

}
function setup() {
    canvas = createCanvas(500, 500);
    canvas.center();
    Video = createCapture(VIDEO);
    Video.size(200, 200);
    Video.hide();
}
function draw() {
    image(Video, 50, 50, 325, 275);
    fill("yellow");
    stroke("Green");
    circle(20,20,30);
    fill("blue")
    rect(33,17,375,10);
    fill("lime");
    stroke("Green");
    circle(20,350,30);
    fill("orange")
    rect(33,347,375,10);
    fill("cyan")
    rect(15,33,10,303);
    fill("pink");
    stroke("Green");
    circle(400,350,30);
    fill("red");
    stroke("Green");
    circle(400,20,30);
    fill("green")
    rect(395,33,10,303);
}
