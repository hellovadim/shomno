window.addEventListener('DOMContentLoaded', function(){

    
    // // Slider

    const slides = document.querySelectorAll('.says__slider-item'),
          prev = document.querySelector('.says__btn-prev'),
          next = document.querySelector('.says__btn-next');
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
            item.classList.add('animate__animated', 'animate__backInDown')
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
   
    const indicators = document.querySelector('.indicators'),
          dots = [];
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
        cursor: pointer;
        `;
        if (i == 0) {
            dot.style.backgroundColor = '#6eeee4'
        }
        indicators.append(dot);
        dots.push(dot);
    };

  

    // Images

    const imgPopup = document.createElement('div'),
          closeImg = document.createElement('p'),
          workSection = document.querySelector('.works__wrapper'),
          bigImage = document.createElement('img');

    function closeImage(){
        imgPopup.style.display = 'none';
        document.body.style.overflow = '';
    }

    imgPopup.classList.add('popup','animate__animated', 'animate__fadeInUp'/* 'animated-show' */);
    workSection.appendChild(imgPopup);

    imgPopup.style.cssText = `
        justify-content: center;
        align-items: center;
        display: none;`
    closeImg.style.cssText = `
        position : absolute;
        top: 26%;
        right: 37%;
        color: #d1d1d1;
        cursor: pointer;
        font-size: 36px;    
    `
    
    closeImg.innerHTML = '&#10006;';
    

    bigImage.style.cssText = `
        width: 20%;
        height: 30%;`
    
    imgPopup.appendChild(bigImage);
    imgPopup.appendChild(closeImg);
    
    workSection.addEventListener('click', (e)=>{

        e.preventDefault();

        let target = e.target;

        if(target && target.classList.contains('works__img')){
            imgPopup.style.display = 'flex';
            const path = target.parentNode.getAttribute('href');
            bigImage.setAttribute('src', path);
            document.body.style.overflow = 'hidden';
        };
        if (target && target.matches('div.popup')){
            closeImage();
        };
    });
    closeImg.addEventListener('click', ()=>{
        closeImage();
    });
    
    // Services

    const blockTrigger = document.querySelectorAll('.services__toggle');


    for (trigger of blockTrigger){
        trigger.addEventListener('click', function(){
            let block = this.closest('.services__item');
            let fontBlock = block.querySelector('.services__font');
            let backBlock = block.querySelector('.services__back');
           
            if (backBlock.classList.contains('hide')){
                backBlock.classList.remove('hide');
                backBlock.classList.add('active','animate__animated', 'animate__fadeInRight');
                fontBlock.classList.add('hide')
                this.classList.add( 'close','animate__animated', 'animate__bounceInRight');
                this.innerHTML = '&#10006;';
            }else{
                fontBlock.classList.remove('hide');
                fontBlock.classList.add('active', 'animate__animated', 'animate__fadeInLeft');
                backBlock.classList.add('hide');
                backBlock.classList.remove('active');
                this.innerHTML = 'know more &rarr;'
                this.classList.remove('close','animate__animated', 'animate__bounceInRight');
            }
        })
    };

    // Burger Menu

    const burger = document.querySelector('.main__burger'),
          menu = document.querySelector('.hide__menu'),
          menuItems = document.querySelectorAll('.hide__menu-links');

    burger.addEventListener('click', ()=>{
        burger.classList.toggle('main__burger-active');
        menu.classList.toggle('hide__menu-active');
        
    });
    menuItems.forEach((links)=>{
        links.addEventListener('click', ()=>{ 
            burger.classList.toggle('main__burger-active');
            menu.classList.toggle('hide__menu-active');
        })
    });

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
    };

    // Scrolling

    const upElem = document.querySelector('.pageup');

    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 900) {
            upElem.style.opacity = '1';
        } else {
            upElem.style.opacity = '0';
        }
        
    });
    upElem.addEventListener('click', ()=>{
        scroll();
    });

    function scroll (){
        let links = document.querySelectorAll('[href^="#"]'),
        speed = 0.2;
    
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            let widthTop = document.documentElement.scrollTop,
                hash = this.hash,
                toBlock = document.querySelector(hash).getBoundingClientRect().top,
                start = null;

            requestAnimationFrame(step);

            function step(time) {
                if (start === null) {
                    start = time;
                }

                let progress = time - start,
                    r = (toBlock < 0 ? Math.max(widthTop - progress/speed, widthTop + toBlock) : Math.min(widthTop + progress/speed, widthTop + toBlock));

                    document.documentElement.scrollTo(0, r);

                if (r != widthTop + toBlock) {
                    requestAnimationFrame(step);
                } else {
                    location.hash = hash;
                }
            }
        });
    });
}
scroll();
 
    
});