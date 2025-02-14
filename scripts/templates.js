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

function getQuestionSuccessInfoTemplate() {
    return `<b class="correct text-success">Super, korrekte Antwort !</b>`;
}

function getQuestionFalseInfoTemplate() {
    return `<b class="false text-danger">ohh, leider falsche Antwort !</b>`;
}

function getResultInfoTemplate(correctChoices) {
    return `<div>Du hast <b>${correctChoices}</b> von ${totalQuestions} Fragen korrekt beantwortet</div>`;
}

function getResultInfoChampTemplate() {
    return `
        <b class="champ fs-3 mb-3">** Glückwunsch **</b>
        <b>Du hast alle Antworten korrekt beantwortet</b>
    `;
}
