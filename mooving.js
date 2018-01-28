function distBetweenTwoPoints(x, y) { // x y and playerX playerY
	var dist = Math.sqrt(Math.abs(Math.pow((playerX - x), 2) + Math.pow((playerY - y), 2)));
	console.log(dist);
	console.log("kokok");
	return dist;
}
