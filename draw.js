var canvas = document.getElementById("myCanvas");
if (canvas.getContext) {
  var ctx = canvas.getContext('2d');
  // drawing code here
} else {
	alert("Your browser doesn't support canvas.");
  // canvas-unsupported code here
}












// myCanvas.addEventListener("click", canvElemCollision);

// document.addEventListener("keydown", playerMove); 

// function getClickPosition(event) {
// 	var x = event.clientX;
// 	var y = event.clientY;
// 	console.log("click: X = " + x + " Y = " + y);
// 	return {x, y};
// }

// function canvElemCollision(event) {
// 	var clickPos = getClickPosition(event);

// }

// function keyPress(event) {
// 	var key = event.keyCode;
// 	//alert(key);
// 	console.log("Key: " + key);
// 	return key;
// }

// function playerMove(event) {
// 	var key = keyPress(event);

// 	if(key === 65) playerObj.posX -= playerObj.speed; // A
// 	if(key === 68) playerObj.posX += playerObj.speed; // D
// 	if(key === 87) playerObj.posY -= playerObj.speed; // W
// 	if(key === 83) playerObj.posY += playerObj.speed; // S
	

// 	if(playerObj.posX > (480 - playerObj.sizePx)) { // 40 - player size  // if(playerX > (ctx.width - playerSizeX))
// 		playerObj.posX = 480 - playerObj.sizePx;
// 	} else if(playerObj.posX < 0) {
// 		playerObj.posX = 0;
// 	}

// 	if(playerObj.posY > (320 - playerObj.sizePx)) { // 40 - player size // ctx.height - playerSizeY
// 		playerObj.posY = 320 - playerObj.sizePx;
// 	} else if(playerObj.posY < 0) {
// 		playerObj.posY = 0;
// 	}
// }















var canvasPos = canvas.getBoundingClientRect();
// console.log(canvasPos);
// console.log(canvasPos.x);
// console.log(canvasPos.y);


function showPlayer() {
	//ctx.clearRect(0, 0, 480, 320); // (0, 0, ctx.width, ctx.height)
	ctx.beginPath();
	ctx.rect(playerObj.posX, playerObj.posY, playerObj.sizePx, playerObj.sizePx);
	ctx.fillStyle = playerObj.color; // 'rgba(0, 0, 200, 0.5)'
	ctx.fill();
	ctx.closePath();
}

///////////////////////////////

// function drawObj(){
// 	var self = this;
// 	this.init = function(){
// 		self.canvas = document.getElementById("myCanvas");
// 		if (self.canvas.getContext) {
// 			self.ctx = self.canvas.getContext('2d');
// 			self.ctx.canvas.width  = window.innerWidth;
// 			self.ctx.canvas.height = window.innerHeight;
// 		}else{
// 			alert("Please update your browser, because it doesn't support canvas.");
// 		}
// 	}
// 	this.showPlayer = function(){ // obj as parameter
// 		//ctx.clearRect(0, 0, 480, 320); // (0, 0, ctx.width, ctx.height)
// 		self.ctx.beginPath();
// 		self.ctx.rect(playerObj.posX, playerObj.posY, playerObj.sizePx, playerObj.sizePx); // obj.posX ...
// 		self.ctx.fillStyle = playerObj.color; // 'rgba(0, 0, 200, 0.5)'
// 		self.ctx.fill();
// 		self.ctx.closePath();
// 	}
// 	this.clearWindow = function(){
// 		self.ctx.clearRect(0, 0, 480, 320); // (0, 0, ctx.width, ctx.height)
// 	}
// }

// var drawObj1 = new drawObj;
// drawObj1.init();








