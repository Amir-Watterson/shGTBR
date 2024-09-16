window.addEventListener('load', function() {
    const audio = document.createElement('audio');
    audio.src = '/Music/first.mp3'; // Укажите путь к вашему аудиофайлу
    audio.autoplay = true;
    audio.loop = true;
    audio.volume = 100; // Установите желаемую громкость
    document.body.appendChild(audio);
});