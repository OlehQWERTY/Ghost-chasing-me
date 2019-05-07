
var keyEventControlObj = function(){
	var self = this;
	this.keysArr = [];
	this.flgMouseDown = 0;
	this.buildEvent = new Event('build');

	this.init = function(){
		myCanvas.addEventListener("click", self.canvElemCollision);  // rename it?
		// var event = new Event('build');
		// Подписываемся на событие
		document.addEventListener('build', self.getMousePos(myCanvas, self.buildEvent), false);
		// Вызываем событие
		// elem.dispatchEvent(self.event);

		document.addEventListener("keydown", self.keyPress); 
		document.addEventListener("keyup", self.keyUp); 
	}
	this.canvElemCollision = function(event) {  // rename it?
		var clickPos = self.getClickPosition(event);
		// console.log(clickPos.x);
		// console.log(clickPos.y);
	}
	this.getClickPosition = function(event) {
		var x = event.clientX;
		var y = event.clientY;
		console.log("click: X = " + x + " Y = " + y);
		return {x, y};
	}
	this.getMousePos = function(canvas, evt) {
		var rect = canvas.getBoundingClientRect();
		console.log("{x: evt.clientX - rect.left, y: evt.clientY - rect.top}")
		return {
			x: evt.clientX - rect.left,
			y: evt.clientY - rect.top
		};
	}
	// var pos = getMousePos(canvas, evt);
	this.checkMouseDown = function() {
		// var flgMouseDown = 0;
		document.body.onmousedown = function() { 
		    self.flgMouseDown = 1;
		    document.dispatchEvent(self.buildEvent);
		    console.log("event", self.buildEvent );
		}
		document.body.onmouseup = function() {
		    self.flgMouseDown = 0;
		}
	}
	this.mouseDown = function(){
		self.checkMouseDown();  // check mouse is currently pressed
		return self.flgMouseDown;
	}
	this.keyPress = function(event) {
		var key = event.keyCode;
		if(self.keysArr.indexOf(key) === -1){
			self.keysArr.push(key);
		}
		self.moveObjKey(playerObj); // --------------------------------------------- send to init ..........
	}
	this.keyUp = function(event) {
		var key = event.keyCode;
		//console.log("keyUp: " + key);
		var pos = self.keysArr.indexOf(key);
		//console.log("Pos: " + pos);
		if(pos !== -1){
			self.keysArr.splice(pos, 1);
		}
	}
	this.moveObjKey = function(Obj){ // obj player
		if(self.keysArr.indexOf(65) !== -1) Obj.posX -= Obj.speed; // obj e.x. player
		if(self.keysArr.indexOf(68) !== -1) Obj.posX += Obj.speed; // obj e.x. player
		if(self.keysArr.indexOf(83) !== -1) Obj.posY += Obj.speed; // obj e.x. player
		if(self.keysArr.indexOf(87) !== -1) Obj.posY -= Obj.speed; // obj e.x. player
	}
	this.moveEnemyFollowTheObj = function(Obj){ // obj player
		// debugger;
		var possibleMovement = []; // optimise
		possibleMovement.push({posX: Obj.posX, posY: Obj.posY});  // the same as current obj pos
		possibleMovement.push({posX: (Obj.posX + Obj.speed), posY: Obj.posY});
		possibleMovement.push({posX: (Obj.posX - Obj.speed), posY: Obj.posY});
		possibleMovement.push({posX: Obj.posX, posY: (Obj.posY + Obj.speed)});
		possibleMovement.push({posX: Obj.posX, posY: (Obj.posY - Obj.speed)});

		let min = distBetweenTwoPoints(playerObj, possibleMovement[0]); // distance to obj's current pos
		let inx = 0;
		for(var i in possibleMovement){
			var tmp = distBetweenTwoPoints(playerObj, possibleMovement[i]);
			if(min > tmp){
				min = tmp; // min element
				inx = i;
			}
			// console.log("dist[" + i + "]: " + tmp);
		}
		return possibleMovement[inx];
	}
	this.moveEnemy = function(Obj){
		var tmp = self.moveEnemyFollowTheObj(Obj);
		Obj.posX = tmp.posX;
		Obj.posY = tmp.posY;
	}
	function distBetweenTwoPoints(Obj1, Obj2) { // (x, y) and (x1, y1)
		var dist = Math.sqrt(Math.abs(Math.pow((Obj1.posX - Obj2.posX), 2) + Math.pow((Obj1.posY - Obj2.posY), 2)));
		//console.log("Dist: " + dist);
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
