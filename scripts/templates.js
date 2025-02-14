function getChoicesTemplate(choiceNo, choiceText) {
    return `
        <div id="choiceWrapper-${choiceNo}" class="choiceWrapper d-flex flex-row gap-3 border rounded p-2 align-items-center" onclick="validateUserChoice(${choiceNo})">
            <div class="choice-no bg-dark text-light py-1 px-3 rounded">${choiceNo}</div>
            <div class="choice-text">${choiceText}</div>
        </div>
    `;   
}

function getQuestionNavTemplate(currentQuestion) {
    return `
        <div id="questionPos" class="d-flex gap-2">
        Frage <b>${currentQuestion}</b>von<b>${totalQuestions}</b>
        </div>
        <button id="btnNext" class="btn btn-dark" onclick="(showNextQuestion(${currentQuestion}))" disabled>Nächste Frage</button>
        </div>
    `;
}
