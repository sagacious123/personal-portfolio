const navBar = document.querySelector(".navbar");
const navToggler = document.querySelector(".nav-toggler");
const header = document.querySelector("header");
const navItems = document.querySelector(".nav-items");

window.onload = () => {
    setTimeout(() => {
        document.querySelector("body").classList.add("display")
    }, 4000);
}

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



var btnContainer = document.querySelector(".nav");

// Get all buttons with class="btn" inside the container
const navLink = document.querySelectorAll(".nav a");
// const showActive = document.querySelector(".show-active")

// Loop through the buttons and add the active class to the current/clicked button
for (var d = 0; d < navLink.length; d++) {
    // for (var j = 0; i < showActive.length; j++) {
        window.addEventListener('scroll', function() {
            const links = document.querySelectorAll('.nav-items a');
            const sections = document.querySelectorAll('.show-active');

            function changeLinkState() {
            let i = sections.length;

            while(--i && window.scrollY < sections[i].offsetTop && window.scrollY + 400 < sections[2].offsetTop) {}
            
            links.forEach((link) => link.classList.remove('active'));
            links[i].classList.add('active');
            }

            changeLinkState();
            // window.addEventListener('scroll', changeLinkState);
        })

        

        navLink[d].addEventListener("click", function() {
            var current = document.getElementsByClassName("active");
        
            // If there's no active class
            if (current.length > 0) {
              current[0].className = current[0].className.replace(" active", "");
            }
        
            // Add the active class to the current/clicked button
            this.className += " active";
          });
//     }
}