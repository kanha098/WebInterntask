const carousel = document.getElementById('productCarousel');
let currentIndex = 0;

function changeProduct(direction) {
    const width = document.querySelector('.carousel-item').offsetWidth;
    currentIndex = (currentIndex + direction + carousel.children.length) % carousel.children.length;
    carousel.style.transform = `translateX(${-width * currentIndex}px)`;
}

setInterval(() => {
    changeProduct(1);
}, 3000);