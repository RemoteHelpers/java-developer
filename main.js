const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const mobileMenuCloseBtn = document.querySelector(".mobile-menu-close-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const body = document.querySelector("*");
const inNumberItem = document.querySelectorAll(".numbers-content");
// const inNumbersSection = document.querySelector("#in_numbers");
const advItem = document.querySelectorAll(".advatages-item");
const requirementItem = document.querySelectorAll(".requirement");



for (let i = 0; i < inNumberItem.length; ++i) {
    inNumberItem[i].addEventListener('mouseenter', scaledDiv);
 }

 for (let i = 0; i < advItem.length; ++i) {
    advItem[i].addEventListener('mouseenter', getHigh);
 }

 for (let i = 0; i < requirementItem.length; ++i) {
    requirementItem[i].addEventListener('mouseenter', getHigh);
 }





 function scaledDiv (elem) {
    this.classList.add("scaled");
    setTimeout(() => this.classList.remove("scaled"), 1000);
 }

 function getHigh (elem) {
    this.classList.add("higher");
    setTimeout(() => this.classList.remove("higher"), 500);
 }

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
