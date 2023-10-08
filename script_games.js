const video = document.getElementById('video');
const questionBox = document.getElementById('question-box');
const questionText = document.getElementById('question-text');

// Define an array of questions and answers
const questions = [
    {
        question: 'Distance from SUN And MOON to the EARTH',
        timestamp: 1.2,
        correctAnswer: 'A',
        answers: [
            'A SUN : 93 million miles, MOON : 23,900 miles',
            'B SUN : 293 million miles, MOON : 24,900 miles',
            'C SUN : 73 million miles, MOON : 25,960 miles',
            'D SUN : 193 million miles, MOON : 26,800 miles',
        ],
    },

    {
        question: 'What is a lunar eclipse?',
        timestamp: 4,
        correctAnswer: 'B',
        answers: [
            'A  lunar eclipse is when the Moon passes between the Earth and the Sun, blocking the Sun\'s light.',
            'B   lunar eclipse is when the Earth passes between the Sun and the Moon, casting a shadow on the Moon.',
            'C   lunar eclipse is when the Moon turns blue in color.',
            'D   lunar eclipse is when the Moon disappears for a few seconds.',
        ],
    },
    {
        question: 'What is a solar eclipse?',
        timestamp: 9,
        correctAnswer: 'A',
        answers: [
            'A A solar eclipse is when the Moon passes between the Earth and the Sun, blocking the Sun\'s light.',
            'B A solar eclipse is when the Earth passes between the Sun and the Moon, casting a shadow on the Earth.',
            'C A solar eclipse is when the Moon turns blue in color.',
            'D A solar eclipse is when the Sun disappears for a few seconds.',
        ],
    },

    {
        question: 'What is a total solar eclipse?',
        timestamp: 17,
        correctAnswer: 'A',
        answers: [
            'A  When the Moon covers the Sun completely.',
            'B When the Sun disappears for a few minutes.',
            'C When the Earth comes between the Sun and the Moon.',
            'D  When the Moon partially covers the Sun.',
        ],
    },
    {
        question: 'What is the "path of totality" during a solar eclipse?',
        timestamp: 29,
        correctAnswer: 'B',
        answers: [
            'A It is the region on Earth where the Moon completely covers the Sun, leading to a total eclipse.',
            'B It is the trajectory the Sun follows during a solar eclipse.',
            'C It is the time when the Moon partially covers the Sun.',
            'D It is a term used to describe the orbit of the Moon around the Earth.',

            
        ],
    },
    {
        question: 'What is a partial solar eclipse?',
        timestamp: 39,
        correctAnswer: 'C',
        answers: [
            'A  It is when the Moon completely covers the Sun.',
            'B  It is when the Earth passes between the Sun and the Moon.',
            'C  It is when only a portion of the Sun is blocked by the Moon, creating a crescent shape.',
            'D  It is when the Moon turns blue during an eclipse.',

            
        ],
    },
    {
        question: 'What is an annular solar eclipse (angular eclipse)?',
        timestamp: 51,
        correctAnswer: 'A',
        answers: [
            'A It is when the Moon completely covers the Sun.',
            'B It is when the Earth passes between the Sun and the Moon.',
            'C It is when the Sun appears as a ring (annulus) around the edges of the Moon.',
            'D It is when the Moon turns red during an eclipse.',
        ],
    },
    {
        question: 'What is a hybrid solar eclipse?',
        timestamp: 70,
        correctAnswer: 'B',
        answers: [
            'A  It is when the Moon completely covers the Sun.',
            'B  It is when the Earth passes between the Sun and the Moon.',
            'C  It is when the eclipse appears as a total eclipse in some regions and an annular eclipse in others.',
            'D  It is when the Moon turns blue during an eclipse. ',
        ],
    },
    {
        question: 'What happens during a total solar eclipse?',
        timestamp: 88,
        correctAnswer: 'B',
        answers: [
            'A  It is when the Moon completely covers the Sun.',
            'B  It is when the Earth passes between the Sun and the Moon.',
            'C  It is when the Sun and the Moon align in a straight line.',
            'D  It is when the Moon turns red during an eclipse.',
        ],
    },
    {
        question: 'How do scientists predict eclipses?',
        timestamp: 98,
        correctAnswer: 'B',
        answers: [
            'A  Advanced telescopes',
            'B  Computer simulations and mathematical calculations',
            'C  Astrological charts.',
            'D  Weather patterns and lunar phases',
        ],
    },
];

// Rest of your code...


    


let currentQuestionIndex = 0;

// Function to display the next question
function displayNextQuestion() {
    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        questionText.textContent = currentQuestion.question;
        const answersList = document.getElementById('answers-list');
        answersList.innerHTML = ''; // Clear the previous answer choices
        currentQuestion.answers.forEach((answer, index) => {
            const li = document.createElement('li');
            const button = document.createElement('button');
            button.textContent = answer;
            button.setAttribute('onclick', `checkAnswer(this, '${String.fromCharCode(65 + index)}')`);
            li.appendChild(button);
            answersList.appendChild(li);
        });
        currentQuestionIndex++;
        questionBox.classList.add('active');
    } else {
        // No more questions, hide the question box
        questionBox.classList.remove('active');
    }
}


// Function to hide the question box
function hideQuestionBox() {
    questionBox.classList.remove('active');
}

// Function to check the selected answer
function checkAnswer(button, selectedAnswer) {
    const currentQuestion = questions[currentQuestionIndex - 1];
    if (selectedAnswer === currentQuestion.correctAnswer) {
        // Correct answer, hide question box and resume video
        hideQuestionBox();
        video.play();
    } else {
        // Wrong answer, add animation or feedback here
        alert('Incorrect answer. Try again.');
    }
}

// Listen for the video's time update event
video.addEventListener('timeupdate', function () {
    const currentTime = video.currentTime;
    const currentQuestion = questions[currentQuestionIndex];
    if (currentQuestion && currentTime >= currentQuestion.timestamp) {
        displayNextQuestion();
    }
});
// ... (previous code)

// Function to restart the quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    video.currentTime = 0; // Reset the video to the beginning
    displayNextQuestion();
}

// Function to go back to the home page
function goToHomePage() {
    window.location.href = 'home.html'; // Replace 'home.html' with the URL of your home page
}


// Listen for the video's ended event
video.addEventListener('ended', function () {
    // Display the restart and go home buttons when the video ends
    const buttonBox = document.getElementById('button-box');
    buttonBox.style.display = 'block';
    questionBox.style.display = 'none'; // Hide the question box when showing buttons
});
