// One-Button Game: Click the Moving Circle to Win
// This version includes detailed comments explaining each line.

// Declare variables for circle position, size, and movement speed
let x, y, r, dx, dy;

// Track if the player has won (starts as false)
let win = false;

function setup() {
  // Create a 400x400 pixel drawing canvas
  createCanvas(400, 400);

  // Set random starting position for the circle
  x = random(width);
  y = random(height);

  // Set circle radius (size)
  r = 25;

  // Set random speed in x and y directions (-3 to 3 pixels per frame)
  dx = random(-3, 3);
  dy = random(-3, 3);
}

function draw() {
  // Clear the screen with a dark gray background
  background(30);
  
  // If player has won, display the win screen
  if (win) {
    fill(0, 255, 100);          // Green text color
    textAlign(CENTER, CENTER);  // Center text horizontally and vertically
    textSize(32);               // Large font size
    text("You win!", width / 2, height / 2); // Display message in center
    noLoop();                   // Stop the draw loop (freeze the game)
    return;                     // Exit the draw function
  }
  
  // Move the circle according to its speed
  x += dx;
  y += dy;
  
  // Bounce off the left and right edges
  if (x < r || x > width - r) dx *= -1;
  // Bounce off the top and bottom edges
  if (y < r || y > height - r) dy *= -1;
  
  // Draw the moving circle
  fill(100, 200, 255);          // Light blue color
  noStroke();                   // No outline
  ellipse(x, y, r * 2);         // Draw circle at (x, y) with diameter 2r
}

function mousePressed() {
  // Check if the mouse click is inside the circle
  if (dist(mouseX, mouseY, x, y) < r) {
    win = true;  // Player wins!
  }
}
