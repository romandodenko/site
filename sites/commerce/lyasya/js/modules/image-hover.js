"use strict"

export function imageHover() {
	const products = document.querySelectorAll('.catalog__item');
	const body = document.querySelector("body");

	if (products) {
		products.forEach(el => {
			let currentProduct = el;
			const imageSwitchItems = currentProduct.querySelectorAll('.image-switch__item');
			const imagePagination = currentProduct.querySelector('.image-pagination');
			if (body.offsetWidth >= 991) {
				if (imageSwitchItems.length > 1) {
					imageSwitchItems.forEach((el, index) => {
						el.setAttribute('data-index', index);
						imagePagination.innerHTML += `<li class="image-pagination__item ${index == 0 ? 'image-pagination__item--active' : ''}" data-index="${index}"></li>`;
						el.addEventListener('mouseenter', (e) => {
							currentProduct.querySelectorAll('.image-pagination__item').forEach(el => {
								el.classList.remove('image-pagination__item--active')
							});
							currentProduct.querySelector(`.image-pagination__item[data-index="${e.currentTarget.dataset.index}"]`).classList.add('image-pagination__item--active');
						});

						el.addEventListener('mouseleave', (e) => {
							currentProduct.querySelectorAll('.image-pagination__item').forEach(el => {
								el.classList.remove('image-pagination__item--active')
							});
							currentProduct.querySelector(`.image-pagination__item[data-index="0"]`).classList.add('image-pagination__item--active');
						});
					});
				}
			} else if (body.offsetWidth <= 991) {
				if (imageSwitchItems.length > 1) {
					imageSwitchItems.forEach((el, index) => {
						el.setAttribute('data-index', index);
						imagePagination.innerHTML += `<li class="image-pagination__item ${index == 0 ? 'image-pagination__item--active' : ''}" data-index="${index}"></li>`;
						el.addEventListener('click', (e) => {
							currentProduct.querySelectorAll('.image-pagination__item').forEach(el => {
								el.classList.remove('image-pagination__item--active')
							});
							currentProduct.querySelector(`.image-pagination__item[data-index="${e.currentTarget.dataset.index}"]`).classList.add('image-pagination__item--active');
						});
					});
				}
			}
		});
	}
}