/*
 * EXAMPLE 5: Complete Mini-Game
 * Collect the pearls, avoid the sharks!
 *
 * This combines everything:
 * - Keyboard movement
 * - Collision detection
 * - Score tracking
 * - Multiple objects
 * - Game over state
 */

// ============ GAME SETTINGS ============
var PLAYER_SPEED = 8;
var SHARK_SPEED = 2;
var PEARL_POINTS = 10;

// ============ GAME VARIABLES ============
var score = 0;
var gameOver = false;
var player;
var shark;
var pearl;
var scoreText;

// ============ START THE GAME ============
setupGame();

function setupGame() {
    // Reset variables
    score = 0;
    gameOver = false;
    removeAll();

    // Ocean background
    var background = new Rectangle(getWidth(), getHeight());
    background.setPosition(0, 0);
    background.setColor("#1a5276");  // Nice ocean blue
    add(background);

    // Sandy bottom
    var sand = new Rectangle(getWidth(), 50);
    sand.setPosition(0, getHeight() - 50);
    sand.setColor("#d4ac6e");
    add(sand);

    // Score display at the top
    scoreText = new Text("Pearls: 0", "24px Arial");
    scoreText.setPosition(20, 35);
    scoreText.setColor("white");
    add(scoreText);

    // Create the player (a cute fish)
    player = new Circle(20);
    player.setPosition(200, 200);
    player.setColor("#f39c12");  // Orange fish
    add(player);

    // Player's eye
    var eye = new Circle(5);
    eye.setPosition(210, 195);
    eye.setColor("white");
    add(eye);

    // Create the shark (enemy)
    shark = new Circle(35);
    shark.setPosition(50, 100);
    shark.setColor("#5d6d7e");  // Gray shark
    add(shark);

    // Create first pearl (collectible)
    pearl = new Circle(10);
    pearl.setColor("#f8f9f9");  // White/pearl color
    spawnPearl();
    add(pearl);

    // Instructions
    var instructions = new Text("Arrow keys to move - Collect pearls, avoid shark!", "14px Arial");
    instructions.setPosition(50, getHeight() - 15);
    instructions.setColor("white");
    add(instructions);

    // Start the game loop
    setTimer(gameLoop, 50);
}

// ============ SPAWN PEARL IN RANDOM LOCATION ============
function spawnPearl() {
    var newX = Randomizer.nextInt(50, getWidth() - 50);
    var newY = Randomizer.nextInt(80, getHeight() - 100);
    pearl.setPosition(newX, newY);
}

// ============ GAME LOOP (runs 20 times per second) ============
function gameLoop() {
    if (gameOver) {
        return;  // Stop if game is over
    }

    // Move shark toward player
    moveShark();

    // Check if player touched pearl
    checkPearlCollision();

    // Check if shark caught player
    checkSharkCollision();
}

// ============ MOVE SHARK TOWARD PLAYER ============
function moveShark() {
    // Calculate direction to player
    var dx = player.getX() - shark.getX();
    var dy = player.getY() - shark.getY();

    // Normalize and apply speed (basic AI)
    var distance = Math.sqrt(dx * dx + dy * dy);
    if (distance > 0) {
        shark.move((dx / distance) * SHARK_SPEED, (dy / distance) * SHARK_SPEED);
    }
}

// ============ CHECK IF PLAYER GOT PEARL ============
function checkPearlCollision() {
    var dx = player.getX() - pearl.getX();
    var dy = player.getY() - pearl.getY();
    var distance = Math.sqrt(dx * dx + dy * dy);

    // If close enough, collect the pearl
    if (distance < 30) {
        score = score + PEARL_POINTS;
        scoreText.setText("Pearls: " + score);
        spawnPearl();  // New pearl appears
    }
}

// ============ CHECK IF SHARK CAUGHT PLAYER ============
function checkSharkCollision() {
    var dx = player.getX() - shark.getX();
    var dy = player.getY() - shark.getY();
    var distance = Math.sqrt(dx * dx + dy * dy);

    // If shark touches player, game over!
    if (distance < 50) {
        endGame();
    }
}

// ============ GAME OVER ============
function endGame() {
    gameOver = true;

    // Dark overlay
    var overlay = new Rectangle(getWidth(), getHeight());
    overlay.setPosition(0, 0);
    overlay.setColor("black");
    overlay.setOpacity(0.7);
    add(overlay);

    // Game over text
    var gameOverText = new Text("GAME OVER!", "40px Arial");
    gameOverText.setPosition(100, 180);
    gameOverText.setColor("red");
    add(gameOverText);

    // Final score
    var finalScore = new Text("You collected " + score + " pearls!", "24px Arial");
    finalScore.setPosition(90, 230);
    finalScore.setColor("white");
    add(finalScore);

    // Restart instruction
    var restartText = new Text("Click anywhere to play again", "18px Arial");
    restartText.setPosition(100, 280);
    restartText.setColor("lightblue");
    add(restartText);
}

// ============ KEYBOARD CONTROLS ============
function onKeyDown(e) {
    if (gameOver) {
        return;
    }

    // Move player based on arrow key
    if (e.keyCode == Keyboard.LEFT) {
        player.move(-PLAYER_SPEED, 0);
    }
    if (e.keyCode == Keyboard.RIGHT) {
        player.move(PLAYER_SPEED, 0);
    }
    if (e.keyCode == Keyboard.UP) {
        player.move(0, -PLAYER_SPEED);
    }
    if (e.keyCode == Keyboard.DOWN) {
        player.move(0, PLAYER_SPEED);
    }

    // Keep player on screen
    var x = player.getX();
    var y = player.getY();
    if (x < 20) player.setPosition(20, y);
    if (x > getWidth() - 20) player.setPosition(getWidth() - 20, y);
    if (y < 60) player.setPosition(x, 60);
    if (y > getHeight() - 70) player.setPosition(x, getHeight() - 70);
}

// ============ RESTART ON CLICK ============
function onMouseClick(e) {
    if (gameOver) {
        setupGame();
    }
}

// Connect the event handlers
keyDownMethod(onKeyDown);
mouseClickMethod(onMouseClick);
