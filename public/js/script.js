new Swiper("#swiper-1", {
    effect: "fade",
    /*autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },*/
    pagination: {
        el: "#swiper-1 .swiper-pagination",
        clickable: true,
    },
    lazyLoading: true,
    loop: true
});