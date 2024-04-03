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

const accordeinItems = document.querySelectorAll('.accordeon__triger');

function trigger() {
    accordeinItems.forEach((accordeinItem) => {
        accordeinItem.addEventListener('click', () => {
            accordeinItem.parentNode.classList.toggle('accordeon__item_active')
        })
    })
};

trigger();