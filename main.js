let contactBoxL = document.getElementById("left");
let contactBoxR = document.getElementById("right");
let nav = document.getElementById("nav");
let contactTabs = document.querySelectorAll(".contact .box");
let aos = document.querySelectorAll('.aos');
let contact = document.querySelector('.contact');
// console.log(contact.offsetTop)
window.onscroll = function () {
    if (window.scrollY >= contact.offsetTop - 700) {
        contactBoxL.style.animation = "comingleft 1s ease-in 1";
        contactBoxR.style.animation = "comingright 1s ease-in 1"; 
    } else {
        contactBoxL.style.animation = "";
        contactBoxR.style.animation = ""; 
    }
    // Nav Bar
    if (window.scrollY >= 900 && window.scrollY <= 2000) {
        nav.classList.add("bg-dark");
    } else {
        nav.classList.remove("bg-dark");
    }
    // AOS For Service Boxes
    const triggerBottom = (window.innerHeight / 5) * 5;
    aos.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
            box.style.animation = 'skeww .5s ease-in 1'
        }
    });
}

contactTabs[0].onclick = function () {
    window.location.href = 'tel:+01283861152';
}
contactTabs[1].onclick = function () {
    window.location.href = 'mailto:hadyymohammed@gmail.com';
}


