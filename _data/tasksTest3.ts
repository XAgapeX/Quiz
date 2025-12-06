import { shuffleAnswers } from "./shuffleAnswers";

export const tasksTest3 = [
  {
    question: "Podstawową jednostką budowy organizmów jest:",
    answers: shuffleAnswers([
      { content: "Komórka", isCorrect: true },
      { content: "Tkanka", isCorrect: false },
      { content: "Organ", isCorrect: false },
      { content: "Organella", isCorrect: false },
    ]),
    duration: 20,
  },
  {
    question: "Krew w organizmie transportuje głównie:",
    answers: shuffleAnswers([
      { content: "Tlen", isCorrect: true },
      { content: "Białka", isCorrect: false },
      { content: "Witaminę C", isCorrect: false },
      { content: "Włókna kolagenowe", isCorrect: false },
    ]),
    duration: 20,
  },
  {
    question: "DNA znajduje się głównie w:",
    answers: shuffleAnswers([
      { content: "Jądrze komórkowym", isCorrect: true },
      { content: "Mitochondriach", isCorrect: false },
      { content: "Rybosomach", isCorrect: false },
      { content: "Lizosomach", isCorrect: false },
    ]),
    duration: 20,
  },
  {
    question: "Rośliny produkują pokarm dzięki procesowi:",
    answers: shuffleAnswers([
      { content: "Fotosyntezy", isCorrect: true },
      { content: "Fermentacji", isCorrect: false },
      { content: "Oddychania", isCorrect: false },
      { content: "Mineralizacji", isCorrect: false },
    ]),
    duration: 20,
  },
  {
    question: "Człowiek posiada:",
    answers: shuffleAnswers([
      { content: "206 kości", isCorrect: true },
      { content: "180 kości", isCorrect: false },
      { content: "240 kości", isCorrect: false },
      { content: "120 kości", isCorrect: false },
    ]),
    duration: 20,
  },
];
