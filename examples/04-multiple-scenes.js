/*
 * EXAMPLE 4: Multiple Scenes/Levels
 * Click the button to go to the next scene!
 *
 * This shows how to:
 * - Create different scenes/levels
 * - Switch between scenes
 * - Use functions to organize code
 */

// Track which scene we're on
var currentScene = 1;

// Start the game by showing scene 1
showScene1();

// ============ SCENE 1: Title Screen ============
function showScene1() {
    // Clear everything from the screen
    removeAll();
    currentScene = 1;

    // Add ocean background color (using a big rectangle)
    var background = new Rectangle(getWidth(), getHeight());
    background.setPosition(0, 0);
    background.setColor("darkblue");
    add(background);

    // Title text
    var title = new Text("Ocean Adventure", "40px Arial");
    title.setPosition(70, 150);
    title.setColor("white");
    add(title);

    // Subtitle
    var subtitle = new Text("Click anywhere to start!", "20px Arial");
    subtitle.setPosition(120, 200);
    subtitle.setColor("lightblue");
    add(subtitle);

    // Decorative fish
    var fish = new Circle(30);
    fish.setPosition(200, 300);
    fish.setColor("orange");
    add(fish);
}

// ============ SCENE 2: The Game ============
function showScene2() {
    // Clear everything from the screen
    removeAll();
    currentScene = 2;

    // Different background for level
    var background = new Rectangle(getWidth(), getHeight());
    background.setPosition(0, 0);
    background.setColor("blue");
    add(background);

    // Level text
    var levelText = new Text("Level 1: Coral Reef", "30px Arial");
    levelText.setPosition(100, 50);
    levelText.setColor("white");
    add(levelText);

    // Add some coral (rectangles)
    var coral1 = new Rectangle(20, 80);
    coral1.setPosition(50, 320);
    coral1.setColor("coral");
    add(coral1);

    var coral2 = new Rectangle(25, 100);
    coral2.setPosition(150, 300);
    coral2.setColor("pink");
    add(coral2);

    var coral3 = new Rectangle(20, 70);
    coral3.setPosition(300, 330);
    coral3.setColor("coral");
    add(coral3);

    // Player fish
    var player = new Circle(25);
    player.setPosition(200, 200);
    player.setColor("yellow");
    add(player);

    // Instructions
    var instructions = new Text("Click to go to next level", "16px Arial");
    instructions.setPosition(120, 390);
    instructions.setColor("white");
    add(instructions);
}

// ============ SCENE 3: Level 2 ============
function showScene3() {
    // Clear everything
    removeAll();
    currentScene = 3;

    // Deeper water = darker blue
    var background = new Rectangle(getWidth(), getHeight());
    background.setPosition(0, 0);
    background.setColor("navy");
    add(background);

    // Level text
    var levelText = new Text("Level 2: Deep Sea", "30px Arial");
    levelText.setPosition(110, 50);
    levelText.setColor("white");
    add(levelText);

    // Add some bubbles
    for (var i = 0; i < 5; i++) {
        var bubble = new Circle(Randomizer.nextInt(5, 15));
        bubble.setPosition(Randomizer.nextInt(50, 350), Randomizer.nextInt(100, 350));
        bubble.setColor("lightblue");
        add(bubble);
    }

    // Treasure chest!
    var chest = new Rectangle(60, 40);
    chest.setPosition(170, 300);
    chest.setColor("brown");
    add(chest);

    var chestTop = new Rectangle(70, 15);
    chestTop.setPosition(165, 285);
    chestTop.setColor("saddlebrown");
    add(chestTop);

    // End message
    var endText = new Text("You found the treasure!", "20px Arial");
    endText.setPosition(100, 200);
    endText.setColor("gold");
    add(endText);

    var clickText = new Text("Click to play again", "16px Arial");
    clickText.setPosition(130, 390);
    clickText.setColor("white");
    add(clickText);
}

// ============ Handle Mouse Clicks ============
function onMouseClick(e) {
    // Go to the next scene based on current scene
    if (currentScene == 1) {
        showScene2();
    } else if (currentScene == 2) {
        showScene3();
    } else if (currentScene == 3) {
        showScene1();  // Loop back to start
    }
}

mouseClickMethod(onMouseClick);
