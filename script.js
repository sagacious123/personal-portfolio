const navBar = document.querySelector(".navbar");
const navToggler = document.querySelector(".nav-toggler");
const header = document.querySelector("header");
const navItems = document.querySelector(".nav-items");


navToggler.addEventListener("click", function() {
    header.classList.toggle("responsive");
    this.classList.toggle("change");
})

window.addEventListener("scroll", function() {
    if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50 ) {
        header.classList.add("header-scroll");
        navItems.classList.add("navitems-scroll");
    } else {
        header.classList.remove("header-scroll");
        navItems.classList.remove("navitems-scroll");
    }
})

const navLink = document.querySelectorAll(".nav-items a");
for(let i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener("click", function(e) {

        if(e.target) {
            navLink[0].classList.add("active")
        }
        // if(!this.classList.contains("active")) {
        // this.classList.add("active");
        // } else {
        //     this.classList.remove("active");
        // }
    })
}