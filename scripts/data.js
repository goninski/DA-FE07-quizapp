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

let questions = [
  {
    "question": "Frage 1 ?",
    "correctChoice": 1,
    "choice_1": "Auswahl 1",
    "choice_2": "Auswahl 2",
    "choice_3": "Auswahl 3",
    "choice_4": "Auswahl 4",
  },
  {
    "question": "Frage 2 ?",
    "correctChoice": 2,
    "choice_1": "Auswahl 1",
    "choice_2": "Auswahl 2",
    "choice_3": "Auswahl 3",
    // "choice_4": "Auswahl 4",
  },
  {
    "question": "Frage 3 ?",
    "correctChoice": 3,
    "choice_1": "Auswahl 1",
    "choice_2": "Auswahl 2",
    "choice_3": "Auswahl 3",
    // "choice_4": "Auswahl 4",
  },
  {
    "question": "Frage 4 ?",
    "correctChoice": 4,
    "choice_1": "Auswahl 1",
    "choice_2": "Auswahl 2",
    "choice_3": "Auswahl 3",
    "choice_4": "Auswahl 4",
    "choice_5": "Auswahl 5",
  }
];

let totalQuestions = questions.length;
