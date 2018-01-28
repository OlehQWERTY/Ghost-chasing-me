// playerObj


// event wrapper
var keyEventControlObj = function(){

	var self = this;
	this.WS = false;
	this.AD = false;
	this.keysArr = [];

	this.init = function(){
		document.addEventListener("keydown", self.keyPress); 
		document.addEventListener("keyup", self.keyUp); 
	}
	this.keyPress = function(event){
		var key = event.keyCode;
		console.log("keyPress: " + key);		

		// if(key === 65 | key === 68) self.AD = true;
		// if(key === 83 | key === 87) self.WS = true;
		console.log("indexOF: " + self.keysArr.indexOf(key));
		if(self.keysArr.indexOf(key) === -1){
			self.keysArr.push(key);
			//self.keysArr.push(key);
		}
		console.log("Keys: " + self.keysArr);

		self.moveObj(playerObj); // --------------------------------------------- send to init ..........
	}
	this.keyUp = function(event){
		var key = event.keyCode;
		console.log("keyUp: " + key);


		var pos = self.keysArr.indexOf(key);
		console.log("Pos: " + pos);
		if(pos !== -1) self.keysArr.splice(pos, 1);
	}
	this.moveObj = function(Obj){
		console.log("Obj.posX: " + Obj.posX + "Obj.posY: " + Obj.posY);
		if(self.keysArr.indexOf(65) !== -1) Obj.posX -=Obj.speed; // obj e.x. player
		if(self.keysArr.indexOf(68) !== -1) Obj.posX +=Obj.speed; // obj e.x. player
		if(self.keysArr.indexOf(83) !== -1) Obj.posY +=Obj.speed; // obj e.x. player
		if(self.keysArr.indexOf(87) !== -1) Obj.posY -=Obj.speed; // obj e.x. player
	}

	self.init();
}

var keyEventControl = new keyEventControlObj;







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
