document.getElementById('scroll-left').addEventListener('click', function() {
    const container = document.querySelector('.trending-images');
    const scrollAmount = 200; 
    container.scrollBy({
        top: 0,
        left: -scrollAmount,
        behavior: 'smooth' 
    });
});

document.getElementById('scroll-right').addEventListener('click', function() {
    const container = document.querySelector('.trending-images');
    const scrollAmount = 200; 
    container.scrollBy({
        top: 0,
        left: scrollAmount,
        behavior: 'smooth' 
    });
});