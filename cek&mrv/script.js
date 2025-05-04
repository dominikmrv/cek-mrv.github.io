// 2. Butonu seÃ§
const movingBtn = document.getElementById('movingBtn');

// Fare butonun Ã¼zerine geldiÄŸinde rastgele bir pozisyona taÅŸÄ±
movingBtn.addEventListener('mouseenter', () => {
    // Rastgele X ve Y pozisyonlarÄ± hesapla
    const randomX = Math.random() * 600 - 400; // -100 ile +100 arasÄ±nda
    const randomY = Math.random() * 600 - 400;

    // Butonun pozisyonunu deÄŸiÅŸtir
    movingBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
});