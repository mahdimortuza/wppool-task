// collapsable menu

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



// dynamic header starts here 

const mainHeader = document.getElementById("main-header")
const mainNavbar = document.getElementById("main-navbar")
const shareButton = document.getElementById("share-btn")
const downloadButton = document.getElementById("download-btn")
const logoWhite = document.createElement("img")
const logoBlack = document.createElement("img")

logoWhite.src = "./images/logos/logo-white.png"
logoBlack.src = "./images/logos/logo-black.png"

const mainLogo = document.getElementById("main-logo")


window.onscroll = () => {
    if (window.scrollY > 600) {
        mainHeader.classList.add('sticky-header');
        mainHeader.classList.remove("fixed-header")

        mainNavbar.classList.add("py-[0px]");
        mainNavbar.classList.remove("py-[34px]")

        shareButton.classList.add("share-btn-green");
        shareButton.classList.remove("share-btn-white")
        downloadButton.classList.add('download-btn-blue');
        downloadButton.classList.remove("download-btn-white")
        
        if (mainLogo.contains(logoWhite)) {
            mainLogo.removeChild(logoWhite)
        }
        if (!mainLogo.contains(logoBlack)) {
            mainLogo.appendChild(logoBlack)
        }
    } else {
        mainHeader.classList.add("fixed-header");
        mainHeader.classList.remove("sticky-header")
        
        mainNavbar.classList.add("py-[34px]");
        mainNavbar.classList.remove("py-[0px]")

        shareButton.classList.add('share-btn-white');
        shareButton.classList.remove("share-btn-green")
        downloadButton.classList.add('download-btn-white');
        downloadButton.classList.remove("download-btn-blue")
        
        if (mainLogo.contains(logoBlack)) {
            mainLogo.removeChild(logoBlack)
        }
        if (!mainLogo.contains(logoWhite)) {
            mainLogo.appendChild(logoWhite)
        }

    }
};