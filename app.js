let cells = document.querySelectorAll('div :not(#board) :not(.row)') /* NodeList of 9 cells */

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked )
    
}

function cellClicked() {
    event.target.textContent = 'X'
}
