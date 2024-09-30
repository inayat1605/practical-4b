const colorsArray = [
    'rgb(255, 87, 51)', 'rgb(255, 99, 71)', 'rgb(255, 69, 0)', 'rgb(255, 127, 80)', 'rgb(255, 140, 0)', 
    'rgb(255, 165, 0)', 'rgb(255, 215, 0)', 'rgb(255, 255, 0)', 'rgb(173, 255, 47)', 'rgb(127, 255, 0)', 
    'rgb(124, 252, 0)', 'rgb(0, 255, 0)', 'rgb(50, 205, 50)', 'rgb(152, 251, 152)', 'rgb(0, 250, 154)', 
    'rgb(0, 255, 255)', 'rgb(64, 224, 208)', 'rgb(72, 209, 204)', 'rgb(0, 191, 255)', 'rgb(30, 144, 255)', 
    'rgb(65, 105, 225)', 'rgb(0, 0, 255)', 'rgb(0, 0, 205)', 'rgb(0, 0, 139)', 'rgb(138, 43, 226)', 
    'rgb(147, 112, 219)', 'rgb(186, 85, 211)', 'rgb(128, 0, 128)', 'rgb(255, 0, 255)', 'rgb(221, 160, 221)', 
    'rgb(255, 105, 180)', 'rgb(255, 20, 147)', 'rgb(199, 21, 133)', 'rgb(178, 34, 34)', 'rgb(220, 20, 60)', 
    'rgb(255, 69, 0)', 'rgb(255, 99, 71)', 'rgb(255, 127, 80)', 'rgb(255, 140, 0)', 'rgb(255, 165, 0)', 
    'rgb(255, 215, 0)', 'rgb(255, 255, 0)', 'rgb(173, 255, 47)', 'rgb(127, 255, 0)', 'rgb(124, 252, 0)', 
    'rgb(0, 255, 0)', 'rgb(50, 205, 50)', 'rgb(152, 251, 152)', 'rgb(0, 250, 154)', 'rgb(0, 255, 255)', 
    'rgb(64, 224, 208)', 'rgb(72, 209, 204)', 'rgb(0, 191, 255)', 'rgb(30, 144, 255)', 'rgb(65, 105, 225)', 
    'rgb(0, 0, 255)', 'rgb(0, 0, 205)', 'rgb(0, 0, 139)', 'rgb(138, 43, 226)', 'rgb(147, 112, 219)', 
    'rgb(186, 85, 211)', 'rgb(128, 0, 128)', 'rgb(255, 0, 255)', 'rgb(221, 160, 221)', 'rgb(255, 105, 180)', 
    'rgb(255, 20, 147)', 'rgb(199, 21, 133)', 'rgb(178, 34, 34)', 'rgb(220, 20, 60)', 'rgb(255, 69, 0)', 
    'rgb(255, 99, 71)', 'rgb(255, 127, 80)', 'rgb(255, 140, 0)', 'rgb(255, 165, 0)', 'rgb(255, 215, 0)', 
    'rgb(255, 255, 0)', 'rgb(173, 255, 47)', 'rgb(127, 255, 0)', 'rgb(124, 252, 0)', 'rgb(0, 255, 0)', 
    'rgb(50, 205, 50)', 'rgb(152, 251, 152)', 'rgb(0, 250, 154)', 'rgb(0, 255, 255)', 'rgb(64, 224, 208)', 
    'rgb(72, 209, 204)', 'rgb(0, 191, 255)', 'rgb(30, 144, 255)', 'rgb(65, 105, 225)', 'rgb(0, 0, 255)', 
    'rgb(0, 0, 205)', 'rgb(0, 0, 139)', 'rgb(138, 43, 226)', 'rgb(147, 112, 219)', 'rgb(186, 85, 211)', 
    'rgb(128, 0, 128)', 'rgb(255, 0, 255)', 'rgb(221, 160, 221)', 'rgb(255, 105, 180)', 'rgb(255, 20, 147)', 
    'rgb(199, 21, 133)', 'rgb(178, 34, 34)', 'rgb(220, 20, 60)'
];

// Function to display the color palette
function displayColorPalette() {
    const colorsDiv = document.getElementById('colors');
    
    // Loop through each color and create a tile
    colorsArray.forEach(color => {
        const colorTile = document.createElement('div');
        colorTile.classList.add('color-tile');
        colorTile.style.backgroundColor = color;
        
        // Add click event to handle color selection
        colorTile.addEventListener('click', () => {
            selectColor(color);
        });
        
        // Append each color tile to the colors div
        colorsDiv.appendChild(colorTile);
    });
}

// Function to handle color selection
function selectColor(color) {
    const selectedDiv = document.getElementById('selected');
    
    // Change the background color of the selected div
    selectedDiv.style.backgroundColor = color;
    
    // Display the color code inside the selected div
    selectedDiv.innerText = color;
}

// Call the function to display the color palette when the page loads
window.onload = function() {
    displayColorPalette();
};