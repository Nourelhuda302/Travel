let navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose) {
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

let navLink = document.querySelectorAll('.nav-link')

let linkAction = () =>{
    let navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

window.addEventListener('scroll', function() {
    let navbar = document.querySelector('.nav');
    if (window.scrollY > 800) {
        navbar.classList.add('navbar-bg');
    } else {
        navbar.classList.remove('navbar-bg');
    }
});