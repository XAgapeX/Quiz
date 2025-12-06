import { shuffleAnswers } from "./shuffleAnswers";

export const tasksTest1 = [
  {
    question: "Który wódz po śmierci Gajusza Mariusza prowadził wojnę domową z Sullą?",
    answers: shuffleAnswers([
      { content: "Lucjusz Cynna", isCorrect: true },
      { content: "Juliusz Cezar", isCorrect: false },
      { content: "Lucjusz Murena", isCorrect: false },
      { content: "Marek Krassus", isCorrect: false },
    ]),
    duration: 30,
  },
  {
    question: "W którym roku upadło Cesarstwo Zachodniorzymskie?",
    answers: shuffleAnswers([
      { content: "476", isCorrect: true },
      { content: "410", isCorrect: false },
      { content: "568", isCorrect: false },
      { content: "395", isCorrect: false },
    ]),
    duration: 30,
  },
  {
    question: "Kto był pierwszym królem Polski?",
    answers: shuffleAnswers([
      { content: "Bolesław Chrobry", isCorrect: true },
      { content: "Mieszko I", isCorrect: false },
      { content: "Kazimierz Odnowiciel", isCorrect: false },
      { content: "Ziemowit", isCorrect: false },
    ]),
    duration: 30,
  },
  {
    question: "Która bitwa rozstrzygnęła losy II wojny światowej?",
    answers: shuffleAnswers([
      { content: "Bitwa pod Stalingradem", isCorrect: true },
      { content: "Bitwa o Midway", isCorrect: false },
      { content: "Bitwa o Anglię", isCorrect: false },
      { content: "Bitwa pod Kurskiem", isCorrect: false },
    ]),
    duration: 30,
  },
  {
    question: "Kto był władcą Macedonii, znanym z ogromnych podbojów?",
    answers: shuffleAnswers([
      { content: "Aleksander Wielki", isCorrect: true },
      { content: "Filip II", isCorrect: false },
      { content: "Antygon Jednooki", isCorrect: false },
      { content: "Seleukos Nikator", isCorrect: false },
    ]),
    duration: 30,
  },
];
