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

        slides.forEach((item )=> {
            item.style.display = 'none';
        });
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
        z-index: 10;
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
          itemBlock = document.querySelectorAll('.services__item'),
          blockTrigger = document.querySelectorAll('.services__toggle');


    function showHideBlock(){
        fontsBlock.forEach((font) =>{
            font.classList.toggle('active')
        })
        backBlock.forEach((back) =>{
            back.classList.toggle('active')
        })
    }
   

//     


    // Burger Menu

    const burger = document.querySelector('.main__burger'),
          menu = document.querySelector('.hide__menu'),
          menuItems = document.querySelectorAll('.hide__menu-links');

    burger.addEventListener('click', ()=>{
        burger.classList.toggle('main__burger-active');
        menu.classList.toggle('hide__menu-active');
        
    })
    menuItems.forEach((links)=>{
        links.addEventListener('click', ()=>{ 
            burger.classList.toggle('main__burger-active');
            menu.classList.toggle('hide__menu-active');
        })
    })

    // Prompt team

    const teamBlocks = document.querySelectorAll('.team__items'),
          promptBlocks = document.querySelectorAll('.team__prompt');
          

    for(let i = 0; i < teamBlocks.length; i++){
        teamBlocks[i].addEventListener('mouseover', ()=>{
            let show = promptBlocks[i];
            show.style.transition = '0.5s all';
            show.style.opacity = '1';
        })
        teamBlocks[i].addEventListener('mouseout', ()=>{
            let show = promptBlocks[i];
            show.style.transition = '0.5s all';
            show.style.opacity = '0';
        })
    }

});