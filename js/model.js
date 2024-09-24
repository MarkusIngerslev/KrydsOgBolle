export { init, writeToCell, readFromCell, dump, checkWinner, isDraw };

let grid = [];

function init(rows, cols) {
    // Initialiserer griddet som et array af arrays (2D array)
    grid = Array.from({ length: rows }, () => Array(cols).fill(0));
    console.log("Model initialized");
}

function writeToCell(row, col, value) {
    if (isValiedCell(row, col)) {
        grid[row][col] = value;
        console.log(`Written value "$${value}" to cell - Row: ${row}, Col: ${col}`);
    } else {
        console.log("Invalid cell coordinates");
    }
}

function readFromCell(row, col) {
    if (isValiedCell(row, col)) {
        return grid[row][col];
    } else {
        console.log("Invalid cell coordinates");
        return null;
    }
}

function dump() {
    console.log("Current grid state: ");
    console.table(grid); // Udskriver gridet som en tabel i konsollen
}

function isValiedCell(row, col) {
    return row >= 0 && row < grid.length && col >= 0 && col < grid[0].length;
}

// Funktion til at tjekke om der er en vinder
function checkWinner(player) {
    const rows = grid.length;
    const cols = grid[0].length;

    // Tjek rækker
    for (let row = 0; row < rows; row++) {
        if (grid[row][0] === player && grid[row][1] === player && grid[row][2] === player) {
            return true;
        }
    }

    // Tjek kolonner
    for (let col = 0; col < cols; col++) {
        if (grid[0][col] === player && grid[1][col] === player && grid[2][col] === player) {
            return true;
        }
    }

    // Tjek diagonaler
    if (grid[0][0] === player && grid[1][1] === player && grid[2][2] === player) {
        return true;
    }

    if (grid[0][2] === player && grid[1][1] === player && grid[2][0] === player) {
        return true;
    }

    // Ingen vinder
    return false;
}

// Funktion til at tjekke om spillet er uafgjort
function isDraw() {
    // Tjek om alle celler er fyldt
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            if (grid[row][col] === 0) {
                return false;
            }
        }
    }
    return true;
}
