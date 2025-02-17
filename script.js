let currentQuestion = 1;
let questionIndex = 0;
let questionObj = {};
let questionArr = [];
let questionText = '';
let correctChoice = 0;
let correctChoices = 0;
let choicesTotal = 1;
let choiceNo = 1;
let choiceIndexOffset = 1;
let choiceStartIndex = 2;
let choiceIndex = 2;
let choiceText = '';
let choiceCount = 0;
let progress = 0;
let totalQuestions = questions.length;

let audioSuccess = new Audio('assets/audio/success-221935_PB.mp3');
let audioError = new Audio('assets/audio/ErrorToneBuzz_KF.wav');
let audioChamp = new Audio('assets/audio/ApplauseCheerSmall_KF.wav');

function init() {
    renderStartScreen;
}

function renderStartScreen() {
}

function startGame() {
    document.getElementById('startWrapper').style = 'display: none !important';
    document.getElementById('playWrapper').style = '';
    renderQuestion(0);
}

function renderQuestion(currentQuestion) {
    choiceCount = 0;
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
    let successInfoRef = document.getElementById('successInfo');
    successInfoRef.innerHTML = '';
    getQuestionArray(questionIndex);
    renderChoiceItems(choicesWrapperRef);
}

function renderChoiceItems(choicesWrapperRef) {
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

function updateProgressBar(currentQuestion) {
    progress = currentQuestion / totalQuestions * 100;
    let progressBarRef = document.getElementById('progressBar');
    progressBarRef.style = 'width: ' + progress + '%';
    progressBarRef.innerText = progress + '%';
    if(currentQuestion == totalQuestions) {
        setTimeout(function() {renderResultScreen(correctChoices);}, 3000);
    }
}

function getQuestionArray(questionIndex) {
    questionObj = questions[questionIndex];
    questionArr = Object.keys(questionObj);
}

function validateUserChoice(choiceNo) {
    choiceCount++;
    if(choiceCount == 1) {
        let choicesWrapperRef = document.getElementById('choicesWrapper');
        choicesWrapperRef.classList.add('disabled');
        let choiceWrapperRef = document.getElementById('choiceWrapper-' + choiceNo);
        let successInfoRef = document.getElementById('successInfo');
        let btnNextRef = document.getElementById('btnNext');
        btnNextRef.disabled = false;
        correctChoice = questionObj.correctChoice;
        if(correctChoice == choiceNo) {
            updatesOnCorrectChoice(choiceWrapperRef, successInfoRef);
        } else {
            updatesOnFalseChoice(choiceWrapperRef, successInfoRef, correctChoice);
        }
        updateProgressBar(currentQuestion++);
    }
}

function updatesOnCorrectChoice(choiceWrapperRef, successInfoRef) {
    correctChoices++;
    choiceWrapperRef.classList.add('bg-success');
    audioSuccess.play();
    successInfoRef.innerHTML = getQuestionSuccessInfoTemplate();
}

function updatesOnFalseChoice(choiceWrapperRef, successInfoRef, correctChoice) {
    choiceWrapperRef.classList.add('bg-danger');
    audioError.play();
    successInfoRef.innerHTML = getQuestionFalseInfoTemplate();
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
        updateProgressBar(currentQuestion)
        renderResultScreen(correctChoices);
    }
}

function renderResultScreen(correctChoices) {
    // let resultWrapperRef = document.getElementById('resultWrapper');
    // resultWrapperRef.style = '';
    document.getElementById('resultWrapper').style = '';
    let playWrapperRef = document.getElementById('playWrapper');
    playWrapperRef.style = 'display: none !important';
    let resultImgRef = document.getElementById('resultImg');
    let resultInfoRef = document.getElementById('resultInfo');
    if(correctChoices == totalQuestions) {
        resultImgRef.src = 'assets/img/trophy-champ.png';
        resultInfoRef.innerHTML = getResultInfoChampTemplate();
        audioChamp.play();
    } else {
        resultInfoRef.innerHTML = getResultInfoTemplate(correctChoices);
    }
}

function restartGame() {
    location.reload();
}