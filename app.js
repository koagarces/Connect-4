



document.addEventListener('DOMContentLoaded', () => {

    let slots = document.querySelectorAll('#grid div');
    let player = document.getElementById('player');
    let playerTurn = 'Player 1';
    let victor = document.getElementById('victor');

    const winSlot = [
        [0, 1, 2, 3],
        [1, 2, 3, 4],
        [2, 3, 4, 5],
        [6, 7, 8, 9],
        [7, 8, 9, 10],
        [8, 9, 10, 11],
        [12, 13, 14, 15],
        [13, 14, 15, 16],
        [14, 15, 16, 17],
        [18, 19, 20, 21],
        [19, 20, 21, 22],
        [20, 21, 22, 23],
        [24, 25, 26, 27],
        [25, 26, 27, 28],
        [26, 27, 28, 29],
        [30, 31, 32, 33],
        [31, 32, 33, 34],
        [32, 33, 34, 35],
        [0, 6, 12, 18],
        [6, 12, 18, 24],
        [12, 18, 24, 30],
        [1, 7, 13, 19],
        [7, 13, 19, 25],
        [13, 19, 25, 31],
        [2, 8, 14, 20],
        [8, 14, 20, 26],
        [14, 20, 26, 32],
        [3, 9, 15, 21],
        [9, 15, 21, 27],
        [15, 21, 27, 33],
        [4, 10, 16, 22],
        [10, 16, 22, 28],
        [16, 22, 28, 34],
        [5, 11, 17, 23],
        [11, 17, 23, 29],
        [17, 23, 29, 35],
        [6, 13, 20, 27],
        [13, 20, 27, 34],
        [0, 7, 14, 21],
        [7, 14, 21, 28],
        [14, 21, 28, 35],
        [1, 8, 15, 22],
        [8, 15, 22, 29],
        [2, 9, 16, 23],
        [3, 8, 13, 18],
        [4, 9, 14, 19],
        [9, 14, 19, 24],
        [5, 10, 15, 20],
        [10, 15, 20, 25],
        [15, 20, 25, 30],
        [11, 16, 21, 26],
        [16, 21, 26, 31],
        [17, 22, 27, 32]
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
            } else if (playerTurn === 'Player 2') {
                if (slots[i + 6].classList.contains('bottom')) {
                    slots[i].classList.add('bottom');
                    slots[i].classList.add('player2');
                    playerTurn = 'Player 1'
                    player.innerHTML = playerTurn;
                }
            }
            checkWinner();
        }

    }



    function checkWinner() {
        for (let i = 0; i < winSlot.length; i++) {
            const slot1 = slots[winSlot[i][0]]
            const slot2 = slots[winSlot[i][1]]
            const slot3 = slots[winSlot[i][2]]
            const slot4 = slots[winSlot[i][3]]


            if (
                slot1.classList.contains('player1') &&
                slot2.classList.contains('player1') &&
                slot3.classList.contains('player1') &&
                slot4.classList.contains('player1')
            ) {
                victor.innerHTML = 'Player one wins'
            } else

                if (
                    slot1.classList.contains('player2') &&
                    slot2.classList.contains('player2') &&
                    slot3.classList.contains('player2') &&
                    slot4.classList.contains('player2')
                ) {
                    victor.innerHTML = 'Player two wins'
                }



        }
    }



    function rButton() {
        location.reload();
    }

})


