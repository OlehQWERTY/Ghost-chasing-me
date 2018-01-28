// events

myCanvas.addEventListener("click", canvElemCollision);
//drawObj1.canvas.addEventListener("click, canvElemCollision");
document.addEventListener("keydown", playerMove); 

function getClickPosition(event) {
	var x = event.clientX;
	var y = event.clientY;
	console.log("click: X = " + x + " Y = " + y);
	return {x, y};
}

function canvElemCollision(event) {
	var clickPos = getClickPosition(event);
	// console.log(clickPos.x);
	// console.log(clickPos.y);
}

function keyPress(event) {
	var key = event.keyCode;
	//alert(key);
	console.log("Key: " + key);
	return key;
}

function playerMove(event) {
	var key = keyPress(event);

	if(key === 65) playerObj.posX -= playerObj.speed; // A
	if(key === 68) playerObj.posX += playerObj.speed; // D
	if(key === 87) playerObj.posY -= playerObj.speed; // W
	if(key === 83) playerObj.posY += playerObj.speed; // S
	

	if(playerObj.posX > (480 - playerObj.sizePx)) { // 40 - player size  // if(playerX > (ctx.width - playerSizeX))
		playerObj.posX = 480 - playerObj.sizePx;
	} else if(playerObj.posX < 0) {
		playerObj.posX = 0;
	}

	if(playerObj.posY > (320 - playerObj.sizePx)) { // 40 - player size // ctx.height - playerSizeY
		playerObj.posY = 320 - playerObj.sizePx;
	} else if(playerObj.posY < 0) {
		playerObj.posY = 0;
	}

	//console.log("PlayerX: " + playerX + " PlayerY: " + playerY);


	//createPlayer(playerX, playerY);
}
