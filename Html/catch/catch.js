const gameContainer = document.getElementById('gameContainer');
const scoreDisplay = document.getElementById('score');
const gameOverDisplay = document.getElementById('gameOver');
const timerDisplay = document.getElementById('timer');

let score = 0;
let fallingInterval;
let countdownInterval;
const images = ['https://th.bing.com/th/id/R.8c39298ffc8a8c4f5860d20dc09645a1?rik=cP8z7b%2fbxZXlnQ&riu=http%3a%2f%2fgalerey-room.ru%2fimages%2f062336_1395285816.png&ehk=47hDQiJdP1tY00AQLmXx0HGH7w2Gyg2DfUlcP0wAe4Y%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1']; // Add your image sources here

function createFallingImage() {
    const img = document.createElement('img');
    img.src = images[Math.floor(Math.random() * images.length)];
    img.classList.add('falling-image');
    img.style.left = Math.random() * (window.innerWidth - 50) + 'px';
    img.style.top = '-50px';

    img.addEventListener('click', catchImage);
    gameContainer.appendChild(img);

    const fallSpeed = Math.random() * 3 + 2; // Увеличена скорость падения
    const fallInterval = setInterval(() => {
        const top = parseFloat(img.style.top);
        if (top > window.innerHeight) {
            gameContainer.removeChild(img);
            clearInterval(fallInterval);
        } else {
            img.style.top = top + fallSpeed + 'px';
        }
    }, 20);
}

function catchImage(event) {
    score++;
    scoreDisplay.innerText = `Поймано: ${score}`;
    event.target.removeEventListener('click', catchImage);
    gameContainer.removeChild(event.target);

    if (score >= 22) {
        endGame();
    }
}

function endGame() {
    clearInterval(fallingInterval);
    gameOverDisplay.style.display = 'block';
    let countdown = 5;
    timerDisplay.innerText = countdown;

    countdownInterval = setInterval(() => {
        countdown--;
        timerDisplay.innerText = countdown;
        if (countdown === 0) {
            clearInterval(countdownInterval);
            window.location.href = '/Html/find/find.html'; // Change this to your next page URL
        }
    }, 1000);
}

fallingInterval = setInterval(createFallingImage, 800); // Падение изображений каждые 800 мс
