// playerObj


// event wrapper
var keyEventControl = function(){

	var self = this;
	this.WS = false;
	this.AD = false;
	this.init = function(){
		document.addEventListener("keydown", self.keyPress); 
		document.addEventListener("keyup", self.keyUp); 
	}
	this.keyPress = function(event){
		var key = event.keyCode;
		console.log("keyPress: " + key);		
		//self.speed = speed;
		//self.color = color;
	}
	this.keyUp = function(event){
		var key = event.keyCode;
		console.log("keyUp: " + key);
		//self.posX = posX;
		//self.posY = posY;
	}

	self.init();
}

var eventControl = new keyEventControl;


// let AD = false,
// 	WS = false;
// // event connect
// document.addEventListener("keydown", keyPress); 
// document.addEventListener("keyup", keyUp); 
// // event control functions
// function keyPress(event){
// 	var key = event.keyCode;
// 	console.log("keyPress: " + key);		
// 	//keyEventControl.keyPress(event);

// 	if(AD & WS) console.log("AD + WS");

// 	if(key === 65 | key === 68) AD = true;
// 	if(key === 83 | key === 87) WS = true;

// }

// function keyUp(event){
// 	var key = event.keyCode;
// 	console.log("keyUp: " + key);
// 	// keyEventControl.keyUp(event);	

// 	if(key === 65 | key === 68) AD = false;
// 	if(key === 83 | key === 87) WS = false;	
// }





// function keyPress(event){
// 	var key = event.keyCode;
// 	console.log("Key: " + key);

// 	if(key === 65) playerObj.posX -= playerObj.speed; // A
// 	if(key === 68) playerObj.posX += playerObj.speed; // D
// 	if(key === 87) playerObj.posY -= playerObj.speed; // W
// 	if(key === 83) playerObj.posY += playerObj.speed; // S


// 	return key;
// }

// function movePlayer(event){
// 	var key = keyPress(event);

	
	

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






// function distBetweenTwoPoints(x, y) { // x y and playerX playerY
// 	var dist = Math.sqrt(Math.abs(Math.pow((playerX - x), 2) + Math.pow((playerY - y), 2)));
// 	console.log(dist);
// 	console.log("kokok");
// 	return dist;
// }
