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
        button.addEventListener('click', function(event) {
            button.closest('.calendar__child').classList.toggle("active");
            slideToggle(button.closest('.calendar__child').querySelector('.calendar__item__h'), 200)
        })
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