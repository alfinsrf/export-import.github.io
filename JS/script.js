// Show Menu
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    // validate that variable exist
    if(toggle && nav) {
        toggle.addEventListener('click', () => {
            //add the show-menu class to the div tag with the nav menu class
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

// Remove Mobile Menu
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')

    //every click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// scroll section active-link
const section = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    section.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 50,
              sectionId = current.getAttribute('id')
        
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }
        else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// Change BG Header
function scrollHeader() {
    const nav = document.getElementById('header')

    //when the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// Show Scroll Up
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');

    //when the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560)    scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')

}
window.addEventListener('scroll', scrollUp)

// Dark and Light Theme
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-toggle-right'

//previously selected topic
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// Obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-toggle-left' : 'bx-toggle-right'

// Validate if the user previously choose a topic
if(selectedTheme) {
    // if the validation is fulfilled, check what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx-toggle-left' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    // Save the theme and the current icon that the user choose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
