document.addEventListener("DOMContentLoaded", function () {
    var header = document.getElementById("main-header");
    let menu = document.getElementById("menu")
    window.addEventListener("scroll", function () {
        if (window.scrollY > 100) {
            // Когда прокрутка больше 100 пикселей, добавьте класс 'white' и удалите 'purple'
            header.classList.add('white');
            // menu.classList.add('white');
            header.classList.remove('menu-transparent');
            // menu.classList.remove('menu-transparent');

        } else {
            // В противном случае, добавьте класс 'purple' и удалите 'white'
            header.classList.add('menu-transparent');
            // menu.classList.add('menu-transparent');
            header.classList.remove('white');
            // menu.classList.remove('white');
        }
    });

    
});