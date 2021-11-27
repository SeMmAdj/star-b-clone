const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')


function navToggle() {
    btn.classList.toggle('open')
    // add open class to hamburger menu
    nav.classList.toggle('hidden')
    // open menu
    document.body.classList.toggle('no-scroll')
    // prevent scroll by activation class

}
// by clicking on the button we active the function
btn.addEventListener('click', navToggle)