let year = document.getElementById("year");
let contactBoxL = document.getElementById("left");
let contactBoxR = document.getElementById("right");
let nav = document.getElementById("nav");
let contact = document.querySelector(".contact");
let serviceSection = document.getElementById("services");
let projectSection = document.getElementById("projects");
let themeTabs = document.querySelectorAll(".themes li");
let modal = document.querySelector(".modal-animation");
let modalTxt = document.querySelector(".modal-text");
let root = document.querySelector(":root");
let landing = document.querySelector("section");
let loading = document.querySelector(".loading");
let showMoreBtn = document.querySelector(".show-more-btn");
let prevScrollpos = window.pageYOffset;

year.innerText = new Date().getFullYear();

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

  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("header").classList.remove("hidden");
  } else {
    document.querySelector("header").classList.add("hidden");
  }
  prevScrollpos = currentScrollPos;
};

themeTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    setTimeout(() => {
      if (tab.id === "theme1") {
        root.style.setProperty("--theme-color1", "#e91e6378");
        root.style.setProperty("--theme-color2", "#e91e6378");
        root.style.setProperty("--theme-color3", "#e91e6378");
        root.style.setProperty("--theme-color4", "#e91e6378");
        landing.style.setProperty(
          "background-image",
          "url('https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1400')"
        );
      } else if (tab.id === "theme2") {
        root.style.setProperty("--theme-color1", "#03a9f4");
        root.style.setProperty("--theme-color2", "#03a9f4");
        root.style.setProperty("--theme-color3", "#03a9f4");
        root.style.setProperty("--theme-color4", "#03a9f4");
        landing.style.setProperty(
          "background-image",
          "url('https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&w=1400')"
        );
      } else if (tab.id === "theme3") {
        root.style.setProperty("--theme-color1", "green");
        root.style.setProperty("--theme-color2", "#2ad284");
        root.style.setProperty("--theme-color3", "seagreen");
        root.style.setProperty("--theme-color4", "#198754");
        landing.style.setProperty(
          "background-image",
          "url('https://images.pexels.com/photos/3374205/pexels-photo-3374205.jpeg?auto=compress&cs=tinysrgb&w=1400&h=750&dpr=1')"
        );
        localStorage.setItem("color", "green");
        localStorage.setItem("color2", "#2ad284");
        localStorage.setItem("color3", "seagreen");
      }
    }, 1000);

    modal.classList.add("show-mod");
    modalTxt.classList.add("animate");
    setTimeout(() => {
      modalTxt.classList.remove("animate");
    }, 1800);
    setTimeout(() => {
      modal.classList.remove("show-mod");
    }, 2000);
  });
});

setTimeout(() => {
  loading.style.opacity = 0;
  setTimeout(() => {
    loading.remove();
  }, 1000);
}, 2000);

const tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
