var labyrinth = new Labyrinth();

// Function to initialize the game when the window loads
window.onload = function() {
    labyrinth.printDisplay('map'); // Draw the labyrinth on the screen
    labyrinth.printConsole(); // Optional: Print the labyrinth to the console for debugging
    document.addEventListener('keydown', handleKeyPress); // Add event listener for key presses
};

// Function to handle key presses for moving the character
function handleKeyPress(event) {
    switch (event.key) {
        case 'ArrowUp':
            labyrinth.moveCharacter('up');
            break;
        case 'ArrowDown':
            labyrinth.moveCharacter('down');
            break;
        case 'ArrowLeft':
            labyrinth.moveCharacter('left');
            break;
        case 'ArrowRight':
            labyrinth.moveCharacter('right');
            break;
        default:
            break; // Ignore other keys
    }
}
