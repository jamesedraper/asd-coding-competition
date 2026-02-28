/*
 * EXAMPLE 2: Keyboard Movement
 * Use arrow keys to move the submarine!
 *
 * This shows how to:
 * - Move sprites with keyboard
 * - Keep sprites on screen
 * - Use constants for settings
 */

// How fast the submarine moves (change this to make it faster/slower)
var MOVE_SPEED = 10;

// Create the submarine (using a rectangle for now)
// Rectangle(width, height)
var submarine = new Rectangle(80, 40);
submarine.setPosition(160, 200);
submarine.setColor("yellow");
add(submarine);

// Add a window to the submarine
var window = new Circle(15);
window.setPosition(210, 220);
window.setColor("lightblue");
add(window);

// Instructions text
var instructions = new Text("Use arrow keys to move!", "20px Arial");
instructions.setPosition(100, 380);
instructions.setColor("white");
add(instructions);

// This function runs when a key is pressed
function onKeyDown(e) {
    // e.keyCode tells us which key was pressed
    // 37 = left, 38 = up, 39 = right, 40 = down

    if (e.keyCode == Keyboard.LEFT) {
        // Move left (subtract from x position)
        submarine.move(-MOVE_SPEED, 0);
        window.move(-MOVE_SPEED, 0);
    }
    if (e.keyCode == Keyboard.RIGHT) {
        // Move right (add to x position)
        submarine.move(MOVE_SPEED, 0);
        window.move(MOVE_SPEED, 0);
    }
    if (e.keyCode == Keyboard.UP) {
        // Move up (subtract from y - up is negative in CodeHS!)
        submarine.move(0, -MOVE_SPEED);
        window.move(0, -MOVE_SPEED);
    }
    if (e.keyCode == Keyboard.DOWN) {
        // Move down (add to y)
        submarine.move(0, MOVE_SPEED);
        window.move(0, MOVE_SPEED);
    }

    // Keep submarine on screen
    keepOnScreen();
}

// Helper function to keep submarine from going off screen
function keepOnScreen() {
    var x = submarine.getX();
    var y = submarine.getY();

    // Check left edge
    if (x < 0) {
        submarine.setPosition(0, y);
        window.setPosition(50, y + 20);
    }
    // Check right edge
    if (x > getWidth() - 80) {
        submarine.setPosition(getWidth() - 80, y);
        window.setPosition(getWidth() - 30, y + 20);
    }
    // Check top edge
    if (y < 0) {
        submarine.setPosition(x, 0);
        window.setPosition(x + 50, 20);
    }
    // Check bottom edge
    if (y > getHeight() - 40) {
        submarine.setPosition(x, getHeight() - 40);
        window.setPosition(x + 50, getHeight() - 20);
    }
}

// Tell CodeHS to call our function when a key is pressed
keyDownMethod(onKeyDown);
