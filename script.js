function init() {
    renderQuestion(0);
}

function renderQuestion(currentQuestion) {
    currentQuestion++;
    questionIndex = currentQuestion - 1;
    renderQuestionText(questionIndex);
    renderChoices(questionIndex);
    renderQuestionNav(questionIndex);
}

function renderQuestionText(questionIndex) {
    let questionRef = document.getElementById('question');
    questionRef.innerHTML = questions[questionIndex].question;
}

function renderChoices(questionIndex) {
    let choicesWrapperRef = document.getElementById('choicesWrapper');
    choicesWrapperRef.innerHTML = '';
    getQuestionArray(questionIndex);
    for (choiceIndex = choiceStartIndex; choiceIndex < questionArr.length; choiceIndex++) {
        choiceNo = choiceIndex - choiceIndexOffset;
        choiceText = questionObj['choice_' + choiceNo];
        choicesWrapperRef.innerHTML += getChoicesTemplate(choiceNo, choiceText);
        let choiceWrapperRef = document.getElementById('choiceWrapper-' + choiceNo);
        choicesWrapperRef.classList.remove('disabled');
        choiceWrapperRef.classList.remove('bg-success');
        choiceWrapperRef.classList.remove('bg-danger');
        choiceWrapperRef.classList.remove('anim-pulse');
    }
}

function renderQuestionNav(questionIndex) {
    let questionNavRef = document.getElementById('questionNav');
    questionNavRef.innerHTML = getQuestionNavTemplate(questionIndex + 1);
}

function getQuestionArray(questionIndex) {
    questionObj = questions[questionIndex];
    questionArr = Object.keys(questionObj);
}

function validateUserChoice(choiceNo) {
    let choiceWrapperRef = document.getElementById('choiceWrapper-' + choiceNo);
    correctChoice = questionObj.correctChoice;
    if(correctChoice == choiceNo) {
        updatesOnCorrectChoice(choiceWrapperRef);
    } else {
        updatesOnFalseChoice(choiceWrapperRef, correctChoice);
    }
    let btnNextRef = document.getElementById('btnNext');
    btnNextRef.disabled = false;
}

function updatesOnCorrectChoice(choiceWrapperRef) {
    let choicesWrapperRef = document.getElementById('choicesWrapper');
    choicesWrapperRef.classList.add('disabled');
    choiceWrapperRef.classList.add('bg-success');
}

function updatesOnFalseChoice(choiceWrapperRef, correctChoice) {
    choiceWrapperRef.classList.add('bg-danger');
    let correctChoiceWrapperRef = document.getElementById('choiceWrapper-' + correctChoice);
    setTimeout(function() {
        correctChoiceWrapperRef.classList.add('bg-success')
        correctChoiceWrapperRef.classList.add('anim-pulse')
    }, 400);
}

function showNextQuestion(currentQuestion) {
    if(currentQuestion < totalQuestions) {
        renderQuestion(currentQuestion);
    } else {
        renderResultScreen();
    }
}

function renderResultScreen() {
    let resultWrapperRef = document.getElementById('resultWrapper');
    resultWrapperRef.style = '';
    let playWrapperRef = document.getElementById('playWrapper');
    playWrapperRef.style = 'display: none !important';
}