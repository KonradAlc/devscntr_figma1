const navbar = document.querySelector('.navbar')
const navbarMenu = document.querySelector('.navbar__menu')
const navbarMenuToggle = document.querySelector('.navbar__menu__toggle')
const searchBarToggleBtn = document.querySelector('.navbar__search__icon')
const searchBar = document.querySelector('.navbar__search')


const isSticky = () => {
    if (window.scrollY > 80) {
        navbar.classList.add('sticky')
    }
    else {
        navbar.classList.remove('sticky')
    }
}

const dropdownMenu = e => {
    const isDropdownBtn = e.target.matches('[data-dropdown-btn]')
    const allDropdowns = document.querySelectorAll('[data-dropdown]')

    if (!isDropdownBtn && e.target.closest('[data-dropdown') == null) {
        allDropdowns.forEach(dropdown => {
            dropdown.querySelector('.navbar__menu__dropdown').classList.remove('active')
            dropdown.querySelector('img').classList.remove('active')
        })
        return
    }

    const thisDropdown = e.target.closest('[data-dropdown').querySelector('.navbar__menu__dropdown')
    const dropdownBtnArrow = e.target.closest('[data-dropdown]').querySelector('img')
    dropdownBtnArrow.classList.toggle('active')
    thisDropdown.classList.toggle('active')
}

const mobileMenu = () => {
    navbarMenu.classList.toggle('active')
    navbarMenuToggle.classList.toggle('active')
}

const searchBarToggle = () => {
    searchBar.classList.toggle('active')
}


document.addEventListener('scroll', isSticky)
document.addEventListener('click', dropdownMenu)
navbarMenuToggle.addEventListener('click', mobileMenu)
searchBarToggleBtn.addEventListener('click', searchBarToggle)