document.addEventListener('DOMContentLoaded', function () {
	document.getElementById('head-burger').addEventListener('click', function () {
		document.querySelector('.navigation__list').classList.toggle('open')
	})
})

const item = document.querySelectorAll('.reviews__item')

const controlls = document.querySelectorAll('.reviews__controlls')

let = itemIndex = 0

function show(index) {
	item[itemIndex].classList.remove('active')
	item[index].classList.add('active')
	itemIndex = index
}

controlls.forEach(e => {
	e.addEventListener('click', () => {
		if (event.target.classList.contains('reviews__controlls--prev')) {
			let index = itemIndex - 1
			if (index < 0) {
				index = item.length - 1
			}
			show(index)
		} else if (event.target.classList.contains('reviews__controlls--next')) {
			let index = itemIndex + 1
			if (index >= item.length) {
				index = 0
			}
			show(index)
		}
	})
})

show(itemIndex)

const btns = document.querySelectorAll('.open-modal-btn')
const btnsVideo = document.querySelectorAll('.open-modal-video-btn')
const btnsClose = document.querySelectorAll('.modal__close-btn')

const modal = document.querySelector('.modal')
const modalVideo = document.querySelector('.modal__video')

// btns.addEventListener('click', function () {
// 	document.getElementById('call').classList.add('open')
// })
// document
// 	.getElementById('close-modal-call')
// 	.addEventListener('click', function () {
// 		document.getElementById('call').classList.remove('open')
// 	})
btnsClose.forEach(el => {
	el.addEventListener('click', e => {
		modal.classList.remove('open')
		modalVideo.classList.remove('open')
		document.getElementById('form').reset()
	})
})

btns.forEach(el => {
	el.addEventListener('click', e => {
		modal.classList.add('open')
	})
})
btnsVideo.forEach(el => {
	el.addEventListener('click', e => {
		modalVideo.classList.add('open')
	})
})
