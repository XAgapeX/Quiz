import { shuffleAnswers } from "./shuffleAnswers";

export const tasksTest4 = [
  {
    question: "Jednostką informacji jest:",
    answers: shuffleAnswers([
      { content: "Bit", isCorrect: true },
      { content: "Piksel", isCorrect: false },
      { content: "Bajt", isCorrect: false },
      { content: "Herz", isCorrect: false },
    ]),
    duration: 20,
  },
  {
    question: "HTML służy do:",
    answers: shuffleAnswers([
      { content: "Tworzenia stron internetowych", isCorrect: true },
      { content: "Obróbki grafiki", isCorrect: false },
      { content: "Programowania robotów", isCorrect: false },
      { content: "Tworzenia dźwięku", isCorrect: false },
    ]),
    duration: 20,
  },
  {
    question: "Najpopularniejszym systemem operacyjnym na PC jest:",
    answers: shuffleAnswers([
      { content: "Windows", isCorrect: true },
      { content: "Linux", isCorrect: false },
      { content: "MacOS", isCorrect: false },
      { content: "ChromeOS", isCorrect: false },
    ]),
    duration: 20,
  },
  {
    question: "Procesor to:",
    answers: shuffleAnswers([
      { content: "Jednostka wykonawcza komputera", isCorrect: true },
      { content: "Pamięć trwała", isCorrect: false },
      { content: "Urządzenie grafiki", isCorrect: false },
      { content: "Sterownik USB", isCorrect: false },
    ]),
    duration: 20,
  },
  {
    question: "Sieć Internet powstała w:",
    answers: shuffleAnswers([
      { content: "1969", isCorrect: true },
      { content: "1984", isCorrect: false },
      { content: "1999", isCorrect: false },
      { content: "1955", isCorrect: false },
    ]),
    duration: 20,
  },
];
