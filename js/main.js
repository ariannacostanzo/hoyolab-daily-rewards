// * GHOST DROPDOWN

const ghostElement = document.getElementById('login-ghost');
const ghostDropdownMenu = document.querySelector('.ghost-dropdown-menu');


ghostElement.addEventListener('click', function() {
    ghostDropdownMenu.classList.toggle('d-none');
});

// * CHIUDERE I POPUP

const noteIcon = document.getElementById('note');
const popupFirst = document.getElementById('popup1');
const closeFirst = document.getElementById('close1');

noteIcon.addEventListener('click', function() {
    popupFirst.classList.remove('d-none');
});

closeFirst.addEventListener('click', function() {
    popupFirst.classList.add('d-none');
});