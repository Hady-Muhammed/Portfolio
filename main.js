let contactBoxL = document.getElementById("left");
let contactBoxR = document.getElementById("right");
let skillsTOP = document.getElementById("top");
let skillsBOTTOM = document.getElementById("bottom");
let cards = document.querySelectorAll(".col-lg-4");
let nav = document.getElementById("nav");
window.onscroll = function () {
    if (window.scrollY >= 4441) {
        contactBoxL.style.animation = "comingleft 1s ease-in 1";
        contactBoxR.style.animation = "comingright 1s ease-in 1"; 
    } else {
        contactBoxL.style.animation = "";
        contactBoxR.style.animation = ""; 
    }
    if (window.scrollY >= 663 && window.scrollY <= 1836) {
        skillsTOP.style.animation = "comingUP .5s ease-in 1";
        skillsBOTTOM.style.animation = "comingDOWN .5s ease-in 1"; 
    } else {
        skillsTOP.style.animation = "";
        skillsBOTTOM.style.animation = ""; 
    }
    if (window.scrollY >= 167 && window.scrollY <= 1404) {
        for(let i = 0 ; i < cards.length ; i++){
            cards[i].style.animation = "skeww .5s ease-in 1";
        }
    } else {
        for(let i = 0 ; i < cards.length ; i++){
            cards[i].style.animation = "";
        }      
    }
    if (window.scrollY >= 900 && window.scrollY <= 2000) {
        nav.classList.add("bg-dark");
    } else {
        nav.classList.remove("bg-dark");
    }
}