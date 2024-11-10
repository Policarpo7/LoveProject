let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    const offset = -index * 100; 
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides; 
    showSlide(currentIndex);
}

setInterval(nextSlide, 3000);

function updateCounter() {
    const startDate = new Date('2021-03-21T00:00:00'); 
    const now = new Date();
    const diff = now - startDate;

    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('years').innerText = `${years} anos`;
    document.getElementById('days').innerText = `${days} dias`;
    document.getElementById('hours').innerText = `${hours} horas`;
    document.getElementById('minutes').innerText = `${minutes} minutos`;
    document.getElementById('seconds').innerText = `${seconds} segundos`;
}

setInterval(updateCounter, 1000);
