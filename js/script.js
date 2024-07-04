const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");

const mainMenu = document.getElementById("main-menu");

openMenu.addEventListener('click', () => {
    mainMenu.classList.add('visible');
    mainMenu.classList.remove('invisible');
});

closeMenu.addEventListener('click', () => {
    mainMenu.classList.add('invisible');
    mainMenu.classList.remove('visible');
});
