const row = document.querySelector('.container-carousel');
const animes = document.querySelectorAll('.anime');

const arrowLeft = document.getElementById('arrow-left');
const arrowRight = document.getElementById('arrow-right');

document.querySelector('.indicator').style.display = 'none';

arrowRight.addEventListener('click', () => {
    row.scrollLeft += row.offsetWidth;

    const indicatorActive = document.querySelector('.indicator .active');
    if(indicatorActive.nextSibling) {
        indicatorActive.nextSibling.classList.add('active');
        indicatorActive.classList.remove('active');
    }
})

arrowLeft.addEventListener('click', () => {
    row.scrollLeft -= row.offsetWidth;

    const indicatorActive = document.querySelector('.indicator .active');
    if(indicatorActive.previousSibling) {
        indicatorActive.previousSibling.classList.add('active');
        indicatorActive.classList.remove('active');
    }
})

const numberPage = Math.ceil(animes.length / 5);
for(let i = 0; i < numberPage; i++) {
    const indicator = document.createElement('button');

    if(i === 0){
		indicator.classList.add('active');
	}
    
    document.querySelector('.indicator').appendChild(indicator);
    indicator.addEventListener('click', (e) => {
        row.scrollLeft = i * row.offsetWidth;

        document.querySelector('.indicator .active').classList.remove('active');
        e.target.classList.add('active');
    });
}

animes.forEach((anime) => {
	anime.addEventListener('mouseenter', (e) => {
		document.querySelector('.indicator').style.display = '';
	});
});

const containerRecommended = document.querySelector('.container-recommended');

containerRecommended.addEventListener('mouseleave', () => {
    document.querySelector('.indicator').style.display = 'none';
});