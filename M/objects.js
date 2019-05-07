function basicObj(){
	var self = this;

	this.init = function(sizePx, speed, color, imgName){
		self.sizePx = sizePx;		
		self.speed = speed;
		self.color = color;
		self.imgName = imgName;
	}
	this.pos = function(posX, posY){
		self.posX = posX;
		self.posY = posY;
	}
	this.move = function(moveFunc){
		moveFunc(self.posX, self.posY);
	}
	this.colision = function(func){ // func for X Y calc end of game field
		func(self.posX, self.posY);
	}
}

//game obj init
var playerObj = new basicObj;
playerObj.init(40, 10, 'transparent', 'player');  // invisible box under img
// playerObj.init(40, 10, 'rgba(0, 0, 200, 0.5)', 'player');  // colored box under img
playerObj.pos(100, 100);

var enemyObj = new basicObj;
enemyObj.init(40, 40, 'transparent', 'enemyZombie');
// enemyObj.init(40, 10, 'rgba(200, 0, 0, 0.5)', 'enemy');
enemyObj.pos(300, 300);

var enemyObj1 = new basicObj;
enemyObj1.init(40, 10, 'transparent', 'enemy');
// enemyObj1.init(40, 10, 'rgba(100, 100, 0, 0.5)', 'enemy');
enemyObj1.pos(500, 200);

// var Vasy = new PlayerObj("Pety");
// Vasy.playerInitParam(2, 125);
// console.log(Vasy.speed + Vasy.name);
