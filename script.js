document.getElementById('scroll-left').addEventListener('click', function() {
    const container = document.querySelector('.trending-images');
    const scrollAmount = 200; // Adjust this value to change the scroll amount
    container.scrollBy({
        top: 0,
        left: -scrollAmount,
        behavior: 'smooth' // Smooth scrolling
    });
});

document.getElementById('scroll-right').addEventListener('click', function() {
    const container = document.querySelector('.trending-images');
    const scrollAmount = 200; // Adjust this value to change the scroll amount
    container.scrollBy({
        top: 0,
        left: scrollAmount,
        behavior: 'smooth' // Smooth scrolling
    });
});