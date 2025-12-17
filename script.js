// script.js for Book Project
document.getElementById('genImgBtn').addEventListener('click', generateImage);
document.getElementById('loadTrendsBtn').addEventListener('click', loadTrends);
document.getElementById('addRowBtn').addEventListener('click', addRow);
document.getElementById('sendBtn').addEventListener('click', sendMessage);

function generateImage() {
    const prompt = document.getElementById('imgPrompt').value || 'Кітап, кітапхана, жылы жарық';
    const url = `https://dummyimage.com/900x400/000/fff&text=${encodeURIComponent(prompt)}`;
    const container = document.getElementById('generatedImage');
    container.innerHTML = `<img src="${url}" class="img-fluid rounded mt-3" alt="Generated image">`;
}

function loadTrends() {
    const demoData = [
        "1. Atomic Habits — James Clear",
        "2. The Psychology of Money — Morgan Housel",
        "3. The Midnight Library — Matt Haig",
        "4. The Subtle Art of Not Giving a F*ck — M. Manson",
        "5. Think and Grow Rich — Napoleon Hill"
    ];

    let html = "<b>2024 үздік бестселлерлері:</b><br><br>";
    demoData.forEach(item => html += item + "<br>");
    document.getElementById('trendBox').innerHTML = html;
}

let counter = 1;
function addRow() {
    const genres = ["Фантастика", "Роман", "Өзін-өзі дамыту", "Драма", "Ғылыми"];
    let genre = genres[Math.floor(Math.random() * genres.length)];
    let table = document.querySelector('#dynamicTable tbody');
    table.innerHTML += `
        <tr>
            <td>${counter}</td>
            <td>Кітап ${counter}</td>
            <td>${genre}</td>
        </tr>`;
    counter++;
}

function sendMessage() {
    let input = document.getElementById('chatInput').value;
    if (!input.trim()) return;
    let box = document.getElementById('chatBox');
    const userDiv = document.createElement('div');
    userDiv.className = 'user-msg';
    userDiv.textContent = 'Пайдаланушы: ' + input;
    box.appendChild(userDiv);

    let answer = 'Сұрағыңызды түсіндім. Кітаптар туралы көмектесе аламын.';
    const q = input.toLowerCase();
    if (q.includes('роман')) answer = 'Роман жанры бойынша: Пауло Коэльо, Э.Хемингуэй, Джейн Остин ұсынылады.';
    if (q.includes('мотива') || q.includes('мотивация') || q.includes('өзін-өзі')) answer = "Мотивация бойынша: 'Atomic Habits', 'Mindset', 'Grit' ұсынылады.";
    if (q.includes('сәлем')) answer = 'Сәлем! Қандай кітап жанрын ұнатасыз?';

    const botDiv = document.createElement('div');
    botDiv.className = 'bot-msg';
    botDiv.textContent = 'Бот: ' + answer;
    box.appendChild(botDiv);
    box.scrollTop = box.scrollHeight;
    document.getElementById('chatInput').value = '';
}
