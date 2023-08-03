import '../scss/main.scss'

// Функционал для меню
const nav = document.querySelector('#nav')
const navBtn = document.querySelector('#nav-btn')
const navBtnImg = document.querySelector('#nav-btn-img')

navBtn.onclick = () => {
	if (nav.classList.toggle('open')) {
		navBtnImg.src = '/public/images/x-btn.svg'
	} else {
		navBtnImg.src = '/public/images/nav-button.svg'
	}
}

// gsap.registerPlugin(ScrollTrigger)

// const tl = gsap.timeline()
// tl.to('.wrapper', 4, { x: -window.innerWidth * 1.2 })

// ScrollTrigger.create({
// 	animation: tl,
// 	trigger: '.wrapper',
// 	start: 'center center',
// 	end: '+=3000',
// 	scrub: true,
// 	pin: true,
// })

// // Анимация для карточек

// gsap.registerPlugin(ScrollTrigger)

// const cards = document.querySelectorAll('.card')
// const header = document.querySelector('.thirdSection__heading')
// const animation = gsap.timeline()

// cards.forEach((card, index) => {
// 	if (index > 0) {
// 		gsap.set(card, { y: index * 600 })
// 		animation.to(card, { y: 0, duration: index * 0.5, ease: 'none' }, 0)
// 	}
// })

// ScrollTrigger.create({
// 	trigger: '.wrap',
// 	start: 'top top',
// 	pin: true,
// 	end: `+=${cards.length * 400}`,
// 	scrub: true,
// 	animation: animation,
// 	// markers: true,
// })

// // HOVER ДЛЯ КЕЙСОВ
// const addHoverEffect = (hoverElementSelector, textElementSelector) => {
// 	const hoverElement = document.querySelector(hoverElementSelector)
// 	const textElement = document.querySelector(textElementSelector)

// 	hoverElement.addEventListener('mouseover', () => {
// 		textElement.style.opacity = '1'
// 	})

// 	hoverElement.addEventListener('mouseout', () => {
// 		textElement.style.opacity = '0'
// 	})
// }

// const caseText1 = document.querySelector('.case1__hover')
// const case1 = document.querySelector('.easyLife')
// addHoverEffect('.easyLife', '.case1__hover')

// const caseText2 = document.querySelector('.case2__hover')
// const case2 = document.querySelector('.alanyaInternational')
// addHoverEffect('.alanyaInternational', '.case2__hover')

// const caseText3 = document.querySelector('.case3__hover')
// const case3 = document.querySelector('.favoriteMotors')
// addHoverEffect('.favoriteMotors', '.case3__hover')

// const caseText4 = document.querySelector('.case4__hover')
// const case4 = document.querySelector('.rectangle5')
// addHoverEffect('.rectangle5', '.case4__hover')

// // Анимация Footer
// let blue = document.querySelector('.blue')
// let black = document.querySelector('.black')
// let text1 = document.querySelector('.text1')
// let text2 = document.querySelector('.text2')
// let img = document.querySelector('.footer__img')
// let footer = document.querySelector('.footer')
// let footerLink = document.querySelector('.footer-link')

// gsap.registerPlugin(ScrollTrigger)
// const tl2 = gsap.timeline({
// 	scrollTrigger: {
// 		trigger: blue,
// 		scrub: 1,
// 		start: 'top center+=200',
// 		end: 'top center-=200',
// 		// markers: true,
// 	},
// })

// tl2.fromTo(blue, { y: -100, duration: 5 }, { y: 350, duration: 5 }).to(blue, {
// 	y: -100,
// 	duration: 5,
// })

// // Картинка
// const tl3 = gsap.timeline({
// 	scrollTrigger: {
// 		trigger: blue,
// 		scrub: 1,
// 		start: 'top center+=200',
// 		end: 'top center-=200',
// 		// markers: true,
// 	},
// })

// tl3
// 	.fromTo(
// 		img,
// 		{ y: 200, duration: 5, scale: 0.7, filter: 'blur(5px)' },
// 		{ y: -100, duration: 5, filter: 'blur(0)' }
// 	)
// 	.to(img, { y: -100, duration: 5, zIndex: 10, scale: 1 })
// 	.to(img, { y: 200, duration: 10 })

// // Изменение черного цвета footer
// const tl4 = gsap.timeline({
// 	scrollTrigger: {
// 		trigger: blue,
// 		scrub: 1,
// 		start: 'top center',
// 		end: 'top center-=200',
// 		// markers: true,
// 	},
// })

// tl4.to(footer, { background: '#2BE2F0', duration: 2 })

// // Фиксация текста 1
// const tl5 = gsap.timeline({
// 	scrollTrigger: {
// 		trigger: '.text1',
// 		scrub: 1,
// 		start: 'top top',
// 		end: '+=300',
// 		pin: true,
// 		pinSpacing: false,
// 		// markers: true,
// 	},
// })

// tl5.to('.text1', {})

// // Фиксация текста 2
// const tl6 = gsap.timeline({
// 	scrollTrigger: {
// 		trigger: '.text2',
// 		scrub: 1,
// 		start: 'top-=160 top',
// 		end: '+=300',
// 		pin: true,
// 		pinSpacing: false,
// 		// markers: true,
// 	},
// })

// tl6.to('.text2', {})

// // Появление Ссылки
// const tl7 = gsap.timeline({
// 	scrollTrigger: {
// 		trigger: blue,
// 		scrub: 1,
// 		start: 'top center-=200',
// 		end: 'top center-=300',
// 		// markers: true,
// 	},
// })

// tl7.to(footerLink, { opacity: 1, delay: 1 })
