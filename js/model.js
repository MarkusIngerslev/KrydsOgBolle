export { init, writeToCell, readFromCell, dump };

let grid = [];

function init(rows, cols) {
    // Initialiserer griddet som et array af arrays (2D array)
    grid = Array.from({ length: rows }, () => Array(cols).fill(null));
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
