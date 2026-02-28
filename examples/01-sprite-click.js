/*
 * EXAMPLE 1: Sprite Click
 * Click on the fish to earn points!
 *
 * This shows how to:
 * - Create sprites (shapes)
 * - Detect mouse clicks
 * - Update a score
 */

// Score variable to track points
var score = 0;

// Create the score display text
// Text(message, font-size)
var scoreText = new Text("Score: 0", "30px Arial");
scoreText.setPosition(20, 40);
scoreText.setColor("white");
add(scoreText);

// Create a fish using a circle (you can use images in CodeHS too!)
// Circle(radius)
var fish = new Circle(40);
fish.setPosition(200, 200);
fish.setColor("orange");
add(fish);

// This function runs when you click the mouse
function onMouseClick(e) {
    // Check if the click was on the fish
    // e.getX() and e.getY() give us where the click happened
    var clickedObject = getElementAt(e.getX(), e.getY());

    if (clickedObject == fish) {
        // Add a point!
        score = score + 1;
        scoreText.setText("Score: " + score);

        // Move the fish to a random spot
        var newX = Randomizer.nextInt(50, 350);
        var newY = Randomizer.nextInt(50, 350);
        fish.setPosition(newX, newY);
    }
}

// Tell CodeHS to call our function when mouse is clicked
mouseClickMethod(onMouseClick);
