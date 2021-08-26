(function() {
    // бургер меню
    const burger = document.querySelector('.burger')
    const sidebar = document.querySelector('.sidebar')
    burger.onclick = function() {
        burger.classList.toggle("active");
        sidebar.classList.toggle("active");
    }

    if (document.querySelectorAll(".select").length) {
        var els = document.querySelectorAll(".select");
        els.forEach(function(select) {
            NiceSelect.bind(select);
        });
    }

    // календарь
    if (document.getElementById('calendar')) {
        const elem = document.getElementById('calendar');
        const datepicker = new Datepicker(elem, {
            language: 'ru',
            daysOfWeekHighlighted: [0, 6]
        });
    }

    let calendarBtn = document.querySelectorAll('.calendar-more-btn')
    for (let button of calendarBtn) {
        button.addEventListener('click', () => {
            button.closest('.calendar__child').classList.toggle("active");
            slideToggle(button.closest('.calendar__child').querySelector('.calendar__item__h'), 200)
        })
    }

    // контакты

    // валидация формы
    // пример валидации формы с id contact-form
    if (document.getElementById("contact-form")) {
        let form = document.getElementById("contact-form");

        let pristine = new Pristine(form);

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            var valid = pristine.validate();
            if (valid) {
                fadeOut(form)
                fadeIn(document.getElementById('contact-form-susses'), 'block')
            }
        });
    }

    //востановить пароль
    if (document.getElementById("forgot")) {
        let form = document.getElementById("forgot");

        let pristine = new Pristine(form);

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            let valid = pristine.validate();
        });
    }

    // help
    let helpItems = document.querySelectorAll('.help__right__item')
    let helpContent = document.querySelectorAll('.help__content')
    for (let i = 0; i < helpItems.length; i++) {
        helpItems[i].setAttribute('data-index', i);
    }

    // слушает клик
    for (let helpItem of helpItems) {
        helpItem.addEventListener('click', (e) => {
            [].forEach.call(helpItems, function(el) {
                el.classList.remove('active')
            });
            [].forEach.call(helpContent, function(el) {
                el.classList.remove('active')
            });
            helpContent[helpItem.getAttribute('data-index')].classList.add('active')
            helpItem.classList.add('active')

            // прокрутка к контенту на моб
            if (window.innerWidth < 768) {
                let contentOffsetTop = helpContent[helpItem.getAttribute('data-index')].offsetTop
                window.scrollTo({
                    top: contentOffsetTop - 50,
                    behavior: "smooth"
                })
            }
        })
    }

    // normbasa-d
    let otchetTreeItems = document.querySelectorAll('.itemfor')
    let otchetItems = document.querySelectorAll('.otchet__item')
    for (let otchetTreeItem of otchetTreeItems) {
        otchetTreeItem.addEventListener('click', function() {
            [].forEach.call(otchetTreeItems, function(el) {
                el.classList.remove('active')
            });
            [].forEach.call(otchetItems, function(el) {
                el.classList.remove('active')
            });

            otchetTreeItem.classList.add('active')
            otchetItems[otchetTreeItem.getAttribute('data-for')].classList.add('active')

        })
    }

    // спойлер
    document.querySelectorAll('.spoiler-head').forEach(el => el.addEventListener('click', function() {
        let nextBody = el.closest('.spoiler-wrap').querySelector('.spoiler-body')
        slideToggle(nextBody, 200)
    }));

    // выбор редакции
    if (document.querySelector('.norm-select__top')) {
        let normSelectTop = document.querySelector('.norm-select__top')
        normSelectTop.addEventListener('click', function() {
            normSelectTop.closest('.norm-select').classList.toggle('active')
        })

        let outElem = document.querySelector('.norm-select');
        document.addEventListener('click', function(event) {
            let isClickInside = outElem.contains(event.target);
            if (!isClickInside) {
                outElem.classList.remove('active')
            }
        });

        let normSelectData = document.querySelector('.norm-select-data')
        let letNormSelectLi = document.querySelectorAll('.norm-select__bot li')
        letNormSelectLi.forEach(el => el.addEventListener('click', function() {
            normSelectData.textContent = el.textContent
            outElem.classList.remove('active')
        }))
    }

    // otchet__tree2
    let treeLevel = document.querySelectorAll('.tree__item__wrap')
    for (el of treeLevel) {
        el.addEventListener('click', function() {
            let parent = this.closest('.tree__item')
            if (parent.classList.contains('active')) {
                parent.classList.remove('active')
            } else {
                otherParent = parent.closest('ul').querySelectorAll('.tree__item');
                [].forEach.call(otherParent, function(el) {
                    el.classList.remove('active')
                })
                parent.classList.add('active')
            }
        })
    }

    let treeFors = document.querySelectorAll('.tree__for')
    for (treeFor of treeFors) {
        treeFor.addEventListener('click', function() {
            [].forEach.call(otchetItems, function(el) {
                el.classList.remove('active')
            })
            otchetItems[this.getAttribute('data-for')].classList.add('active')
        })
    }

    if(document.querySelector('.glide')){
        new Glide('.glide',{
            type: 'carousel',
            startAt: 0,
            perView: 1
        }).mount()
    }

    if(document.querySelector('.calendar__slider')){
        new Glide('.calendar__slider',{
            type: 'slider',
            startAt: 0,
            perView: 10,
            dragThreshold: false,
            rewind: true,
            breakpoints: {
                1350: {
                    perView: 8
                },
                1199: {
                    perView: 12
                },
                767: {
                    perView: 7
                },
                424: {
                    perView: 6
                }
            }
            
        }).mount()
    }

    // filter-thead
    let filtertheads = document.querySelectorAll('.filter-thead')
    filtertheads.forEach(el => el.addEventListener('click', function(){
        el.classList.toggle('active')
    }))


     // персональный календарь
     if (document.getElementById('calendar2')) {
        let myDate = new Date('2022/01/01').toISOString();
        let myDate2 = new Date('2022/01/03').toISOString();
        let myDateArr = [myDate, myDate2]

        const elem = document.getElementById('calendar2');
        const datepicker = new Datepicker(elem, {
            language: 'ru',
            beforeShowDay: function(date) {
                for(let i = 0; i < myDateArr.length; i++){
                    if (date.toISOString() == myDateArr[i]) {
                    return {enabled: true, classes: 'mydate'}
                    }
                }
              }
        });
    }


    
    if(document.getElementById('choose_otchet')){
        let choose_otchet = document.getElementById('choose_otchet')
        let choose_otchet__close = document.getElementById('choose_otchet__close')
    
        document.getElementById('open-otchet-list').addEventListener('click', ()=>{
            fadeIn(choose_otchet)
        })
    
        choose_otchet__close.addEventListener('click', ()=>{
            fadeOut(choose_otchet)
        })
    
        choose_otchet.addEventListener('click', (e)=>{
            if(!e.target.closest('.choose_otchet__wrap')){
                fadeOut(choose_otchet)
            }
        })
    }

    let izbItem = document.querySelectorAll('.remove-izb-item')
    izbItem.forEach(el => el.addEventListener('click', ()=>{
        el.closest('.izbranoe__item').classList.add('remove')
        setTimeout(()=>{
            el.closest('.izbranoe__item').remove()
        }, 300)
    }))

    // архив валют админ
    if(document.getElementById('arhiv-val-admin-calendar')){
        const elem = document.getElementById('arhiv-val-admin-calendar');
        const datepicker = new Datepicker(elem, {
            language: 'ru',
            format: 'dd.mm.yyyy'
        });
    }

})();

// пользовательские функции
function addVal() {
    let infoLabel = document.querySelector('#add-info')
    infoLabel.style.display = "block";
    infoLabel.classList.add('fadein')
    setTimeout(function() {
        infoLabel.classList.remove('fadein')
        setTimeout(function() {
            infoLabel.style.display = "none";
        }, 300)

    }, 2000)
}

function slideToggle(el, duration, callback) {
    if (el.clientHeight === 0) {
        _s(el, duration, callback, true);
    } else {
        _s(el, duration, callback);
    }
}

function slideUp(el, duration, callback) {
    _s(el, duration, callback);
}

function slideDown(el, duration, callback) {
    _s(el, duration, callback, true);
}

function _s(el, duration, callback, isDown) {

    if (typeof duration === 'undefined') duration = 400;
    if (typeof isDown === 'undefined') isDown = false;

    el.style.overflow = "hidden";
    if (isDown) el.style.display = "block";

    var elStyles = window.getComputedStyle(el);

    var elHeight = parseFloat(elStyles.getPropertyValue('height'));
    var elPaddingTop = parseFloat(elStyles.getPropertyValue('padding-top'));
    var elPaddingBottom = parseFloat(elStyles.getPropertyValue('padding-bottom'));
    var elMarginTop = parseFloat(elStyles.getPropertyValue('margin-top'));
    var elMarginBottom = parseFloat(elStyles.getPropertyValue('margin-bottom'));

    var stepHeight = elHeight / duration;
    var stepPaddingTop = elPaddingTop / duration;
    var stepPaddingBottom = elPaddingBottom / duration;
    var stepMarginTop = elMarginTop / duration;
    var stepMarginBottom = elMarginBottom / duration;

    var start;

    function step(timestamp) {

        if (start === undefined) start = timestamp;

        var elapsed = timestamp - start;

        if (isDown) {
            el.style.height = (stepHeight * elapsed) + "px";
            el.style.paddingTop = (stepPaddingTop * elapsed) + "px";
            el.style.paddingBottom = (stepPaddingBottom * elapsed) + "px";
            el.style.marginTop = (stepMarginTop * elapsed) + "px";
            el.style.marginBottom = (stepMarginBottom * elapsed) + "px";
        } else {
            el.style.height = elHeight - (stepHeight * elapsed) + "px";
            el.style.paddingTop = elPaddingTop - (stepPaddingTop * elapsed) + "px";
            el.style.paddingBottom = elPaddingBottom - (stepPaddingBottom * elapsed) + "px";
            el.style.marginTop = elMarginTop - (stepMarginTop * elapsed) + "px";
            el.style.marginBottom = elMarginBottom - (stepMarginBottom * elapsed) + "px";
        }

        if (elapsed >= duration) {
            el.style.height = "";
            el.style.paddingTop = "";
            el.style.paddingBottom = "";
            el.style.marginTop = "";
            el.style.marginBottom = "";
            el.style.overflow = "";
            if (!isDown) el.style.display = "none";
            if (typeof callback === 'function') callback();
        } else {
            window.requestAnimationFrame(step);
        }
    }

    window.requestAnimationFrame(step);
}


function fadeIn(el, display) {
    el.style.opacity = 0;
    el.style.display = display || 'block';
    (function fade() {
        var val = parseFloat(el.style.opacity);
        if (!((val += .1) > 1)) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
}

function fadeOut(el) {
    el.style.opacity = 1;
    (function fade() {
        if ((el.style.opacity -= .1) < 0) {
            el.style.display = 'none';
        } else {
            requestAnimationFrame(fade);
        }
    })();
};