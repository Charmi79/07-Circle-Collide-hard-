// Circle Collide Challenge (hard)

// Setup Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 400;

// Global Vairables
let mouseX, mouseY, pmouseX, pmouseY;
let orangeX = 300;
let orangeY = 200;
let orangeRadius = 40;
let blueX = -20;
let blueY = -10;
let blueRadius = 25;
let mousedis = Math.sqrt((mouseX - blueX) ** 2 + (mouseY - blueY) ** 2);
let dx = ((mouseX - blueX) / mousedis) * 5;
let dy = ((mouseY - blueY) / mousedis) * 5;

//Main Program Loop (60 FPS)
requestAnimationFrame(loop);
function loop() {
  // Update Variable
  // Animate blue circle
 	if (mouseX > 0 || mouseY > 0 || mouseX < cnv.width || mouseY < cnv.height) {
		blueX += (mouseX - blueX) * 0.02;
		blueY += (mouseY - blueY) * 0.02;
	}
  // Animate orange circle
  if (
    (blueX - orangeX) ** 2 + (blueY - orangeY) ** 2 <=
    (blueRadius + orangeRadius) ** 2
  ) {
    orangeX = Math.random() * 600;
    orangeY = Math.random() * 400;
    orangeRadius = Math.random() * 60;
  }
  // Draw Background
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  // Draw yellow circle
  ctx.fillStyle = "orange";
  ctx.beginPath();
  ctx.arc(orangeX, orangeY, orangeRadius, 0, 2 * Math.PI);
  ctx.fill();

  // Draw blue circle
  ctx.fillStyle = "blue";
  ctx.beginPath();
  ctx.arc(blueX, blueY, blueRadius, 0, 2 * Math.PI);
  ctx.fill();

  requestAnimationFrame(loop);
}

// Document Event Stuff
document.addEventListener("mousemove", mousemovehandler);

function mousemovehandler(event) {
  // Save previous mouseX and mouseY
  pmouseX = mouseX;
  pmouseY = mouseY;
  // Update mouseX and mouseY
  let cnvRect = cnv.getBoundingClientRect();
  mouseX = event.x - cnvRect.x;
  mouseY = event.y - cnvRect.y;
  console.log(mouseX, mouseY);
}
