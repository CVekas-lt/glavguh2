(function() {
    // бургер меню
    const burger = document.querySelector('.burger')
    const sidebar = document.querySelector('.sidebar')
    burger.onclick = function() {
        burger.classList.toggle("active");
        sidebar.classList.toggle("active");
    }
})();