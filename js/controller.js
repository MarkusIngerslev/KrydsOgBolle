import * as view from "./view.js";
import * as model from "./model.js";

window.addEventListener("load", init);

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
    view.setClickListener(handleCellClick);
}

function handleCellClick(row, col) {
    // Test: skriv en værdi til cellen og læs den derefter
    model.writeToCell(row, col, "X");
    const value = model.readFromCell(row, col);
    console.log(`Cell clicked - Row: ${row}, Col: ${col}`);
    console.log(`Value read: ${value}`);

    // Dump hele griddet til console
    model.dump();
}
