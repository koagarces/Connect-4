document.addEventListener('DOMContentLoaded', () => {
    let slots = document.querySelectorAll('#grid div');
    let player = document.getElementById('player');
    let playerTurn = 'player 1';

    for (let i = 0; i < slots.length; i++) {
        slots[i].onclick = () => {

            if (playerTurn === 'player 1') {
                if (slots[i + 6].classList.contains('bottom')) {
                    slots[i].classList.add('bottom');
                    slots[i].classList.add('player1');
                    playerTurn = 'player 2';
                    player.innerHTML = playerTurn;
                }

            } else if (playerTurn === 'player 2') {
                if (slots[i + 6].classList.contains('bottom')) {
                    slots[i].classList.add('bottom');
                    slots[i].classList.add('player2');
                    playerTurn = 'player 1'
                    player.innerHTML = playerTurn
                } else
                    alert('no');


            }
        }
    }
})