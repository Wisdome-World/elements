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

const temperamentMapping = [
    ['Wind', 'Earth'], // Question 1
    ['Wind', 'Earth'], // Question 2
    ['Fire', 'Water'], // Question 3
    ['Fire', 'Water'], // Question 4
    ['Wind', 'Earth'], // Question 5
    ['Fire', 'Water'], // Question 6
    ['Wind', 'Earth'], // Question 7
    ['Fire', 'Water'], // Question 8
    ['Wind', 'Earth'], // Question 9
    ['Fire', 'Water'], // Question 10
    ['Fire', 'Water'], // Question 11
    ['Wind', 'Earth'], // Question 12
    ['Fire', 'Water'], // Question 13
    ['Wind', 'Earth'], // Question 14
    ['Wind', 'Earth'], // Question 15
    ['Fire', 'Water'], // Question 16
    ['Wind', 'Earth'], // Question 17
    ['Fire', 'Water'], // Question 18
    ['Wind', 'Earth'], // Question 19
    ['Fire', 'Water']  // Question 20
];

function calculateResult() {
    const temperamentCounts = {
        Wind: 0,
        Fire: 0,
        Earth: 0,
        Water: 0
    };
    // Calculate temperament counts based on answers and mapping
    answers.forEach((answer, index) => {
        if (answer === 'A') {
            temperamentCounts[temperamentMapping[index][0]]++;
        } else if (answer === 'B') {
            temperamentCounts[temperamentMapping[index][1]]++;
        }
    });

    // Determine the dominant temperament
    let dominantTemperament = '';
    let maxCount = -1; // Set to -1 to ensure any count will be higher initially

    for (const [temperament, count] of Object.entries(temperamentCounts)) {
        if (count > maxCount) {
            dominantTemperament = temperament;
            maxCount = count;
        }
    }

    return { dominantTemperament };
}

function displayResult(result) {
    const emojiMap = {
        'Wind': '💨',
        'Fire': '🔥',
        'Earth': '🌿',
        'Water': '💧'
    };
    const elementTranslation = {
        'Wind': 'אוויר',
        'Fire': 'אש',
        'Earth': 'אדמה',
        'Water': 'מים'
    };
    document.getElementById('quiz').innerHTML = `
        <div class="result-emoji">${emojiMap[result.dominantTemperament]}</div>
        <h3>${elementTranslation[result.dominantTemperament]}</h3>
    `;
}
