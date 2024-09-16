document.addEventListener("DOMContentLoaded", function() {
    const row1 = document.getElementById("row1");
    const row2 = document.getElementById("row2");
    const row3 = document.getElementById("row3");

    const languages = [
        "Я люблю тебя (русский)",
        "I love you (английский)",
        "Te quiero (испанский)",
        "Je t'aime (французский)",
        "Ich liebe dich (немецкий)",
        "Ti amo (итальянский)",
        "Eu te amo (португальский)",
        "愛してる (японский)",
        "我爱你 (китайский)",
        "사랑해 (корейский)",
        "मैं तुमसे प्यार करता हूँ (хинди)",
        "أنا أحبك (арабский)",
        "Σ'αγαπώ (греческий)",
        "T'estimo (каталанский)",
        "Eu te amo (бразильский португальский)",
        "Jag älskar dig (шведский)",
        "Jeg elsker deg (норвежский)",
        "Jeg elsker dig (датский)",
        "Eu te amo (европейский португальский)",
        "Ik hou van jou (нидерландский)"
    ];

    const languagesRow1 = languages.slice(0, 7).join(" &#x2022; ");
    const languagesRow2 = languages.slice(7, 14).join(" &#x2022; ");
    const languagesRow3 = languages.slice(14, 20).join(" &#x2022; ");

    row1.innerHTML = languagesRow1;
    row2.innerHTML = languagesRow2;
    row3.innerHTML = languagesRow3;

    // Перенаправление на другую страницу через 10 секунд
    setTimeout(() => {
        window.location.href = 'https://example.com'; // Замените на нужный URL
    }, 10000);
});
