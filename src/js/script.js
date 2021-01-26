

window.addEventListener('DOMContentLoaded', function(){

    
    // Slider

    const slides = document.querySelectorAll('.says__slider-item'),
          prev = document.querySelector('.says__btn-prev'),
          next = document.querySelector('.says__btn-next'),
          slider = document.querySelector('.says__slider');
    let slideIndex = 1;
    
    showSlides(slideIndex);

    function showSlides (n) {
        if(n > slides.length){
            slideIndex = 1;
        }
        if (n < 1){
            slideIndex = slides.length
        }

        slides.forEach(item => item.style.display = 'none');
        slides[slideIndex - 1].style.display = 'flex';
        
        
        
    }
    
    function plusSlides (n) {
        showSlides(slideIndex += n);
    }

    prev.addEventListener('click', function(){
        plusSlides(-1);
        
        dots.forEach(dot => dot.style.backgroundColor = '#d0d0d0');
        dots[slideIndex - 1].style.backgroundColor = '#6eeee4';
    });

    next.addEventListener('click', function(){
        plusSlides(1);
        dots.forEach(dot => dot.style.backgroundColor = '#d0d0d0');
        dots[slideIndex - 1].style.backgroundColor = '#6eeee4'
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
        border-radius: 50%;
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
    
    // =========

    const fontsBlock = document.querySelectorAll('.services__font'),
          backBlock = document.querySelectorAll('.services__back'),
          parentBlock = document.querySelector('.services__wrapper'),
          blockTrigger = document.querySelectorAll('.services__toggle');

    function showHideBlock(i){
        fontsBlock.forEach((font) =>{
            font.classList.toggle('active')
        })
        backBlock.forEach((back) =>{
            back.classList.toggle('active')
        })
    }
   

    blockTrigger.forEach((item) =>{
        item.addEventListener('click', function(e){
            e.preventDefault();
            showHideBlock();
        })
    })


    // Burger Menu

    const burger = document.querySelector('.main__burger');
    const menu = document.querySelector('.hide__menu');

    burger.addEventListener('click', ()=>{
        burger.classList.toggle('main__burger-active');
        menu.classList.toggle('hide__menu-active');
    })
});