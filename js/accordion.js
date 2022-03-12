document.addEventListener('DOMContentLoaded', () => {
	const accordions = document.querySelectorAll('.accordion__item');

	accordions.forEach(el => {
		el.addEventListener('click', (e) => {
			const self = e.currentTarget;
			const content = self.querySelector('.accordion__content');

			if (self.classList.contains('open')) {
				accordions.forEach(elem => {
					elem.classList.remove('open');
					elem.querySelector('.accordion__content').style.maxHeight = null;
				})
			} else {
				accordions.forEach(elem => {
					elem.classList.remove('open');
					elem.querySelector('.accordion__content').style.maxHeight = null;
					self.classList.add('open');
					content.style.maxHeight = content.scrollHeight + 'px';
				})					
			}			
		});
	});
});