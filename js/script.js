const nav = document.querySelector('.nav__bar__items')
const navBurger = document.querySelector('.burger-btn')
const allNavItems = document.querySelectorAll('.nav__bar__item')
const navHandler = () => {
	nav.classList.toggle('nav__bar__items--active')

	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav__bar__items--active')
		})
	})
}

navBurger.addEventListener('click', navHandler)
