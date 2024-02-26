// For the #WCCChallenge, theme: "arc"
// Nothing 3D here... just 2D arcs! :)

let z = 0;
let ax = 0;
let ay = 0;
let start = 0;
let sweep = 0;
let tstart, tsweep;
const num = 60;
let sf = 0;
let tsf = 255;

function setup() {
	createCanvas(900, 600);
	noStroke();
	tstart = QUARTER_PI;
	tsweep = HALF_PI;
	strokeWeight(0.5);
}

function draw() {
	background(255);
	sf = lerp(sf, tsf, 0.05);
	translate(width / 2, height / 2);
	z = lerp(z, map(mouseY, 0, height, 0.5, 5), 0.05);
	ax = lerp(ax, map(mouseX, 0, width, -3, 3), 0.05);
	ay = lerp(ay, map(mouseY, 0, height, -3, 3), 0.05);
	sweep = lerp(sweep, tsweep, 0.05);
	start = lerp(start, tstart, 0.05);
	scale(z);
	for (let i = 0; i < num; i++) {
		fill((i % 2) * 255, sf);
		stroke(0, 255 - sf);
		let r = height - i * height / (num - 1);
		push();
		translate(((num / 2) - r) * noise((i / 80) + frameCount / 200) * ax, ((num / 2) - r) * noise((i / 80) + frameCount / 200) * ay);
		rotate(TAU * noise((i / 120) + frameCount / 200));
		arc(0, 0, r, r, start, start + sweep, PIE);
		pop();
	}
}

function mousePressed() {
	tsweep = random(TAU);
	tstart = random(TAU)
}

function keyPressed() {
	tsf = 255 - tsf;
}