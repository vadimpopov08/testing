let userName = document.getElementById("userName")
let genders = document.getElementById("gender")
let sendButton = document.getElementById("sendButton")
let form = document.getElementById("form")
let test = document.querySelector(".test")
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
    {
        question: "Сколько будет 456*18 + 95*457",
        options: ["5678", "9889", "51623", "43415"],
        correctAnswer: "51623"
    },
    {
        question: "Сколько будет 455 + 457",
        options: ["912", "913", "918", "957"],
        correctAnswer: "912"
    },
    {
        question: "Сколько будет 458*7",
        options: ["3106", "3206", "3246", "8886"],
        correctAnswer: "3206"
    },
    // {
    //     question: "Сколько будет 458*7",
    //     input,
    //     correctAnswer: "3206"
    // },
]
sendButton.addEventListener('click', (event) => {
    console.log('OK');
    event.preventDefault();
    form.style.display = "none";
    test.classList.add("active")
    if (genders.value == "m") {
        let gender = "m"
    }
    else {
        let gender = "f"
    }
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
            // Получает переменную кнопку на которую кликнули:
            let target = event.target
            // Вызовем функцию проверки ответа и перехода к следующему вопросу (в аргумент функции передаём текст ответа):
            nextQuestion(target.textContent)
        }, { once: true })
    }

    // Функция для перехода к следующему вопросу

    function nextQuestion(answer) {
        // Если переданный ответ равен корректному то
        if (answer === questions[currentQuestion].correctAnswer) {
            // Увеличиваем на единицу количество верных ответов
            correctAnswers++;
        }
        // Переходим к следующему вопросу
        currentQuestion++;
        // Если номер текущего вопроса меньше количества вопросов, то отбражаем следующий вопрос
        if (currentQuestion < questions.length) {
            displayQuestion();
        }
        else {
            displayResult()
        }
    }

    // Функция отображения результата теста
    function displayResult() {
        let questionElement = document.getElementById("question")//Блок с вопросом
        const optionsElement = document.getElementById("options")//Блок с вариантами ответов
        const resultElement = document.getElementById("result")//Блок для отображения результатов
        questionElement.style.display = "none";
        optionsElement.style.display = "none";
        let mark = correctAnswers / questions.length * 100
        if (mark < 50) {
            mark = 2
        }
        else if (mark >= 50 && mark < 65) {
            mark = 3
        }

        else if (mark >= 65 && mark < 95) {
            mark = 4
        }
        else if (mark >= 95) {
            mark = 5
        }
        if (gender == "m") {
            if (mark == 2) {
                resultElement.textContent = `Дорогой ${userName.value}! У Вас правильных ответов: ${correctAnswers} из ${questions.length}. Оценка ${mark}. Попробуйте ещё раз!`
            }
            else {
                resultElement.textContent = `Дорогой ${userName.value}! У Вас правильных ответов: ${correctAnswers} из ${questions.length}. Оценка ${mark}`
            }
        }
        else {
            if (mark == 2) {
                resultElement.textContent = `Дорогая ${userName.value}! У Вас правильных ответов: ${correctAnswers} из ${questions.length}. Оценка ${mark}. Попробуйте ещё раз!`
            }
            else {
                resultElement.textContent = `Дорогая ${userName.value}! У Вас правильных ответов: ${correctAnswers} из ${questions.length}. Оценка ${mark}`
            }
        }
        // неоааааааааааааааааааааааааааааааааааааааааааааааааааааафукефуке
    }

    displayQuestion();
})


let wrapper = document.querySelector('.wrapper')
let backgrounds = ["url(../img/2.jpg)", "url(../img/3.jpg)", "url(../img/4.jpg)", "url(../img/1.jpg)"]

let i = 0

setInterval(() => {
    wrapper.style.backgroundImage = backgrounds[i];
    i++;
    if (i >= backgrounds.length) {
        i = 0
    }
}, 3000)