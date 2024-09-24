export class View {
    constructor(rows, cols) {
        this.rows = rows;
        this.cols = cols;
    }

    createBoard() {
        const board = document.getElementById("board");

        // Tømmer eksisterende celler, hvis nødvendigt
        board.innerHTML = "";

        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols; col++) {
                const cell = document.createElement("div");
                cell.classList.add("cell");
                cell.dataset.row = row;
                cell.dataset.col = col;
                board.appendChild(cell);
            }
        }
    }

    setClickListener(handler) {
        document.getElementById("board").addEventListener("click", (event) => {
            if (event.target.classList.contains("cell")) {
                const row = event.target.dataset.row;
                const col = event.target.dataset.col;
                handler(row, col); // Kald controllerens event-handler
            }
        });
    }
}
