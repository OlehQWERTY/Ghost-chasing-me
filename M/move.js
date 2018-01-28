// playerObj

// event wrapper
var keyEventControlObj = function(){

	var self = this;
	this.keysArr = [];

	this.init = function(){
		document.addEventListener("keydown", self.keyPress); 
		document.addEventListener("keyup", self.keyUp); 
	}
	this.keyPress = function(event){
		var key = event.keyCode;
		if(self.keysArr.indexOf(key) === -1){
			self.keysArr.push(key);
		}
		self.moveObjKey(playerObj); // --------------------------------------------- send to init ..........
	}
	this.keyUp = function(event){
		var key = event.keyCode;
		//console.log("keyUp: " + key);
		var pos = self.keysArr.indexOf(key);
		//console.log("Pos: " + pos);
		if(pos !== -1){
			self.keysArr.splice(pos, 1);
		}
	}
	this.moveObjKey = function(Obj){ // obj player
		if(self.keysArr.indexOf(65) !== -1) Obj.posX -=Obj.speed; // obj e.x. player
		if(self.keysArr.indexOf(68) !== -1) Obj.posX +=Obj.speed; // obj e.x. player
		if(self.keysArr.indexOf(83) !== -1) Obj.posY +=Obj.speed; // obj e.x. player
		if(self.keysArr.indexOf(87) !== -1) Obj.posY -=Obj.speed; // obj e.x. player
	}
	this.moveEnemyFollowTheObj = function(Obj){ // obj player
		// debugger;
		var possibleMovement = []; // optimise
		possibleMovement.push({posX: (Obj.posX - Obj.speed), posY: Obj.posY});
		possibleMovement.push({posX: (Obj.posX + Obj.speed), posY: Obj.posY});
		possibleMovement.push({posX: Obj.posX, posY: (Obj.posY - Obj.speed)});
		possibleMovement.push({posX: Obj.posX, posY: (Obj.posY + Obj.speed)});

		let min = distBetweenTwoPoints(possibleMovement[0], playerObj); // crutch here; if min 0 it is work like this
		let inx = 0;
		for(var i in possibleMovement){
			var tmp = distBetweenTwoPoints(possibleMovement[i], playerObj);
			if(tmp < min){
				min = tmp; // min element (not used now)
				inx = i;
			}
		}
		console.log(possibleMovement);
		console.log("min: " + min);
		return possibleMovement[inx];
	}
	this.moveEnemy = function(Obj){
		var tmp = self.moveEnemyFollowTheObj(Obj);
		Obj.posX = tmp.posX;
		Obj.posY = tmp.posY;
	}
	function distBetweenTwoPoints(Obj1, Obj2) { // (x, y) and (x1, y1)
		var dist = Math.sqrt(Math.abs(Math.pow((Obj1.posX - Obj2.posX), 2) + Math.pow((Obj1.posY - Obj2.posX), 2)));
		console.log("Dist: " + dist);
		return dist;
	}
	this.moveLim = function(Obj){ // obj player !!!!!!!!!!!!!!!!!!!!!!!!!!!!!! + draw obj
		//console.log("playerX: " + playerObj.posX, " playerY: " + playerObj.posY);
		if(Obj.posX < 0){
			Obj.posX = 0;
		}else if((Obj.posX + Obj.sizePx) > window.innerWidth){
			Obj.posX = window.innerWidth - Obj.sizePx;
		}else if(Obj.posY < 0){
			Obj.posY = 0;
		}else if((Obj.posY + Obj.sizePx) > window.innerHeight){
			Obj.posY = window.innerHeight - Obj.sizePx;
		}
		//return drawObj1.gameFieldCheckObj(Obj);
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
