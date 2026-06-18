document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const cards = document.querySelectorAll('.carousel-card');
    if (!track || cards.length === 0) return;

    let index = 0;
    const cardWidth = 300; // 280px card + 20px gap

    function autoScroll() {
        index++;

        // Reset to first card if we've cycled through all
        if (index >= cards.length) {
            index = 0;
        }

        track.style.transition = "transform 0.5s ease-in-out";
        track.style.transform = `translateX(-${index * cardWidth}px)`;
    }

    // Scroll every 3 seconds
    setInterval(autoScroll, 3000);
});