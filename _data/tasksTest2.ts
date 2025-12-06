import { shuffleAnswers } from "./shuffleAnswers";

export const tasksTest2 = [
  {
    question: "Najwyższy szczyt Afryki to:",
    answers: shuffleAnswers([
      { content: "Kilimandżaro", isCorrect: true },
      { content: "Rwenzori", isCorrect: false },
      { content: "Atlas", isCorrect: false },
      { content: "Mount Kenya", isCorrect: false },
    ]),
    duration: 20,
  },
  {
    question: "Największy ocean świata to:",
    answers: shuffleAnswers([
      { content: "Ocean Spokojny", isCorrect: true },
      { content: "Ocean Atlantycki", isCorrect: false },
      { content: "Ocean Indyjski", isCorrect: false },
      { content: "Ocean Arktyczny", isCorrect: false },
    ]),
    duration: 20,
  },
  {
    question: "Które państwo ma największą populację?",
    answers: shuffleAnswers([
      { content: "Indie", isCorrect: true },
      { content: "Chiny", isCorrect: false },
      { content: "USA", isCorrect: false },
      { content: "Indonezja", isCorrect: false },
    ]),
    duration: 20,
  },
  {
    question: "Stolicą Kanady jest:",
    answers: shuffleAnswers([
      { content: "Ottawa", isCorrect: true },
      { content: "Toronto", isCorrect: false },
      { content: "Montreal", isCorrect: false },
      { content: "Vancouver", isCorrect: false },
    ]),
    duration: 20,
  },
  {
    question: "Najdłuższa rzeka świata to:",
    answers: shuffleAnswers([
      { content: "Nil", isCorrect: true },
      { content: "Amazonka", isCorrect: false },
      { content: "Jangcy", isCorrect: false },
      { content: "Missisipi", isCorrect: false },
    ]),
    duration: 20,
  },
];
