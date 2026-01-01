import AsyncStorage from "@react-native-async-storage/async-storage";
import NetInfo from "@react-native-community/netinfo";

const BASE_URL = "https://tgryl.pl/quiz";

const TESTS_CACHE_KEY = "tests_cache";
const TESTS_LAST_FETCH_KEY = "tests_last_fetch";
const ONE_DAY = 24 * 60 * 60 * 1000;

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

export const fetchTestsDaily = async () => {
  const netState = await NetInfo.fetch();
  const lastFetch = await AsyncStorage.getItem(TESTS_LAST_FETCH_KEY);
  const cached = await AsyncStorage.getItem(TESTS_CACHE_KEY);
  const now = Date.now();

  if (!netState.isConnected) {
    console.log("Brak internetu — testy z AsyncStorage");
    return cached ? JSON.parse(cached) : [];
  }

  if (cached && lastFetch && now - Number(lastFetch) < ONE_DAY) {
    console.log("Testy z AsyncStorage (cache)");
    return JSON.parse(cached);
  }

  console.log("Pobieranie testów z API (raz dziennie)");
  const res = await fetch(`${BASE_URL}/tests`);
  const tests = await res.json();

  await AsyncStorage.setItem(TESTS_CACHE_KEY, JSON.stringify(tests));
  await AsyncStorage.setItem(TESTS_LAST_FETCH_KEY, now.toString());

  return tests;
}

export const getCachedTests = async () => {
  const data = await AsyncStorage.getItem(TESTS_CACHE_KEY);
  return data ? JSON.parse(data) : [];
};
