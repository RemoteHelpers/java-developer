const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const mobileMenuCloseBtn = document.querySelector(".mobile-menu-close-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const body = document.querySelector("*");



function openMenu () {
    mobileMenuBtn.addEventListener('click', function(){
        mobileMenuBtn.classList.add("mobile-menu-close-btn");
        mobileMenu.classList.add("show-menu");
        body.classList.add("restrict-y");
        closeMenu();
    });
}

function closeMenu () {
    mobileMenuBtn.addEventListener('click', function(){
    mobileMenuBtn.classList.remove("mobile-menu-close-btn");
    mobileMenu.classList.remove("show-menu");
    body.classList.remove("restrict-y");
    openMenu();
});

}

function closeMobileMenu() {
    mobileMenuBtn.classList.remove("mobile-menu-close-btn");
    mobileMenu.classList.remove("show-menu");
    body.classList.remove("restrict-y");
    openMenu();
}


openMenu ();