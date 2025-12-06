export function shuffleAnswers<T>(arr: T[]): T[] {
  return [...arr]
    .map(item => ({ sort: Math.random(), value: item }))
    .sort((a, b) => a.sort - b.sort)
    .map(obj => obj.value);
}
