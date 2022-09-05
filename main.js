let contactBoxL = document.getElementById("left");
let contactBoxR = document.getElementById("right");
let nav = document.getElementById("nav");
let contactTabs = document.querySelectorAll(".contact .box");
let aos = document.querySelector(".aos");
let contact = document.querySelector(".contact");
let serviceSection = document.getElementById("services");
let projectSection = document.getElementById("projects");
let themeTabs = document.querySelectorAll(".themes li");
let modal = document.querySelector('.modal-animation');
let modalTxt = document.querySelector('.modal-text')
let root = document.querySelector(':root');
let landing = document.querySelector('section');
window.onscroll = function () {
  if (window.scrollY >= contact.offsetTop - 700) {
    contactBoxL.style.animation = "comingleft 1s ease-in 1";
    contactBoxR.style.animation = "comingright 1s ease-in 1";
  } else {
    contactBoxL.style.animation = "";
    contactBoxR.style.animation = "";
  }
  // Nav Bar
  if (
    window.scrollY >= serviceSection.offsetTop &&
    window.scrollY < projectSection.offsetTop
  ) {
    nav.classList.add("bg-dark");
  } else if (
    window.scrollY >= projectSection.offsetTop ||
    window.scrollY < serviceSection.offsetTop
  ) {
    nav.classList.remove("bg-dark");
  }
  // AOS For Service Boxes
  if (window.scrollY >= aos.offsetTop - 900) {
    aos.style.animation = "skeww .5s ease-in 1";
  } else {
    aos.style.animation = "";
  }
};

contactTabs[0].onclick = function () {
  window.location.href = "tel:+01283861152";
};
contactTabs[1].onclick = function () {
  window.location.href = "mailto:hadyymohammed@gmail.com";
};


themeTabs.forEach((tab) => {
    tab.addEventListener('click',()=> {
        setTimeout(() => {
            if(tab.id === 'theme1') {
                root.style.setProperty("--theme-color1","#e91e6378") 
                root.style.setProperty("--theme-color2","#e91e6378")
                root.style.setProperty("--theme-color3","#e91e6378")
                root.style.setProperty("--theme-color4","#e91e6378")
                landing.style.setProperty("background-image","url('https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1400')")
                // landing.style.backgroundImage = "url(../images/landing1.jpg)";
            }
            else if (tab.id === 'theme2'){
                root.style.setProperty("--theme-color1","#03a9f4") 
                root.style.setProperty("--theme-color2","#03a9f4")
                root.style.setProperty("--theme-color3","#03a9f4")
                root.style.setProperty("--theme-color4","#03a9f4")
                landing.style.setProperty("background-image","url('https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&w=1400')")
                // landing.style.backgroundImage = "url(../images/landing2.jpg)"
            } 
            else if (tab.id === 'theme3') {
                root.style.setProperty("--theme-color1","green") 
                root.style.setProperty("--theme-color2","#2ad284")
                root.style.setProperty("--theme-color3","seagreen")
                root.style.setProperty("--theme-color4","#198754")
                landing.style.setProperty("background-image","url('https://images.pexels.com/photos/3374205/pexels-photo-3374205.jpeg?auto=compress&cs=tinysrgb&w=1400&h=750&dpr=1')")
                // landing.style.backgroundImage = "url(../images/landing3.jpg)"
                localStorage.setItem("color","green");
                localStorage.setItem("color2","#2ad284");
                localStorage.setItem("color3","seagreen");
            } 
        }, 1000);

        modal.classList.add('show-mod')
        modalTxt.classList.add('animate')
        setTimeout(() => {
            modalTxt.classList.remove('animate')
        }, 1800);
        setTimeout(() => {
            modal.classList.remove('show-mod')
        }, 2000);
    })
});

