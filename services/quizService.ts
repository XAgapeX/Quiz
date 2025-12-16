const BASE_URL = "https://tgryl.pl/quiz";

export const fetchTests = async () => {
  const res = await fetch(`${BASE_URL}/tests`);
  return res.json();
};

export const fetchTestById = async (id: string) => {
  const res = await fetch(`${BASE_URL}/test/${id}`);
  const data = await res.json();

  return {
    name: data.name,
    tasks: data.tasks.map((task: any) => ({
      question: task.question,
      answers: task.answers.map((a: any) => ({
        content: a.content,
        isCorrect: a.isCorrect,
      })),
    })),
  };
};
