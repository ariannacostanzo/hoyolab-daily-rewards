// * GHOST DROPDOWN

const ghostElement = document.getElementById('login-ghost');
const ghostDropdownMenu = document.querySelector('.ghost-dropdown-menu');


ghostElement.addEventListener('click', function() {
    ghostDropdownMenu.classList.toggle('d-none');
});

// * CAMBIO DELL'IMMAGINE ALL'HOVER

// const firstGhostLi = document.getElementById('first-ghost-li');
// const secondGhostLi = document.getElementById('second-ghost-li');
// const blueGhost = document.getElementById('blue-ghost');
// const blueEsci = document.getElementById('blue-esci');
// const greyGhost = document.getElementById('grey-ghost');
// const greyEsci = document.getElementById('grey-esci');


// firstGhostLi.addEventListener('mouseover', function() {
//     greyGhost.classList.add('d-none');
//     blueGhost.classList.remove('d-none');
// });