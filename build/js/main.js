document.addEventListener("DOMContentLoaded", function(event) { 
    var lazyLoadInstance = new LazyLoad();
    // поиск на моб
    let headerMob = document.getElementById('header__mob');
    let searchMobOpen = document.getElementById('search-mob__icon');
    let searchClose = document.getElementById('search-mob__cancel');
    let searchMobInput = document.getElementById('search-mob-input'); 
    
    searchMobOpen.addEventListener('click', function(){
       headerMob.classList.add('search-active');
       searchMobInput.focus()
    })

    searchClose.addEventListener('click', function(){
        headerMob.classList.remove('search-active')
    })

    // бургер меню
    let mobNavBurger = document.getElementById('mob-nav-burger');
    let burger = document.getElementById('burger');
    let burgerClose = document.getElementById('burger-close');
    
    burger.addEventListener('click', function(){
        mobNavBurger.classList.add('active')
    })
    burgerClose.addEventListener('click', function(){
        mobNavBurger.classList.remove('active')
    })

    // свайп в лево
    let x;
    window.addEventListener('touchstart', e => x = e.changedTouches[0].clientX);
    window.addEventListener('touchend', e => e.changedTouches[0].clientX - x < -50 && swipeLeft());

    function swipeLeft() {
        // меню бергер
        mobNavBurger.classList.remove('active')
        // меню каталог
        mobNavCatalog.classList.remove('active')
    }

    // главная слайдер сверху
    const swiper = new Swiper('.swiper-top', {
        // Optional parameters
        loop: true,
        slidesPerView: 1,
        lazy: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    });

    // главная секция со слайдером
    // Params
	let sliderCount = document.querySelectorAll('.swiper-section')
	let options = {
	    init: false,
	    loop: true,
        lazy: true,
        slidesPerView: 1,
        spaceBetween: 0,
	    pagination: {
	    el: '.swiper-pagination',
	    },
        breakpoints: {
            // when window width is >= 320px
            640: {
                slidesPerView: 2,
                spaceBetween: 8,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 8,
            },
            // when window width is >= 480px
            1200: {
              slidesPerView: 4,
            },
            // when window width is >= 640px
            1450: {
              slidesPerView: 5,
              spaceBetween: 8,
            }
        }
	    
	}

    const swiperPrev = document.querySelectorAll('.swiper-button-prev')
    const swiperNext = document.querySelectorAll('.swiper-button-next')
    swiperPrev.forEach(el => el.addEventListener('click', e => {
        let parentIndex =  el.closest('.swiper-over').querySelector(".swiper-section").getAttribute('data-index');
        swiperArray[parentIndex ].slidePrev();
    }));
 
    swiperNext.forEach(el => el.addEventListener('click', e => {
        let parentIndex =  el.closest('.swiper-over').querySelector(".swiper-section").getAttribute('data-index');
        swiperArray[parentIndex].slideNext();
    }));

    swiperArray = []
	for(let i = 0; i < sliderCount.length; i++){
        sliderCount[i].setAttribute('data-index', i);
	    mySwiper = new Swiper(sliderCount[i], options);
	    mySwiper.init();

        swiperArray[i] = mySwiper; 
	}


    // .tovar-item__action-btn
    let tovarActionBtn = document.querySelectorAll('.tovar-item__action-btn')
    tovarActionBtn.forEach(el => el.addEventListener('click', function(){
        el.classList.toggle('active')
    }))


    // футер меню
    let footerNavTitle = document.querySelectorAll('.footer__nav__title')
    footerNavTitle.forEach(el =>el.addEventListener('click', function(){
        el.closest('.footer__nav').classList.toggle('active')
    }))

    // каталог на моб
    let catalogBtns = document.querySelectorAll('.catalog-btn')
    let mobNavCatalog = document.getElementById('mob-nav-catalog')
    let catalogCloseBtn = document.getElementById('catalog-close')
   
    catalogBtns.forEach(btn =>btn.addEventListener('click', function(){
       mobNavCatalog.classList.add('active')
    }))
    catalogCloseBtn.addEventListener('click', function(){
        mobNavCatalog.classList.remove('active')
    })

});