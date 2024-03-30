const swiperTop = new Swiper('.top__swiper', {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


const swiperAbout = new Swiper(".about__swiper", {
    slidesPerView: 4,
    spaceBetween: 20,
    freeMode: true,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
});