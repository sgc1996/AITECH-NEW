const slider = document.getElementById('slider');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentIndex = 0;
const totalBoxes = slider.children.length;

function updateSliderPosition() {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 1023) {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        prevBtn.style.display = 'block';
        nextBtn.style.display = 'block';
    } else {
        slider.style.transform = 'translateX(0)';
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
        currentIndex = 0;  // Reset to the first slide on larger screens
    }
}

function showPrev() {
    if (currentIndex > 0 && window.innerWidth <= 1023) {
        currentIndex--;
        updateSliderPosition();
    }
}

function showNext() {
    if (currentIndex < totalBoxes - 1 && window.innerWidth <= 1023) {
        currentIndex++;
        updateSliderPosition();
    }
}

prevBtn.addEventListener('click', showPrev);
nextBtn.addEventListener('click', showNext);

window.addEventListener('resize', updateSliderPosition);

// Initialize the slider on page load
updateSliderPosition();