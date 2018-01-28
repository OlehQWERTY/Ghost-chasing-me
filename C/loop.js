// Main loop

var View = drawObj1; // change it to normal approach


var ciclesCounter = 0;
var renderCiclesCounter = 0;

let last = performance.now(),
    fps = 30,
    slomo = 10, // slow motion multiplier
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
        
        // if(!keyEventControl.moveLim(playerObj)) console.log("Out of game field");
        keyEventControl.moveEnemy(enemyObj);
        //console.log("playerX: " + playerObj.posX, " playerY: " + playerObj.posY);
        //console.log("Once per second " + ciclesCounter++);
  }
    last = now;

    View.clearWindow();
    View.showObject(playerObj); // change it to normal approach
    View.showObject(enemyObj); // change it to normal approach


    keyEventControl.moveLim(playerObj);
    keyEventControl.moveLim(enemyObj);

    //console.log("Render " + renderCiclesCounter++); // fast loop
    //console.log(dt / slomo * fps);
    //render(dt / slomo * fps);


    requestAnimationFrame(frame);
}

requestAnimationFrame(frame);
