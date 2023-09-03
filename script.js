window.onscroll = function () { myFunction() };

var navbar = document.querySelector("nav");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.scrollY || window.scroll >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}