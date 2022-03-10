

document.addEventListener('DOMContentLoaded', () => {

    let slots = document.querySelectorAll('#grid div');
    let player = document.getElementById('player');
    let playerTurn = 'Player 1';
    let red = document.getElementsByClassName('player1');
    let black = document.getElementsByClassName('player2')


    const winningSlots = [
        [0, 1, 2, 3],
        [1, 2, 3, 4],
        [2, 3, 4, 5],
        [6, 7, 8, 9],
        [7, 8, 9, 10],
        [8, 9, 10, 11],
        [12, 13, 14, 15],
        [1, 23, 24, 25],


    ]






    for (let i = 0; i < slots.length; i++) {
        slots[i].onclick = () => {
            if (slots[i].classList.contains('bottom'))
                return;
            if (playerTurn === 'Player 1') {
                if (slots[i + 6].classList.contains('bottom')) {
                    slots[i].classList.add('bottom');
                    slots[i].classList.add('player1')
                    playerTurn = 'Player 2';
                    player.innerHTML = playerTurn;

                }
            } else
                if (playerTurn === 'Player 2') {
                    if (slots[i + 6].classList.contains('bottom')) {
                        slots[i].classList.add('bottom');
                        slots[i].classList.add('player2');
                        playerTurn = 'Player 1'
                        player.innerHTML = playerTurn;
                    }
                }
                else
                    alert('no go');



        }


    }
    function rButton() {
        location.reload();
    }
})
