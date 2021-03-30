@@include("plagins.js");

// header

const hamburger = document.querySelector(".header__hamburger");
const hamburger_svg = document.querySelector("svg");
const hamburger_use = document.querySelector("use");
const menu = document.querySelector(".header__nav");
const menu_ul = document.querySelector(".header__nav ul");


hamburger.addEventListener("click", () => {
    menu.classList.add("header__nav--open");
})

document.addEventListener("click", (event) => {
    if (event.target != hamburger_use && event.target != hamburger_svg && event.target != hamburger && event.target != menu  && event.target != menu_ul) {
        menu.classList.remove("header__nav--open");
    }
})


// gallery
    
const prevs = document.querySelectorAll(".prev");
const nexts = document.querySelectorAll(".next");
const gallerys = document.querySelectorAll(".projects__item__gallery");

for (let galleryIndex = 0; galleryIndex < gallerys.length; galleryIndex++) {
    let gallery = gallerys[galleryIndex].querySelectorAll("img");
    let photoIndex = Array.from(gallery).indexOf(gallerys[galleryIndex].querySelector("img.show"));
    
    function activeArrow() {
        nexts[galleryIndex].classList.add("active");
        prevs[galleryIndex].classList.add("active");
        
        if (photoIndex == 0) {
            prevs[galleryIndex].classList.remove("active");
        }
        else if (photoIndex == gallery.length - 1) {
            nexts[galleryIndex].classList.remove("active");
        }
    }

    nexts[galleryIndex].addEventListener("click", () => {
        if (photoIndex != gallery.length - 1) {  
            gallery[photoIndex].classList.remove("show");
            photoIndex++;
            gallery[photoIndex].classList.add("show");
            activeArrow();
        }
    })

    prevs[galleryIndex].addEventListener("click", () => {
        if (photoIndex != 0) {
            gallery[photoIndex].classList.remove("show");
            photoIndex--;
            gallery[photoIndex].classList.add("show");
            activeArrow();
        } 
    })
}