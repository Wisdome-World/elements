let currentQuestion = 0;
const answers = [];

function nextQuestion(answer) {
    answers.push(answer);
    const questions = document.querySelectorAll('.question');
    questions[currentQuestion].classList.remove('active');
    currentQuestion++;
    if (currentQuestion < questions.length) {
        questions[currentQuestion].classList.add('active');
    } else {
        displayResult(calculateResult());
    }
}

function calculateResult() {
    // Placeholder for result calculation logic
    return { dominantTemperament: 'Air' }; // Example result
}

function displayResult(result) {
    const emojiMap = {
        'Air': '💨',
        'Fire': '🔥',
        'Earth': '🌿',
        'Water': '💧'
    };
    const elementTranslation = {
        'Air': 'אוויר',
        'Fire': 'אש',
        'Earth': 'אדמה',
        'Water': 'מים'
    };
    document.getElementById('quiz').innerHTML = `
        <div class="result-emoji">${emojiMap[result.dominantTemperament]}</div>
        <h3>${elementTranslation[result.dominantTemperament]}</h3>
    `;
}
