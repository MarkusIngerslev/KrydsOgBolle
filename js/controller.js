import * as view from "./view.js";
import * as model from "./model.js";

window.addEventListener("load", init);

let currentPlayer = 1;

function init() {
    const rows = 3;
    const cols = 3;

    // Initialiserer filer
    model.init(rows, cols);
    view.init();

    // Gør modellen og viewet tilgængelige i console
    window.model = model;
    window.view = view;

    // Initialiserer brættet i viewet
    view.createBoard(rows, cols);
    view.setClickListener(setCell);
}

function setCell(row, col) {
    // Tjek om cellen allerede er optaget
    if (model.readFromCell(row, col) !== 0) {
        console.log("Cell already occupied");
        return;
    }

    // Skift mellem spiller 1 og spiller 2
    const value = currentPlayer;
    model.writeToCell(row, col, value);

    // Opdater viewet: vis 'X' for spiller 1 og 'O' for spiller 2
    const displayValue = value === 1 ? "X" : "O";
    view.updateCell(row, col, displayValue);

    // Dump hele griddet i console
    model.dump();

    // Skift spiller
    currentPlayer = currentPlayer === 1 ? 2 : 1;
}
