window.onload = function () {
    new Swiper("#swiper-1", {
        effect: "fade",
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        pagination: {
            el: "#swiper-1 .swiper-pagination",
            clickable: true,
        },
        lazyLoading: true,
        loop: true
    });

    const mobile_menu = document.querySelector('.mobile-nav');
    const menu_btn = document.querySelector('.hamburger');
    menu_btn.addEventListener('click', function() {
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
    })


}

