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
		//console.log("keyPress: " + key);		
		//console.log("indexOF: " + self.keysArr.indexOf(key));
		if(self.keysArr.indexOf(key) === -1){
			self.keysArr.push(key);
			//self.keysArr.push(key);
		}
		//console.log("Keys: " + self.keysArr);

		self.moveObj(playerObj); // --------------------------------------------- send to init ..........
	}
	this.keyUp = function(event){
		var key = event.keyCode;
		//console.log("keyUp: " + key);
		var pos = self.keysArr.indexOf(key);
		//console.log("Pos: " + pos);
		if(pos !== -1) self.keysArr.splice(pos, 1);
	}
	this.moveObj = function(Obj){ // obj player
		//console.log("Obj.posX: " + Obj.posX + "Obj.posY: " + Obj.posY);
		if(self.keysArr.indexOf(65) !== -1) Obj.posX -=Obj.speed; // obj e.x. player
		if(self.keysArr.indexOf(68) !== -1) Obj.posX +=Obj.speed; // obj e.x. player
		if(self.keysArr.indexOf(83) !== -1) Obj.posY +=Obj.speed; // obj e.x. player
		if(self.keysArr.indexOf(87) !== -1) Obj.posY -=Obj.speed; // obj e.x. player
	}

	this.moveLim = function(Obj){ // obj player !!!!!!!!!!!!!!!!!!!!!!!!!!!!!! + draw obj
		//console.log("playerX: " + playerObj.posX, " playerY: " + playerObj.posY);
		return drawObj1.gameFieldCheckObj(Obj);
	}

	self.init();
}

var keyEventControl = new keyEventControlObj;





// function distBetweenTwoPoints(x, y) { // x y and playerX playerY
// 	var dist = Math.sqrt(Math.abs(Math.pow((playerX - x), 2) + Math.pow((playerY - y), 2)));
// 	console.log(dist);
// 	console.log("kokok");
// 	return dist;
// }
