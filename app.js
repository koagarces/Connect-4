document.addEventListener('DOMContentLoaded', () => {
    let slots = document.querySelectorAll('#grid div');



    for (let i = 0; i < slots.length; i++) {
        slots[i].onclick = () => {
            alert(`this is ${[i]}`)
        }
    }

})