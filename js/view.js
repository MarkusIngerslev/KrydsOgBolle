export { init, createBoard, setClickListener, updateCell };

function init() {
    console.log("View initialized");
}

function createBoard(rows, cols) {
    const board = document.getElementById("board");

    // Tømmer eksisterende celler, hvis nødvendigt
    board.innerHTML = "";

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.dataset.row = row;
            cell.dataset.col = col;
            board.appendChild(cell);
        }
    }
}

function setClickListener(handler) {
    document.getElementById("board").addEventListener("click", (event) => {
        if (event.target.classList.contains("cell")) {
            const row = event.target.dataset.row;
            const col = event.target.dataset.col;
            handler(row, col); // Kald controllerens event-handler
        }
    });
}

function updateCell(row, col, displayValue) {
    // Find cellen i viewet og opdater dens tekstindhold
    const cell = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
    if (cell) {
        cell.textContent = displayValue;
    }
}
