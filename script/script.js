const hamburger = document.querySelector('.nav-toggle')
const nav = document.querySelector('.nav-links')

hamburger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    hamburger.classList.toggle('nav-toggle-active');
})