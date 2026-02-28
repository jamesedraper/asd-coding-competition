# ASD Elementary Coding Competition 2026

**Theme:** Secrets of the Sea: Unlock the Code
**Deadline:** March 27, 2026
**Grades:** 5th and 6th
**Platform:** [CodeHS](https://codehs.com)

---

## Requirements

Your project must have:

- [ ] Ocean-themed content
- [ ] Multiple levels or scenes
- [ ] Interactive elements (clicks, keyboard, or mouse)
- [ ] At least one comment per sprite explaining the code
- [ ] Instructions at the start telling users how to play
- [ ] Source citations for any images/sounds (as comments)
- [ ] **No AI-generated code, images, or backgrounds**
- [ ] Debugged and working!

## Theme Ideas

Pick something ocean-related that excites you:

| Category | Ideas |
|----------|-------|
| **Creatures** | Fish, sharks, jellyfish, octopus, whales, dolphins, sea turtles, crabs |
| **Places** | Coral reef, deep sea, beach, lost city of Atlantis, shipwreck |
| **Adventures** | Treasure hunt, submarine exploration, pirate journey, rescue mission |
| **Objects** | Treasure chest, magical pearls, ancient artifacts, pirate ship |
| **Characters** | Diver, mermaid, pirate, sea monster, underwater robot |

## Interactive Elements (pick at least one)

- **Sprite clicks** - Click on something to make it do something
- **Key responses** - Press arrow keys to move
- **Mouse-following** - A sprite follows your cursor

## Project Ideas

### Beginner
- **Ocean Quiz** - Click the correct sea creature to answer questions
- **Submarine Explorer** - Arrow keys to move, collect treasure

### Intermediate
- **Avoid the Jellyfish** - Control a fish, dodge enemies, collect points
- **Underwater Maze** - Navigate through a coral reef

### Advanced
- **Ocean Cleanup** - Multiple levels, collect trash, avoid sharks
- **Pirate Treasure Hunt** - Story with clues and puzzles
- **Lost City of Atlantis** - Explore and solve mysteries

---

## Planning Worksheet

**Print this before you start coding:**
- [planning-worksheet.html](planning-worksheet.html) - Open in browser → Print (recommended)
- [planning-worksheet.md](planning-worksheet.md) - Markdown version

---

## Starter Code Examples

Learn from these examples in the [`examples/`](examples/) folder:

| File | What It Teaches |
|------|-----------------|
| [00-template.js](examples/00-template.js) | **START HERE!** Complete template with all required elements |
| [01-sprite-click.js](examples/01-sprite-click.js) | Click detection, scoring, random positions |
| [02-keyboard-movement.js](examples/02-keyboard-movement.js) | Arrow key controls, staying on screen |
| [03-mouse-follow.js](examples/03-mouse-follow.js) | Mouse tracking, smooth movement, timers |
| [04-multiple-scenes.js](examples/04-multiple-scenes.js) | Switching between levels/scenes |
| [05-complete-game.js](examples/05-complete-game.js) | Full game: movement, enemies, collectibles, game over |

**How to use:** Copy code into a new CodeHS project, run it, read the comments, then make it your own!

---

## How to Write Comments & Citations

### Comments (required for every sprite)

```javascript
// This is the player fish - it moves with arrow keys
var player = new Circle(25);
player.setPosition(200, 200);
player.setColor("orange");
add(player);

// This is the score display - shows points at the top
var scoreText = new Text("Score: 0", "20px Arial");
scoreText.setPosition(20, 30);
add(scoreText);
```

### Source Citations (required for images/sounds)

```javascript
// IMAGE SOURCE: Fish sprite from OpenGameArt.org
// URL: https://opengameart.org/content/fish-sprite
// Artist: GameArtist123
// License: CC0 (Public Domain)

// SOUND SOURCE: Splash sound from Freesound.org
// URL: https://freesound.org/people/someone/sounds/12345/
```

---

## Submission Checklist

Before you submit, make sure:

- [ ] **Project name** is "YourName Coding Competition" (e.g., "Emma Smith Coding Competition")
- [ ] Game has an **ocean theme**
- [ ] Has **2+ scenes or levels**
- [ ] Has **interactive elements** (keyboard, clicks, or mouse)
- [ ] **Every sprite has a comment** explaining what it does
- [ ] **Instructions** appear when the game starts
- [ ] All **image/sound sources are cited** in comments
- [ ] Code is **your own work** (no AI-generated content)
- [ ] Program **runs without errors**
- [ ] Got the **submission form** from your Computer Teacher

---

## Resources

- [CodeHS Documentation](https://codehs.com/documentation)
- [OpenGameArt - Ocean sprites](https://opengameart.org/art-search?keys=ocean) (free, cite your source!)
- [Freesound - Ocean sounds](https://freesound.org/search/?q=ocean) (free, cite your source!)

---

## Prizes

| Place | Prize |
|-------|-------|
| **School Winner** | Crunch Labs Hack Pack: Balance Bot (1 per school) |
| **District Grand Prize** | LEGO Education Arctic & Antarctic Science Set (5 winners) |
| **All Participants** | Ocean-themed LEGO building set |

---

## Need Help?

Ask your **Computer Teacher** for:
- CodeHS account help
- The submission form link
- Technical questions

---

**Good luck! Have fun and be creative!** 🐠🦈🐙
