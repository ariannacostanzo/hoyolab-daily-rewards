// * GHOST DROPDOWN

const ghostElement = document.getElementById('login-ghost');
const ghostDropdownMenu = document.querySelector('.ghost-dropdown-menu');


ghostElement.addEventListener('click', function() {
    ghostDropdownMenu.classList.toggle('d-none');
});

// * APRIRE E CHIUDERE I POPUP, primo

const noteIcon = document.getElementById('note');
const popupFirst = document.getElementById('popup1');
const closeFirst = document.getElementById('close1');

noteIcon.addEventListener('click', function() {
    popupFirst.classList.remove('d-none');
});

closeFirst.addEventListener('click', function() {
    popupFirst.classList.add('d-none');
});

// * APRIRE E CHIUDERE I POPUP, secondo

const questionIcon = document.getElementById('question');
const popupSecond = document.getElementById('popup2');
const closeSecond = document.getElementById('close2');

questionIcon.addEventListener('click', function() {
    popupSecond.classList.remove('d-none');
});

closeSecond.addEventListener('click', function() {
    popupSecond.classList.add('d-none');
});

// * APRIRE E CHIUDERE SOCIAL ICONS

const socialIcon = document.getElementById('social-icons');
const socialIconsContainer = document.querySelector('.social-icons-container');

socialIcon.addEventListener('click', function() {
    // socialIconsContainer.classList.toggle('d-none');
    socialIconsContainer.classList.toggle('d-none');

});