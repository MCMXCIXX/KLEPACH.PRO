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
const btnsClose = document.querySelectorAll('.modal__close-btn')

const modal = document.querySelector('.modal')
const modalVideo = document.querySelector('.modal__video')

btns.forEach(el => {
	el.addEventListener('click', e => {
		let path = e.currentTarget.getAttribute('data-path')
		document.querySelector(`[data-target="${path}"]`).classList.toggle('open')
	})
})

