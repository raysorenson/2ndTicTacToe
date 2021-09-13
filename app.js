let cells = document.querySelectorAll('div :not(#board) :not(.row)') /* NodeList of 9 cells */

let playerOne = 1
if (playerOne == 1){
    function cellClicked() {
        event.target.textContent = 'X'
        playerOne = 0
} else {
    function nextCellClicked(){
        event.target.textContent = "O"
        playerOne = 1
    }
}

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked)
        
}

function cellClicked() {
    event.target.textContent = 'X'
}
function nextCellClicked(){
    event.target.textContent = "O"
}