let circles = [];

class Circle {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.radius = random(15, 35);
    this.vx = random(-2.5, 2.5);
    this.vy = random(-2.5, 2.5);
    this.color = color(random(100, 255), random(100, 255), random(100, 255));
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x + this.radius > width || this.x - this.radius < 0) {
      this.vx *= -1;
    }

    if (this.y + this.radius > height || this.y - this.radius < 0) {
      this.vy *= -5;
    }
  }

  display() {
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.radius * 5);
  }
}

function setup() {
  createCanvas(600, 600);
  
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      let x = 150 + col * 150;
      let y = 150 + row * 150;
      circles.push(new Circle(x, y));
    }
  }
}

function draw() {
  background(22, 26, 29);

  for (let i = 0; i < circles.length; i++) {
    circles[i].update();
    circles[i].display();
  }
}