/*
 * EXAMPLE 3: Mouse Following
 * The jellyfish follows your mouse cursor!
 *
 * This shows how to:
 * - Track mouse movement
 * - Make smooth following movement
 * - Add floating animation with timers
 */

// Create the jellyfish body (dome shape using circle)
var jellyBody = new Circle(50);
jellyBody.setPosition(200, 200);
jellyBody.setColor("pink");
add(jellyBody);

// Create jellyfish tentacles (simple rectangles)
var tentacle1 = new Rectangle(8, 60);
tentacle1.setPosition(170, 230);
tentacle1.setColor("lightpink");
add(tentacle1);

var tentacle2 = new Rectangle(8, 70);
tentacle2.setPosition(195, 230);
tentacle2.setColor("lightpink");
add(tentacle2);

var tentacle3 = new Rectangle(8, 60);
tentacle3.setPosition(220, 230);
tentacle3.setColor("lightpink");
add(tentacle3);

// Store the mouse position
var mouseX = 200;
var mouseY = 200;

// This function runs when the mouse moves
function onMouseMove(e) {
    // Save where the mouse is
    mouseX = e.getX();
    mouseY = e.getY();
}

// This function makes the jellyfish follow smoothly
function moveJellyfish() {
    // Get current jellyfish position
    var currentX = jellyBody.getX();
    var currentY = jellyBody.getY();

    // Calculate how far to move (move 10% of the distance each time)
    // This creates a smooth "easing" effect
    var moveX = (mouseX - currentX) * 0.1;
    var moveY = (mouseY - currentY) * 0.1;

    // Move all the jellyfish parts together
    jellyBody.move(moveX, moveY);
    tentacle1.move(moveX, moveY);
    tentacle2.move(moveX, moveY);
    tentacle3.move(moveX, moveY);
}

// Tell CodeHS to track mouse movement
mouseMoveMethod(onMouseMove);

// Run the movement function every 50 milliseconds (20 times per second)
// setTimer(function, milliseconds)
setTimer(moveJellyfish, 50);
