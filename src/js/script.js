window.addEventListener('DOMContentLoaded', function(){
    // slider
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

    });

    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = +width.slice(0, width.length - 2) * (slides.length - 1);
        } else {
            offset -= +width.slice(0, width.length - 2);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

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
        `;
        if (i == 0) {
            dot.style.cssText =`
            width: 11px;
            height: 10px;
            background-color: #71f6eb;
            border-radius: 3px;
            margin-right: 2px;`;
        }
        indicators.append(dot);
        dots.push(dot);
    }

});