/*
    Name: Nyx Homer
	File: main.js
	Date: 16/07/2025
	Assignment 4 - Part 3
*/

// setup canvas

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// function to generate random number

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function to generate random color

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

// Create ball class
class Ball {
  constructor(x, y, velX, velY, color, size) {
    // Set objects values to the ones passed through the constructor
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
  }

  // Draw method
  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  }

  // Update method
  update() {
    // If the ball is at the far right of the screen, reverse
    if (this.x + this.size >= width) {
      this.velX = -this.velX;
    }

    // If the ball is at the far left of the screen, reverse
    if (this.x - this.size <= 0) {
      this.velX = -this.velX;
    }

    // If the ball is at the top of the screen, reverse
    if (this.y + this.size >= height) {
      this.velY = -this.velY;
    }

    // If the ball is at the bottom of the screen, reverse
    if (this.y - this.size <= 0) {
      this.velY = -this.velY;
    }

    // Move ball
    this.x += this.velX;
    this.y += this.velY;
  }

  // Collission detection
  collisionDetect() {
    for (const ball of balls) {
      if (this !== ball) {
        const dx = this.x - ball.x;
        const dy = this.y - ball.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.size + ball.size) {
          ball.color = this.color = randomRGB();
        }
      }
    }
  }
}

// constant array containing all balls
const balls = [];

// Create 25 balls
while (balls.length < 25) {
  const size = random(10, 20);
  const ball = new Ball(
    // ball position always drawn at least one ball width
    // away from the edge of the canvas, to avoid drawing errors
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-7, 7),
    random(-7, 7),
    randomRGB(),
    size,
  );

  balls.push(ball);
}

// Loop function
function loop() {
  ctx.fillStyle = "rgb(0 0 0 / 25%)";
  ctx.fillRect(0, 0, width, height);

  // For all balls, draw, update, check for collissions
  for (const ball of balls) {
    ball.draw();
    ball.update();
    ball.collisionDetect();
  }

  requestAnimationFrame(loop);
}

// Call loop function
loop();