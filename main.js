let contactBoxL = document.getElementById("left");
let contactBoxR = document.getElementById("right");
let nav = document.getElementById("nav");
let contactTabs = document.querySelectorAll(".contact .box");
let aos = document.querySelector('.aos');
let contact = document.querySelector('.contact');
let serviceSection = document.getElementById('services');
let projectSection = document.getElementById('projects');
window.onscroll = function () {
    if (window.scrollY >= contact.offsetTop - 700) {
        contactBoxL.style.animation = "comingleft 1s ease-in 1";
        contactBoxR.style.animation = "comingright 1s ease-in 1"; 
    } else {
        contactBoxL.style.animation = "";
        contactBoxR.style.animation = ""; 
    }
    // Nav Bar
    if (window.scrollY >= serviceSection.offsetTop && window.scrollY < projectSection.offsetTop) {
        nav.classList.add("bg-dark");
    } else if (window.scrollY >= projectSection.offsetTop || window.scrollY < serviceSection.offsetTop) {
        nav.classList.remove("bg-dark");
    }
    // AOS For Service Boxes
    if(window.scrollY >= aos.offsetTop - 900) {
        aos.style.animation = 'skeww .5s ease-in 1'
    } else {
        aos.style.animation = ''
    }
}

contactTabs[0].onclick = function () {
    window.location.href = 'tel:+01283861152';
}
contactTabs[1].onclick = function () {
    window.location.href = 'mailto:hadyymohammed@gmail.com';
}


