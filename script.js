const quizDB =
    [
        {
            question: "Q1 : Which is the highest mountain in the world?",
            a: "Annapurna",
            b: " Manaslu ",
            c: " Mount Everest",
            d: "Dhaulagiri",
            ans: "ans3"
        }, {
            question: "Q1 : Which is the largest river in the world?",
            a: "Amazon",
            b: "Nile ",
            c: "Yangtze",
            d: "Mississippi",
            ans: "ans2"
        }
    ];

const question = document.querySelector('.questions');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#Submit');

const answers = document.querySelector('.answer');

let questionCount = 0;
const loadQuestion = () => {
    const questionList = quizDB[questionCount];
    question.innerHTML = questionList.question;
    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;

}
loadQuestion();

const getCheckAnswer = () => {
    let answer;

    let curAnsElem = answer;
    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked) {
            answer = curAnsElem.Id;
        }
    });
    return answer;

};

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);
});