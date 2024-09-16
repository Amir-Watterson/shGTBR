function checkCompatibility() {
    const progress = document.getElementById('progress');
    const percentage = document.getElementById('percentage');
    let width = 1;
    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                nextPage();
            }, 5000); // Переход на следующую страницу через 5 секунд после достижения 75%
        } else {
            width++;
            progress.style.width = width + '%';
            percentage.innerText = width + '%';
        }
    }, 50); // Скорость заполнения шкалы
}

function nextPage() {
    window.location.href = '/result/result.html'; // Замените 'next-page.html' на нужный URL
}
