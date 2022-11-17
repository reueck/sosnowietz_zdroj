//vars
const nav = document.querySelector('.nav__bar__items')
const navBurger = document.querySelector('.burger-btn')
const allNavItems = document.querySelectorAll('.nav__bar__item')
const footerYear = document.querySelector('.footer__year')

const navHandler = () => {
	nav.classList.toggle('nav__bar__items--active')
	handleNavItemsAnimation()
}

const handleNavItemsAnimation = () => {
	let delayTime = 0
	
	allNavItems.forEach(item => {
		item.classList.toggle('nav-items-animation')
		item.style.animationDelay = '.' + delayTime + 's'
		delayTime++
	})
}

const handleCurrentYear = () => {
	const year = new Date().getUTCFullYear()
	footerYear.innerText = year
}

handleCurrentYear()
navBurger.addEventListener('click', navHandler)


allNavItems.forEach(item => {
	item.addEventListener('click', () => {
		nav.classList.remove('nav__bar__items--active')
	})
	item.removeEventListener
})