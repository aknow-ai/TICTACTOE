//DOM MANIPULATION 
const CONTAINER = document.getElementById('container')
const DISPLAY = document.getElementById('display')

        const player1 = document.getElementById('p1')
        const player2 = document.getElementById('p2')




//GAMEBOARD MODULE FUNCTION
let turnX = 0;
const GAMEBOARD = (() => {

    const board = ['','','','','','','','',''];


    //RENDERING THE GRID 
    const render = () => {

        turnX = 0;
        DISPLAY.innerHTML = player1.value + ' TURN'
    let boardHTML = '';
    board.forEach((cell, index) => {
        boardHTML += `<div class="cell" id="${index}"></div>`;
    });
    CONTAINER.innerHTML = boardHTML;

    const allCells = document.querySelectorAll('.cell');
    allCells.forEach(cell => {
        cell.addEventListener('click', GAME.handleClick)
    })
    }


    const checkWin = () => {
        const celdas = document.querySelectorAll('.cell');
        
        if (celdas[0].innerHTML !== '' && celdas[1].innerHTML !== '' && celdas[2].innerHTML !== '' && celdas[3].innerHTML !== '' && celdas[4].innerHTML !== '' && celdas[5].innerHTML !== '' && celdas[6].innerHTML !== '' && celdas[7].innerHTML !== '' && celdas[8].innerHTML !== '') {
            DISPLAY.innerHTML = 'IT S A DRAW'
        }


        if (celdas[0].innerHTML == 'X' && celdas[1].innerHTML == 'X' && celdas[2].innerHTML == 'X') {
            DISPLAY.innerHTML = 'X WON';
            celdas.forEach(celda => {
                celda.removeEventListener('click', GAME.handleClick);
            })
        } else if (celdas[3].innerHTML == 'X' && celdas[4].innerHTML == 'X' && celdas[5].innerHTML == 'X') {
            DISPLAY.innerHTML = 'X WON';
            celdas.forEach(celda => {
                celda.removeEventListener('click', GAME.handleClick);
            })
        } else if (celdas[6].innerHTML == 'X' && celdas[7].innerHTML == 'X' && celdas[8].innerHTML == 'X') {
            DISPLAY.innerHTML = 'X WON';
            celdas.forEach(celda => {
                celda.removeEventListener('click', GAME.handleClick);
            })
        } 
        
        else if (celdas[0].innerHTML == 'O' && celdas[1].innerHTML == 'O' && celdas[2].innerHTML == 'O') {
            DISPLAY.innerHTML = 'O WON';
            celdas.forEach(celda => {
                celda.removeEventListener('click', GAME.handleClick);
            })
        } else if (celdas[3].innerHTML == 'O' && celdas[4].innerHTML == 'O' && celdas[5].innerHTML == 'O') {
            DISPLAY.innerHTML = 'O WON';
            celdas.forEach(celda => {
                celda.removeEventListener('click', GAME.handleClick);
            })
        } else if (celdas[6].innerHTML == 'O' && celdas[7].innerHTML == 'O' && celdas[8].innerHTML == 'O') {
            DISPLAY.innerHTML = 'O WON';
            celdas.forEach(celda => {
                celda.removeEventListener('click', GAME.handleClick);
            })
        } else if (celdas[0].innerHTML == 'X' && celdas[4].innerHTML == 'X' && celdas[8].innerHTML == 'X') {
            DISPLAY.innerHTML = 'X WON';
            celdas.forEach(celda => {
                celda.removeEventListener('click', GAME.handleClick);
            })
        } else if (celdas[2].innerHTML == 'X' && celdas[4].innerHTML == 'X' && celdas[6].innerHTML == 'X') {
            DISPLAY.innerHTML = 'X WON';
            celdas.forEach(celda => {
                celda.removeEventListener('click', GAME.handleClick);
            })
        } else if (celdas[0].innerHTML == 'O' && celdas[4].innerHTML == 'O' && celdas[8].innerHTML == 'O') {
            DISPLAY.innerHTML = 'O WON';
            celdas.forEach(celda => {
                celda.removeEventListener('click', GAME.handleClick);
            })
        } else if (celdas[2].innerHTML == 'O' && celdas[4].innerHTML == 'O' && celdas[6].innerHTML == 'O') {
            DISPLAY.innerHTML = 'O WON';
            celdas.forEach(celda => {
                celda.removeEventListener('click', GAME.handleClick);
            })
        } else if (celdas[1].innerHTML == 'X' && celdas[4].innerHTML == 'X' && celdas[7].innerHTML == 'X') {
            DISPLAY.innerHTML = 'X WON';
            celdas.forEach(celda => {
                celda.removeEventListener('click', GAME.handleClick);
            })
        } else if (celdas[3].innerHTML == 'X' && celdas[4].innerHTML == 'X' && celdas[5].innerHTML == 'X') {
            DISPLAY.innerHTML = 'X WON';
            celdas.forEach(celda => {
                celda.removeEventListener('click', GAME.handleClick);
            })
        } else if (celdas[1].innerHTML == 'O' && celdas[4].innerHTML == 'O' && celdas[7].innerHTML == 'O') {
            DISPLAY.innerHTML = 'O WON';
            celdas.forEach(celda => {
                celda.removeEventListener('click', GAME.handleClick);
            })
        } else if (celdas[3].innerHTML == 'O' && celdas[4].innerHTML == 'O' && celdas[5].innerHTML == 'O') {
            DISPLAY.innerHTML = 'O WON';
            celdas.forEach(celda => {
                celda.removeEventListener('click', GAME.handleClick);
            })
        } 
       
    }

    return {
        render, 
        checkWin,
    }
})();

const GAME = (()=> {

   
    
    function handleClick() {
        if (this.innerHTML !== '') {
            return;
        } else {
            if (turnX == 0) {
            this.innerHTML = 'X' 
            DISPLAY.innerHTML = player2.value + ' TURN'
            turnX = 1;
            } else if (turnX == 1) {
                this.innerHTML = 'O'
                DISPLAY.innerHTML = player1.value + ' TURN'
                turnX = 0;
            }
            
        }
        GAMEBOARD.checkWin()
    };
 
    return {
        handleClick,
    }
})();
 




