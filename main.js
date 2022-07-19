let contactBoxL = document.getElementById("left");
let contactBoxR = document.getElementById("right");
window.onscroll = function () {
    if (window.scrollY >= 3729) {
        contactBoxL.style.animation = "comingleft 1s ease-in 1";
        contactBoxR.style.animation = "comingright 1s ease-in 1"; 
    } else {
        contactBoxL.style.animation = "";
        contactBoxR.style.animation = ""; 
    }
}