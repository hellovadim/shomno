window.addEventListener('DOMContentLoaded', function(){
    // slider
    let slideIndex = 0;
    let offset = 0;

    const slides = document.querySelectorAll('.says__slider-item'),
    next = document.querySelector('.says__btn-next'),
    prev = document.querySelector('.says__btn-prev'),
    slidesWrapper = document.querySelector('.says__slider'),
    width =  window.getComputedStyle(slidesWrapper).width,
    slidesField = document.querySelector('.says__slider-inner'),
    slider = document.querySelector('.says__slider');

    
    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';

    slidesWrapper.style.overflow = 'hidden';

    slides.forEach(slide => {
        slide.style.width = width;
    });

    next.addEventListener('click', () => {
        if (offset == (+width.slice(0, width.length - 2) * (slides.length - 1))) {
            offset = 0;
        } else {
            offset += +width.slice(0, width.length - 2);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;
        
        if (slideIndex == slides.length - 1) {
            slideIndex = 0;
        } else {
            slideIndex++;
        }
        dots.forEach(dot => dot.style.backgroundColor = '#d0d0d0');
        dots[slideIndex].style.backgroundColor = '#6eeee4'

    });

    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = +width.slice(0, width.length - 2) * (slides.length - 1);
        } else {
            offset -= +width.slice(0, width.length - 2);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == 0) {
            slideIndex = slides.length - 1;
        } else {
            slideIndex--;
        }
        dots.forEach(dot => dot.style.backgroundColor = '#d0d0d0');
        dots[slideIndex].style.backgroundColor = '#6eeee4'

    });
    const indicators = document.createElement('ol'),
          dots = [];
    indicators.classList.add('carousel-indicators');
    indicators.style.cssText = `
        position: absolute;
        left: -45px;
        bottom: -4px;
        z-index: 15;
        display: flex;
        justify-content: center;
        margin-right: 15%;
        margin-left: 15%;
        list-style: none;
    `; 
    slider.append(indicators);
    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.style.cssText = `
        width: 11px;
        height: 10px;
        background-color: #d0d0d0;
        border-radius: 3px;
        margin-right: 2px;
        transition: .2s all;
        `;
        if (i == 0) {
            dot.style.backgroundColor = '#6eeee4'
        }
        indicators.append(dot);
        dots.push(dot);
    };

    // Images

    const imgPopup = document.createElement('div'),
          workSection = document.querySelector('.works__wrapper'),
          bigImage = document.createElement('img');

    imgPopup.classList.add('popup', 'animated-show');
    workSection.appendChild(imgPopup);

    imgPopup.style.cssText = `
    justify-content: center;
    align-items: center;
    display: none;`

    bigImage.style.cssText = `
    width: 40%;
    height: 60%;`
    
    imgPopup.appendChild(bigImage);

    workSection.addEventListener('click', (e)=>{

        e.preventDefault();

        let target = e.target;

        if(target && target.classList.contains('works__img')){
            imgPopup.style.display = 'flex';
            const path = target.parentNode.getAttribute('href');
            bigImage.setAttribute('src', path);
        };
        if (target && target.matches('div.popup')){
            imgPopup.style.display = 'none';
        };
    })

});