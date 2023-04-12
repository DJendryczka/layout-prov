/* Mobile menu function */
const hamburgerButton = document.getElementById('hamburger-button');
const hamburgerLinks = document.getElementById('hamburger-links');

hamburgerButton.addEventListener('click', ()=>{
    hamburgerLinks.classList.toggle('navbar-open')
})

/* Modal */

const openBtn = document.getElementById('open-modal');
const closeBtn = document.getElementById('close-modal');

openBtn.addEventListener('click', ()=>{
    document.getElementById('overlay').style.display='block'
})

closeBtn.addEventListener('click', ()=>{
    document.getElementById('overlay').style.display='none'
})