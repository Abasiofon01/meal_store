
const button = document.querySelector('#menu-button');
const menu = document.querySelector('#menu');

button.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active')
}

let shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick = () => {
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active')
}

let loginForm = document.querySelector('.login-form');
document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active')
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
}

window.onscroll = () => {
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active')


}

var swiper = new Swiper(".menu-slider", {
    loop: true,
    spaceBetween: 15,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".review-slider", {
    loop: true,
    spaceBetween: 15,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        },
    },
});


// const header = document.querySelector('#header');
// let stickyTop = nav.offsetTop;

// function fixedTop() {
//     if (window.scrollY >= navTop) {
//         nav.classList.add('fixed');
//     } else {
//         nav.classList.remove('fixed');
//     }
// }

// window.addEventListener('scroll', fixedTop);
