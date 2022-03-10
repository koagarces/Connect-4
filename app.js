

document.addEventListener('DOMContentLoaded', () => {

    let slots = document.querySelectorAll('#grid div');
    let player = document.getElementById('player');
    let playerTurn = 'Player 1';
    let red = document.getElementsByClassName('player1');
    let black = document.getElementsByClassName('player2')
    const winningSlots = [

    ]

    for (let i = 0; i < slots.length; i++) {
        slots[i].onclick = () => {

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
                } else if (slots[i].classList.contains('bottom player1')) {
                    slots[i].classList.remove('player2');
                }
                else if (slots[i].classList.contains('bottom player2')) {
                    slots[i].classList.remove('player1');
                }
                else
                    alert('no go');





        }


    }
    function rButton() {
        location.reload();
    }
})
