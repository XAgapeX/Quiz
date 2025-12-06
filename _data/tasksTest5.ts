import { shuffleAnswers } from "./shuffleAnswers";

export const tasksTest5 = [
  {
    question: "Kto namalował 'Mona Lisę'?",
    answers: shuffleAnswers([
      { content: "Leonardo da Vinci", isCorrect: true },
      { content: "Claude Monet", isCorrect: false },
      { content: "Pablo Picasso", isCorrect: false },
      { content: "Vincent van Gogh", isCorrect: false },
    ]),
    duration: 20,
  },
  {
    question: "Który instrument ma klawisze?",
    answers: shuffleAnswers([
      { content: "Fortepian", isCorrect: true },
      { content: "Gitara", isCorrect: false },
      { content: "Skrzypce", isCorrect: false },
      { content: "Flet", isCorrect: false },
    ]),
    duration: 20,
  },
  {
    question: "Opera to forma:",
    answers: shuffleAnswers([
      { content: "Muzyczno-teatralna", isCorrect: true },
      { content: "Plastyczna", isCorrect: false },
      { content: "Baletowa", isCorrect: false },
      { content: "Filmowa", isCorrect: false },
    ]),
    duration: 20,
  },
  {
    question: "Kto napisał 'Dziady'?",
    answers: shuffleAnswers([
      { content: "Adam Mickiewicz", isCorrect: true },
      { content: "Juliusz Słowacki", isCorrect: false },
      { content: "Bolesław Prus", isCorrect: false },
      { content: "Henryk Sienkiewicz", isCorrect: false },
    ]),
    duration: 20,
  },
  {
    question: "Styl gotycki charakteryzował się:",
    answers: shuffleAnswers([
      { content: "Wysokimi strzelistymi formami", isCorrect: true },
      { content: "Niskimi okrągłymi kopułami", isCorrect: false },
      { content: "Minimalizmem", isCorrect: false },
      { content: "Motywami futurystycznymi", isCorrect: false },
    ]),
    duration: 20,
  },
];
