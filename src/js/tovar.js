document.addEventListener("DOMContentLoaded", function(event) { 

    // слайдер товара
    var galleryThumbs = new Swiper(".gallery-thumbs", {
        direction: "horizontal",
        spaceBetween: 10,
        slidesPerView: 3,
        lazy: true,
        freeMode: false,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next--vertical',
            prevEl: '.swiper-button-prev--vertical',
        },
        breakpoints: {
        480: {
            direction: "vertical",
            slidesPerView: 4,
        }
        }
    });

    var galleryTop = new Swiper(".gallery-top", {
        direction: "horizontal",
        spaceBetween: 10,
        effect: "fade",
        lazy: true,
        pagination: {
            el: '.swiper-pagination2',
        },
        thumbs: {
            swiper: galleryThumbs
        }
    });

    // плашка купить товар
    let plashka = document.getElementById('tovar-fix')
    let tovarCart = document.getElementById('tovar-cart')
   
    let tovarActionBlock =  document.getElementById('tovar__action__block')
    tovarActionBlockPoint = tovarActionBlock.offsetTop + tovarActionBlock.clientHeight
  
    window.addEventListener('scroll', function(){
        if(window.scrollY > tovarActionBlockPoint){
            plashka.classList.add('active')
        }else{
            plashka.classList.remove('active')
        }
    })

    // добавить в избраное и сравнение
    let tovarActionBot = document.querySelectorAll('.tovar__action__bot button')
    tovarActionBot.forEach(el => el.addEventListener('click', function(){
        el.classList.toggle('active')
    }));


    // табы
    
    let tabsLinks = document.querySelectorAll('.tabs__link')

    tabsLinks.forEach(function(el, index){
        el.addEventListener('click', function(){
            if(!el.classList.contains('active')){
                // удалить классы у других
                let parentElements = el.closest('.tabs__links').querySelectorAll('.tabs__link');
                parentElements.forEach(function(el2, index2){
                    if(index2 != index){
                        el2.classList.remove('active')
                    }
                })
                let tabsContents = el.closest('.tabs').querySelectorAll('.tabs__content');
                tabsContents.forEach(function(el2, index2){
                    if(index2 != index){
                        el2.classList.remove('active')
                    }
                })

                // добавить класс нужному
                el.classList.add('active')
                tabsContents[index].classList.add('active')
            }
        })
    })


    // .btn-more
    let btnMore = document.querySelectorAll('.btn-more')
    btnMore.forEach(btn => btn.addEventListener('click', function(){
        btn.classList.toggle('active')
    }))
})
