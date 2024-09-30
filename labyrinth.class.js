var CELL_SIZE = 40;

function Labyrinth() {
    this.map = [
        [0, 0, 1, 1, 1, 0],
        [1, 0, 0, 0, 1, 0],
        [1, 0, 1, 0, 0, 0],
        [1, 0, 1, 1, 1, 0],
        [1, 0, 0, 0, 1, 0]
    ];
    this.startX = 0; // Starting row
    this.startY = 0; // Starting column
    this.endX = 4;   // Ending row
    this.endY = 5;   // Ending column
}

// Method to print the labyrinth in the console
Labyrinth.prototype.printConsole = function() {
    for (var row of this.map) {
        console.log(row.map(cell => (cell === 1 ? '*' : ' ')).join(''));
    }
};

// Method to draw the labyrinth on the screen inside the specified div
Labyrinth.prototype.printDisplay = function(id) {
    var parentDiv = document.getElementById(id);
    parentDiv.style.position = 'relative'; // Enable absolute positioning for children
    parentDiv.style.width = (this.map[0].length * CELL_SIZE) + 'px';
    parentDiv.style.height = (this.map.length * CELL_SIZE) + 'px';
    parentDiv.style.border = '2px solid black';

    // Clear existing content
    parentDiv.innerHTML = '';

    // Draw the labyrinth
    for (var row = 0; row < this.map.length; row++) {
        for (var col = 0; col < this.map[row].length; col++) {
            var cell = document.createElement('div');
            cell.style.position = 'absolute';
            cell.style.width = CELL_SIZE + 'px';
            cell.style.height = CELL_SIZE + 'px';
            cell.style.left = (col * CELL_SIZE) + 'px';
            cell.style.top = (row * CELL_SIZE) + 'px';
            cell.style.backgroundColor = this.map[row][col] === 1 ? 'grey' : 'white';
            parentDiv.appendChild(cell);
        }
    }

    // Draw the start and end positions
    this.drawCharacter(this.startX, this.startY, 'green'); // Start character
    this.drawCharacter(this.endX, this.endY, 'red'); // End character
};

// Method to draw the character in the specified position
Labyrinth.prototype.drawCharacter = function(x, y, color) {
    var character = document.createElement('div');
    character.style.position = 'absolute';
    character.style.width = CELL_SIZE + 'px';
    character.style.height = CELL_SIZE + 'px';
    character.style.left = (y * CELL_SIZE) + 'px';
    character.style.top = (x * CELL_SIZE) + 'px';
    character.style.backgroundColor = color;
    character.style.borderRadius = '50%'; // Make the character circular
    document.getElementById('map').appendChild(character);
};

// Method to move the character in the specified direction
Labyrinth.prototype.moveCharacter = function(direction) {
    var newX = this.startX;
    var newY = this.startY;

    switch (direction) {
        case 'up':
            newX--;
            break;
        case 'down':
            newX++;
            break;
        case 'left':
            newY--;
            break;
        case 'right':
            newY++;
            break;
    }

    if (this.isValidMove(newX, newY)) {
        this.startX = newX;
        this.startY = newY;
        this.updateDisplay();
        // Check for winning condition
        if (newX === this.endX && newY === this.endY) {
            alert('Congratulations! You have reached the end!');
        }
    }
};

// Method to check if a move is valid
Labyrinth.prototype.isValidMove = function(x, y) {
    return (
        x >= 0 && x < this.map.length &&
        y >= 0 && y < this.map[0].length &&
        this.map[x][y] === 0 // Must be an empty space
    );
};

// Method to refresh the display after moving
Labyrinth.prototype.updateDisplay = function() {
    this.printDisplay('map');
};


