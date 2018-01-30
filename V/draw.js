function drawObj(){
	var self = this;
	this.init = function(){
		self.canvas = document.getElementById("myCanvas");
		if (self.canvas.getContext) {
			self.ctx = self.canvas.getContext('2d');
			if(window.innerWidth > 320 | window.innerWidth < 4096 |
				window.innerHight > 320 | window.innerWidth < 4096){
				self.ctx.canvas.width  = window.innerWidth;
				self.ctx.canvas.height = window.innerHeight;
			}else{
				this.unsupportedResolution();
			}
		}else{
			alert("Please update your browser, because it doesn't support canvas.");
		}
	}
	// this.gameField = function(){
	// 	self.canvasPos = self.canvas.getBoundingClientRect(); // canvasPos.x & canvasPos.y
	// 	window.innerWidth window.innerHeight // window size
	// }
	this.gameFieldCheckObj = function(Obj){ // obj isn't out of game field
		//self.gameField(); // get field size
		if(Obj.posX > 0 && (Obj.posX + Obj.sizePx) < window.innerWidth && 
			Obj.posY > 0 && (Obj.posY + Obj.sizePx) < window.innerHeight){
			return true;
		}
		return false;
	}
	this.showObject = function(Obj){ // obj as parameter
		self.ctx.beginPath();
		self.ctx.rect(Obj.posX, Obj.posY, Obj.sizePx, Obj.sizePx); // obj.posX ...
		self.ctx.fillStyle = Obj.color; // 'rgba(0, 0, 200, 0.5)'
		self.ctx.fill();
		self.ctx.closePath();
	}
	this.showImg = function(id, x, y){ // "player", 50, 10
		var img = document.getElementById(id);
		self.ctx.drawImage(img, x, y);
	}
	this.showText = function(string, color, x, y){
		self.ctx.font = "20px Vernada";
		self.ctx.fillStyle = color;
		self.ctx.fillText(string, x, y);
	}
	this.clearWindow = function(){
		self.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight); // (0, 0, ctx.width, ctx.height)
		// move to appropriate place
		// var img = document.getElementById("player");
		// self.ctx.drawImage(img, 50, 10);
		// var img1 = document.getElementById("enemy");
		// self.ctx.drawImage(img1, 80, 10);
		// self.ctx.font = "20px Vernada";
		// self.ctx.fillStyle = "black";
		// self.ctx.fillText("Health", 200, 30);
	}
	this.unsupportedResolution = function(){
		alert("Sorry, we don't support your device resolution " +
			"(supported resolution is in range WH: 320 - 4096 px");
	}
}

var drawObj1 = new drawObj; // move to main controler
drawObj1.init();










