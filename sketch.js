let y = 0;

function setup() {
  // The size of our starting canvas: 400px width, 400px height
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  // The same as doing: background(220); or --> background(220,220,220);
  background("black");
  translate(width / 2, height / 2);
  rotate(-90);

  let sc = second();
  let mn = minute();
  let hr = hour();

  noFill();
  let secondAngeln = map(sc, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, secondAngeln);
  noFill();
  stroke("#bb0066");
  strokeWeight(6);

  let minAngeln = map(mn, 0, 60, 0, 360) + map(sc, 0, 60, 0, 6);
  arc(0, 0, 250, 250, 0, minAngeln);

  noFill();
  stroke(244, 122, 158);
  strokeWeight(4);

  push();
  stroke(220);
  strokeWeight(5);
  rotate(secondAngeln);
  line(0, 0, 145, 0);
  pop();

  push();
  stroke(220);
  strokeWeight(5);
  rotate(minAngeln);
  line(0, 0, 120, 0);
  pop();

  let hourAngeln = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 200, 200, 0, hourAngeln);
  noFill();
  stroke(237, 34, 93);
  strokeWeight(2);

  push();
  stroke(220);
  strokeWeight(4);
  rotate(hourAngeln);
  line(0, 0, 95, 0);
  pop();

  push();
  stroke("white");
  strokeWeight(6);
  point(0, 0, 40);
  pop();

  push();
  stroke("black");
  strokeWeight(2);
  point(0, 0, 40);
  pop();
}
