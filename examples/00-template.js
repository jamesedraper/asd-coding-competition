/*
 * PROJECT TEMPLATE
 * Use this as a starting point for your game!
 *
 * Replace "YourName" with your actual name in your CodeHS project title.
 * Project Title: "YourName Coding Competition"
 */

// ========================================
// IMAGE/SOUND SOURCES (cite everything you use!)
// ========================================
// IMAGE: [describe image] from [website]
// URL: [paste the URL here]
// Artist: [artist name if known]
//
// SOUND: [describe sound] from [website]
// URL: [paste the URL here]
// ========================================

// ========================================
// GAME SETTINGS (change these to customize your game)
// ========================================
var PLAYER_SPEED = 5;

// ========================================
// START THE GAME
// ========================================
showInstructions();

// ========================================
// SCENE 1: INSTRUCTIONS
// This screen tells players how to play your game
// ========================================
function showInstructions() {
    removeAll();

    // Background - dark blue ocean color
    var background = new Rectangle(getWidth(), getHeight());
    background.setPosition(0, 0);
    background.setColor("#1a5276");
    add(background);

    // Title text - shows the name of your game
    var title = new Text("My Ocean Game", "36px Arial");
    title.setPosition(100, 100);
    title.setColor("white");
    add(title);

    // Instructions text - tells players how to play
    var instructions1 = new Text("How to Play:", "24px Arial");
    instructions1.setPosition(100, 180);
    instructions1.setColor("yellow");
    add(instructions1);

    var instructions2 = new Text("- Use arrow keys to move", "18px Arial");
    instructions2.setPosition(100, 220);
    instructions2.setColor("white");
    add(instructions2);

    var instructions3 = new Text("- Collect the treasures", "18px Arial");
    instructions3.setPosition(100, 250);
    instructions3.setColor("white");
    add(instructions3);

    var instructions4 = new Text("- Avoid the enemies", "18px Arial");
    instructions4.setPosition(100, 280);
    instructions4.setColor("white");
    add(instructions4);

    // Start prompt - tells players how to begin
    var startText = new Text("Click anywhere to start!", "20px Arial");
    startText.setPosition(100, 350);
    startText.setColor("lightblue");
    add(startText);
}

// ========================================
// SCENE 2: THE GAME
// This is where the main gameplay happens
// ========================================
function showGame() {
    removeAll();

    // Background - lighter blue for the game level
    var background = new Rectangle(getWidth(), getHeight());
    background.setPosition(0, 0);
    background.setColor("#2874a6");
    add(background);

    // Player sprite - this is the character you control
    var player = new Circle(25);
    player.setPosition(200, 300);
    player.setColor("orange");
    add(player);

    // Collectible sprite - players try to get these
    var treasure = new Circle(15);
    treasure.setPosition(300, 150);
    treasure.setColor("gold");
    add(treasure);

    // Enemy sprite - players try to avoid these
    var enemy = new Circle(30);
    enemy.setPosition(100, 100);
    enemy.setColor("gray");
    add(enemy);

    // Score display - shows points at the top
    var scoreText = new Text("Score: 0", "20px Arial");
    scoreText.setPosition(20, 30);
    scoreText.setColor("white");
    add(scoreText);

    // Level display - shows current level
    var levelText = new Text("Level 1", "20px Arial");
    levelText.setPosition(320, 30);
    levelText.setColor("white");
    add(levelText);
}

// ========================================
// SCENE 3: GAME OVER
// Shows when the game ends
// ========================================
function showGameOver() {
    removeAll();

    // Background - darker for game over
    var background = new Rectangle(getWidth(), getHeight());
    background.setPosition(0, 0);
    background.setColor("#1a252f");
    add(background);

    // Game over text - big message
    var gameOverText = new Text("Game Over!", "40px Arial");
    gameOverText.setPosition(120, 180);
    gameOverText.setColor("red");
    add(gameOverText);

    // Final score - shows how well they did
    var finalScore = new Text("Final Score: 0", "24px Arial");
    finalScore.setPosition(140, 240);
    finalScore.setColor("white");
    add(finalScore);

    // Play again prompt
    var playAgain = new Text("Click to play again", "18px Arial");
    playAgain.setPosition(140, 300);
    playAgain.setColor("lightblue");
    add(playAgain);
}

// ========================================
// HANDLE MOUSE CLICKS
// This decides what happens when you click
// ========================================
var currentScene = "instructions";

function onMouseClick(e) {
    if (currentScene == "instructions") {
        currentScene = "game";
        showGame();
    } else if (currentScene == "gameover") {
        currentScene = "instructions";
        showInstructions();
    }
}

mouseClickMethod(onMouseClick);

// ========================================
// HANDLE KEYBOARD INPUT
// This decides what happens when you press keys
// ========================================
function onKeyDown(e) {
    // Only work during the game
    if (currentScene != "game") {
        return;
    }

    // Add your keyboard controls here!
    // Example:
    // if (e.keyCode == Keyboard.LEFT) {
    //     player.move(-PLAYER_SPEED, 0);
    // }
}

keyDownMethod(onKeyDown);
