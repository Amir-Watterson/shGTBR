const resultDiv = document.getElementById('result');
const timerDiv = document.getElementById('timer');

function checkAnswer(isCorrect) {
    resultDiv.style.opacity = '0'; // Скрываем старый текст перед показом нового
    if (isCorrect) {
        resultDiv.innerText = 'Молодец, твои глаза также красивы как и звезды';
        resultDiv.style.color = '#4CAF50';
        resultDiv.style.animation = 'fadeInText 1s ease forwards';
        startCountdown();
    } else {
        resultDiv.innerText = 'Неправильно';
        resultDiv.style.color = '#FF0000';
        resultDiv.style.animation = 'fadeInText 1s ease forwards';
    }
}

function startCountdown() {
    let countdown = 5;
    timerDiv.innerText = `Переход через: ${countdown}`;

    const countdownInterval = setInterval(() => {
        countdown--;
        timerDiv.innerText = `Переход через: ${countdown}`;

        if (countdown === 0) {
            clearInterval(countdownInterval);
            window.location.href = '/Html/Flower/flower.html'; // Замените 'next-page.html' на нужный URL
        }
    }, 1000);
}
