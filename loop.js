// Main loop

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

//     gameOver();
//     // x1+=5; 
//     // y1+=5;


//     var arr = [];
//     arr.push(distBetweenTwoPoints(x1 + 5, y1));
//     arr.push(distBetweenTwoPoints(x1 - 5, y1));
//     arr.push(distBetweenTwoPoints(x1, y1 + 5));
//     arr.push(distBetweenTwoPoints(x1, y1 - 5));

//     var min = Math.min.apply(null, arr);
// 	if(arr[0] === min) {
// 		x1 += 5;
// 		console.log("[0]");
// 	} else if(arr[1] === min) {
// 		x1 -= 5;
// 		console.log("[1]");
// 	} else if(arr[2] === min) {
// 		y1 += 5;
// 		console.log("[2]");
// 	} else if(arr[3] === min) {
// 		y1 -= 5;
// 		console.log("[3]");
// 	}
	
// //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 	if(playerX > (480 - playerSizeX)) { // 40 - player size  // if(playerX > (ctx.width - playerSizeX))
// 		playerX = 480 - playerSizeX;
// 	} else if(x1 < 0) {
// 		x1 = 0;
// 	}

// 	if(playerY > (320 - playerSizeY)) { // 40 - player size // ctx.height - playerSizeY
// 		playerY = 320 - playerSizeY;
// 	} else if(y1 < 0) {
// 		y1 = 0;
// 	}
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    //console.log("koko");
  }
  last = now;

  //render(dt / slomo * fps);
  // 60 times per second
  ctx.clearRect(0, 0, 480, 320); // (0, 0, ctx.width, ctx.height)
  //drawObj1.clearWindow();
  showPlayer(); // make it more smooth (delta moove / 60 times per second -> show)

  //drawObj1.showPlayer();

  //createPlayer(playerX, playerY);
  //enemy(x1, y1);

  requestAnimationFrame(frame);
}

requestAnimationFrame(frame);
