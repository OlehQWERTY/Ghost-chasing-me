function basicObj(){  // movable obj
	var self = this;

	this.init = function(sizePx, speed, color, imgName){
		self.sizePx = sizePx;		
		self.speed = speed;
		self.color = color;
		self.imgName = imgName;
	}
	this.pos = function(posX, posY){  // ?
		self.posX = posX;
		self.posY = posY;
	}
	this.move = function(moveFunc){  // ?
		moveFunc(self.posX, self.posY);
	}
	this.colision = function(func){ // func for X Y calc end of game field
		func(self.posX, self.posY);
	}
}

function obsticleObj(){
	var self = this;

	this.init = function(sizePx, color, imgName, passableObj, reduseSpeed){
		self.sizePx = sizePx;		
		self.color = color;
		self.imgName = imgName;
		self.passableObj = passableObj;
		self.reduseSpeed = reduseSpeed;
		console.log('Here I am!')
	}
	this.pos = function(posX, posY){
		self.posX = posX;
		self.posY = posY;
	}
	this.colision = function(func){ // func for X Y calc end of game field
		func(self.posX, self.posY);
	}
	this.randomGen = function(func){
		func(self.posX = posX, self.posY = posY)
	}
}

//game obj init
var playerObj = new basicObj;
playerObj.init(40, 5, 'transparent', 'player');  // invisible box under img
// playerObj.init(40, 10, 'rgba(0, 0, 200, 0.5)', 'player');  // colored box under img
playerObj.pos(100, 100);

var enemyObj = new basicObj;
enemyObj.init(40, 10, 'transparent', 'enemyZombie');
// enemyObj.init(40, 10, 'rgba(200, 0, 0, 0.5)', 'enemy');
enemyObj.pos(300, 300);

var enemyObj1 = new basicObj;
enemyObj1.init(40, 5, 'transparent', 'enemy');
// enemyObj1.init(40, 10, 'rgba(100, 100, 0, 0.5)', 'enemy');
enemyObj1.pos(500, 200);

// var Vasy = new PlayerObj("Pety");
// Vasy.playerInitParam(2, 125);
// console.log(Vasy.speed + Vasy.name);


var obsticleObj = new obsticleObj;
obsticleObj.init(40, 'red', 'obsticle', false, 0);
// obsticle.pos(300, 300);

var obsticles = [];
for(i=0;i<=3;i++){
	obsticles.push(Object.assign({}, obsticleObj));  // push copy of obj
	// obsticles[i].init(40, 'transparent', 'obsticle', false, 0);
	// obsticles[i].pos(100 * (i + 1), 100);
	obsticles[i].randomGen = function(posX, posY){
		self.posX = getRandomInt(400);
		self.posY = getRandomInt(400);
	};

	// obsticles[i].pos(getRandomInt(400), getRandomInt(400));
	obsticles[i].randomGen(400, 500)

	console.log(i);
}


// move to another place
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
