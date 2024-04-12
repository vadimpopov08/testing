// Массив с вопросами, вариантами ответов и правильными ответами
let questions = [
    {
        question: "Сколько будет (4/459)/(7/2295)",
        options: ["17 7/9", "1 8/9", "2 6/7", "78"],
        correctAnswer: "2 6/7"
    },
    {
        question: "Сколько будет 457*8+64/5",
        options: ["365,6", "3668,8", "3643,2", "3784"],
        correctAnswer: "3668,8"
    },
    {
        question: "Сколько будет 2145*8 - 2295*4",
        options: ["17001", "7980", "9395", "459"],
        correctAnswer: "7980"
    },
]

let currentQuestion = 0; // Текущий вопрос
let correctAnswers = 0; // Количество правильных ответов
// Функция для отображения текущего вопроса и вариантов ответа
function displayQuestion() {
    let questionElement = document.getElementById("question"); //Получим блок куда размещать вопрос
    questionElement.textContent = ` Вопрос ${currentQuestion + 1}: ${questions[currentQuestion].question}`
    // Получим блоки кнопок
    let optionsElement = document.getElementById("options")
    // Очистим блок с кнопками
    optionsElement.innerHTML = ""

    //  Массив ответов
    let optionsArray = questions[currentQuestion].options;

    // Создать кнопки с вариантами ответов и привязать к ним функцию nextQuestion;
    optionsArray.forEach((option) => {
        let button = document.createElement('button')
        button.classList.add('option')
        optionsElement.append(button)
        button.textContent = option;
        // При клике на блок с кнопками

    })
    optionsElement.addEventListener('click', (event) => {
        // Получает переменную кнопку на которую кликнули
        let target = event.target
        // Вызовем функцию проверки ответа и перехода к следующему вопросу (в аргумент функции передаём текст ответа):
        nextQuestion(target.textContent)
    })
}

displayQuestion();

let wrapper = document.querySelector('.wrapper')
let backgrounds = ["url(../img/2.jpg)", "url(../img/3.jpg)", "url(../img/4.jpg)", "url(../img/1.jpg)"]

let i = 0

setInterval(() => {
    wrapper.style.backgroundImage = backgrounds[i];
    i++;
    if (i >= backgrounds.length) {
        i = 0
    }
}, 1000)