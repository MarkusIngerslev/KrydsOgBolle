"use strict";

import { View } from "./view.js";
// import { Model } from "./model.js";

window.addEventListener("load", start);

function start() {
    const controller = new Controller();
    controller.start();
}

class Controller {
    constructor() {
        this.rows = 3;
        this.cols = 3;
        this.view = new View(this.rows, this.cols);
    }

    start() {
        // Initialiserer brættet i viewet
        this.view.createBoard();

        // Tilføjer event listener for klik på cellerne
        this.view.setClickListener(this.handleCellClick.bind(this));
    }

    handleCellClick(row, col) {
        // Udskriv række og kolonne til konsollen
        console.log(`Cell clicked - Row: ${row}, Col: ${col}`);
    }
}
