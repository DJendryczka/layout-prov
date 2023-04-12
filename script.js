/* Mobile menu function */
const hamburgerButton = document.getElementById('hamburger-button');
const hamburgerLinks = document.getElementById('hamburger-links');

hamburgerButton.addEventListener('click', ()=>{
    hamburgerLinks.classList.toggle('navbar-open')
})