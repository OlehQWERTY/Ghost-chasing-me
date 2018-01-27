var canvas = document.getElementById("myCanvas"); // shuld I write like this or just use myCanvas.*** ?
if (canvas.getContext) {
  var ctx = canvas.getContext('2d');
  // drawing code here
} else {
	alert("Trow your fucking browser to a trash!");
  // canvas-unsupported code here
}

// ctx.beginPath();
// ctx.rect(20, 50, 30, 80);
// ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
// ctx.fill();
// ctx.closePath();

// ctx.beginPath();
// ctx.arc(240, 160, 20, 0, Math.PI*2, false);
// ctx.fillStyle = "green";
// ctx.fill();
// ctx.closePath();


var canvasPos = canvas.getBoundingClientRect();
// console.log(canvasPos);
// console.log(canvasPos.x);
// console.log(canvasPos.y);

myCanvas.addEventListener("click", canvElemCollision);
document.addEventListener("keydown", playerMove); 

function getClickPosition(event) {
	var x = event.clientX;
	var y = event.clientY;
	alert("click: X = " + x + " Y = " + y);
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

	switch (key) {
		case 65:
			return 'A';
		break;
		case 87:
			return 'W';
		break;
		case 83:
			return 'S';
		break;
		case 68:
			return 'D';
		break;
	}
	return;
}

// !!!!!!!!!!!!!!!!!!!!!!!!!!
var playerSizeX = 40;
var playerSizeY = 40;

function createPlayer(x, y) {
	//ctx.clearRect(0, 0, 480, 320); // (0, 0, ctx.width, ctx.height)
	ctx.beginPath();
	ctx.rect(x, y, playerSizeX, playerSizeY);
	ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
	ctx.fill();
	ctx.closePath();
}

// don't use global namespace
var playerX = 200;
var playerY = 200;

function playerMove(event) {
	var key = keyPress(event);

	switch (key) {
		case 'A':
			playerX -= 5;
		break;
		case 'D':
			playerX += 5;
		break;
		case 'W':
			playerY -= 5;
		break;
		case 'S':
			playerY += 5;
		break;
	}

	if(playerX > (480 - playerSizeX)) { // 40 - player size  // if(playerX > (ctx.width - playerSizeX))
		playerX = 480 - playerSizeX;
	} else if(playerX < 0) {
		playerX = 0;
	}

	if(playerY > (320 - playerSizeY)) { // 40 - player size // ctx.height - playerSizeY
		playerY = 320 - playerSizeY;
	} else if(playerY < 0) {
		playerY = 0;
	}

	//console.log("PlayerX: " + playerX + " PlayerY: " + playerY);

	//createPlayer(playerX, playerY);
}

function enemy(x, y) {
	//ctx.clearRect(0, 0, 480, 320); // (0, 0, ctx.width, ctx.height)
	ctx.beginPath();
	ctx.rect(x, y, playerSizeX, playerSizeY);
	ctx.fillStyle = 'rgba(200, 0, 0, 0.5)';
	ctx.fill();
	ctx.closePath();
}


function distBetweenTwoPoints(x, y) { // x y and playerX playerY
	// var 
	var dist = Math.sqrt(Math.abs(Math.pow((playerX - x), 2) + Math.pow((playerY - y), 2)));
	console.log(dist);
	console.log("kokok");
	return dist;
}

function gameOver() {
	if(Math.abs(x1 - playerX) > playerSizeX || Math.abs(y1 - playerY) > playerSizeY) {
		
	} else {
		alert("Game over!");
		x1 = 0;
		y1 = 0;
		playerX = 200;
		playerY = 200;
	}
}


var x1 = 0, y1 = 0;

// loop !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
let last = performance.now(),
    fps = 60,
    slomo = 30, // slow motion multiplier
    step = 1 / fps,
    slowStep = slomo * step,
    dt = 0,
    now;

let frame = () => {
  now = performance.now();
  dt = dt + Math.min(1, (now - last) / 1000);
  while(dt > slowStep) {
    dt = dt - slowStep;
    //update(step);
// once per second

    gameOver();
    // x1+=5; 
    // y1+=5;


    var arr = [];
    arr.push(distBetweenTwoPoints(x1 + 5, y1));
    arr.push(distBetweenTwoPoints(x1 - 5, y1));
    arr.push(distBetweenTwoPoints(x1, y1 + 5));
    arr.push(distBetweenTwoPoints(x1, y1 - 5));

    var min = Math.min.apply(null, arr);
	if(arr[0] === min) {
		x1 += 5;
		console.log("[0]");
	} else if(arr[1] === min) {
		x1 -= 5;
		console.log("[1]");
	} else if(arr[2] === min) {
		y1 += 5;
		console.log("[2]");
	} else if(arr[3] === min) {
		y1 -= 5;
		console.log("[3]");
	}
	

    

    
    //console.log("min dist [" + arr.findIndex(Math.min.apply(null, arr)) + "] = " + Math.min.apply(null, arr));



//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	if(playerX > (480 - playerSizeX)) { // 40 - player size  // if(playerX > (ctx.width - playerSizeX))
		playerX = 480 - playerSizeX;
	} else if(x1 < 0) {
		x1 = 0;
	}

	if(playerY > (320 - playerSizeY)) { // 40 - player size // ctx.height - playerSizeY
		playerY = 320 - playerSizeY;
	} else if(y1 < 0) {
		y1 = 0;
	}
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    //console.log("koko");
  }
  last = now;

  //render(dt / slomo * fps);
  // 60 times per second
  ctx.clearRect(0, 0, 480, 320); // (0, 0, ctx.width, ctx.height)

  createPlayer(playerX, playerY);
  enemy(x1, y1);

  requestAnimationFrame(frame);
}

requestAnimationFrame(frame);


//console.log(performance.now());

// function createEnemy(id, x, y) {
// 	var id;
// 	var x;
// 	var z;
// }