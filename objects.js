function basicObj(){
	var self = this;

	this.init = function(sizePx, speed, color){
		self.sizePx = sizePx;		
		self.speed = speed;
		self.color = color;
	}
	this.pos = function(posX, posY){
		self.posX = posX;
		self.posY = posY;
	}
}

var playerObj = new basicObj;
playerObj.init(40, 5, 'rgba(0, 0, 200, 0.5)');
playerObj.pos(0.5, 0.5);

var enemyObj = new basicObj;
enemyObj.init(40, 2, 'rgba(200, 0, 0, 0.5)');
enemyObj.pos(0, 0);

// var Vasy = new PlayerObj("Pety");
// Vasy.playerInitParam(2, 125);
// console.log(Vasy.speed + Vasy.name);

// function enemy(x, y) {
// 	//ctx.clearRect(0, 0, 480, 320); // (0, 0, ctx.width, ctx.height)
// 	ctx.beginPath();
// 	ctx.rect(x, y, playerSizeX, playerSizeY);
// 	ctx.fillStyle = 'rgba(200, 0, 0, 0.5)';
// 	ctx.fill();
// 	ctx.closePath();
// }

// function gameOver() {
// 	if(Math.abs(x1 - playerX) > playerSizeX || Math.abs(y1 - playerY) > playerSizeY) {
		
// 	} else {
// 		alert("Game over!");
// 		x1 = 0;
// 		y1 = 0;
// 		playerX = 200;
// 		playerY = 200;
// 	}
// }
