document.addEventListener("DOMContentLoaded", function(event) {

    // логика фильтра
    let filterTitles = document.querySelectorAll('.filter__title')
    filterTitles.forEach(el => el.addEventListener('click', function(){
        el.closest('.filter__row').classList.toggle('active')
    }))

    // range slider
    let slider = document.getElementById('slider');
  
    noUiSlider.create(slider, {
        start: [Number(slider.getAttribute('data-min')), Number(slider.getAttribute('data-max'))],
        connect: true,
        range: {
            'min': Number(slider.getAttribute('data-min')),
            'max': Number(slider.getAttribute('data-max'))
        },
        step: Number(slider.getAttribute('data-step'))
    });

	let slider2 = document.getElementById('slider2');
  
    noUiSlider.create(slider2, {
        start: [Number(slider.getAttribute('data-min')), Number(slider.getAttribute('data-max'))],
        connect: true,
        range: {
            'min': Number(slider.getAttribute('data-min')),
            'max': Number(slider.getAttribute('data-max'))
        },
        step: Number(slider.getAttribute('data-step'))
    });

    slider.noUiSlider.on('update', updateValue);
	slider2.noUiSlider.on('update', updateValue);

    function updateValue(values, handle, unencoded, tap, positions, noUiSlider) {
      let leftInput = noUiSlider.target.closest('.range').querySelector('.range-input-left')
      let rightInput = noUiSlider.target.closest('.range').querySelector('.range-input-right')
      leftInput.value = Math.round(values[0]).toLocaleString('ru-RU')
      rightInput.value = Math.round(values[1]).toLocaleString('ru-RU')
    }

    // фильтр
    let filterMob = document.getElementById('filter-mob')
    let filter =  document.getElementById('filter')
    let filterClose = document.getElementById('filter__close')
    
    filterMob.addEventListener('click', function(){
        filter.classList.toggle('active')
    })

    filterClose.addEventListener('click', function(){
        filter.classList.remove('active')
    })


})