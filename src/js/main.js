(function() {
    // бургер меню
    const burger = document.querySelector('.burger')
    const sidebar = document.querySelector('.sidebar')
    burger.onclick = function() {
        burger.classList.toggle("active");
        sidebar.classList.toggle("active");
    }



})();


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