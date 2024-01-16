//Simple Paint

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 400;

//Global Variables
let mouseIsPressed = false;
let mouseX, mouseY, pmouseX, pmouseY;
let size = 5;
let penColor = "Black";

//Main Program Loop (60 FPS)
requestAnimationFrame(loop);

function loop() {
  //Update Variables

  //Draw a circle of mouseIsPressed
  if (mouseIsPressed) {
    ctx.strokeStyle = penColor;
    ctx.lineWidth = size;
    ctx.beginPath();
    ctx.moveTo(pmouseX, pmouseY);
    ctx.lineTo(mouseX, mouseY);
    ctx.stroke();
  }

  requestAnimationFrame(loop);
}

// Document Event Stuff
document.addEventListener("mousedown", mousedownHandler);
document.addEventListener("mouseup", mouseupHandler);
document.addEventListener("mousemove", mousemoveHandler);
document.addEventListener("keydown", keydownHandler);

function mousedownHandler(event) {
  mouseIsPressed = true;
}

function mouseupHandler() {
  mouseIsPressed = false;
}

function mousemoveHandler(event) {
  //Save previous mouse x and y
  pmouseX = mouseX;
  pmouseY = mouseY;

  let cnvRect = cnv.getBoundingClientRect();
  mouseX = event.x - cnvRect.x;
  mouseY = event.y - cnvRect.y;
}

function keydownHandler(event) {
  console.log(event.code);

  if (event.code == "Space") {
    //Draw a Background
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, cnv.width, cnv.height);
  } else if (event.code == "ArrowUp") {
    size++;
  } else if (event.code == "ArrowDown") {
    size--;
  } else if (event.code == "Digit1") {
    penColor = "red";
  } else if (event.code == "Digit2") {
    penColor = "green";
  } else if (event.code == "Digit3") {
    penColor = "blue";
  }
}

//Color Events
document.getElementById("redBtn").addEventListener("click", setRed);
document.getElementById("greenBtn").addEventListener("click", setGreen);
document.getElementById("blueBtn").addEventListener("click", setBlue);
document.getElementById("colorPicker").addEventListener("change", changeColor);

function setRed() {
  penColor = "red";
}
function setGreen() {
  penColor = "green";
}
function setBlue() {
  penColor = "blue";
}
function changeColor() {
  penColor = document.getElementById("colorPicker").value;
}
