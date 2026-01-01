import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import _ from "lodash";
import { useEffect, useRef, useState } from "react";
import {
  Alert,
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { shuffleAnswers } from "../../_data/shuffleAnswers";
import { fetchTestById } from "../../services/quizService";

type Answer = {
  content: string;
  isCorrect: boolean;
};

type Task = {
  question: string;
  answers: Answer[];
};

const QUESTION_TIME = 30;

export default function TestScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [testType, setTestType] = useState("");
  const [timeLeft, setTimeLeft] = useState(QUESTION_TIME);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progress = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (!id) return;

    fetchTestById(id)
      .then((data) => {
        const shuffledTasks = _.shuffle(
          data.tasks.map((task: Task) => ({
            ...task,
            answers: shuffleAnswers(task.answers),
          }))
        );

        setTasks(shuffledTasks);
        setTestType(data.name);
        setIndex(0);
        setScore(0);
      })
      .catch(() => {
        Alert.alert("Błąd", "Nie udało się pobrać testu");
        router.replace("/");
      });
  }, [id]);

  useEffect(() => {
    if (tasks.length === 0) return;

    setTimeLeft(QUESTION_TIME);

    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    progress.setValue(1);

    Animated.timing(progress, {
      toValue: 0,
      duration: QUESTION_TIME * 1000,
      useNativeDriver: false,
    }).start();

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current!);

          if (index + 1 < tasks.length) {
            setIndex((prevIndex) => prevIndex + 1);
          } else {
            finishQuiz(score);
          }

          return QUESTION_TIME;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [index, tasks]);

  function finishQuiz(finalScore: number) {
    fetch("https://tgryl.pl/quiz/result", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nick: "Katarzyna",
        score: finalScore,
        total: tasks.length,
        type: testType || "quiz",
      }),
    }).finally(() => {
      Alert.alert(
        "Koniec testu",
        `Wynik: ${finalScore} / ${tasks.length}`,
        [{ text: "OK", onPress: () => router.replace("/") }]
      );
    });
  }

  function handleAnswer(isCorrect: boolean) {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    const newScore = score + (isCorrect ? 1 : 0);
    setScore(newScore);

    if (index + 1 < tasks.length) {
      setIndex((prev) => prev + 1);
    } else {
      finishQuiz(newScore);
    }
  }

  if (tasks.length === 0) {
    return (
      <View style={styles.center}>
        <Text>Ładowanie testu...</Text>
      </View>
    );
  }

  const q = tasks[index];

  return (
    <>
      <Stack.Screen options={{ title: testType || "Test" }} />

      <View style={styles.container}>
        <Text style={styles.title}>
          Question {index + 1} / {tasks.length}
        </Text>

        <Text style={styles.timer}>Pozostało: {timeLeft}s</Text>

        <View style={styles.progressBackground}>
          <Animated.View
            style={[
              styles.progressBar,
              {
                width: progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: ["0%", "100%"],
                }),
              },
            ]}
          />
        </View>

        <Text style={styles.question}>{q.question}</Text>

        {q.answers.map((a, i) => (
          <TouchableOpacity
            key={i}
            style={styles.answer}
            onPress={() => handleAnswer(a.isCorrect)}
          >
            <Text style={styles.answerText}>{a.content}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f9faf8",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    color: "#adc6a4",
  },
  timer: {
    fontSize: 16,
    fontWeight: "700",
    color: "#d9534f",
    marginBottom: 6,
  },
  progressBackground: {
    height: 8,
    backgroundColor: "#e6efe3",
    borderRadius: 4,
    overflow: "hidden",
    marginBottom: 14,
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#adc6a4",
  },
  question: {
    fontSize: 18,
    marginBottom: 20,
    color: "#444",
  },
  answer: {
    padding: 14,
    borderWidth: 1,
    borderColor: "#adc6a4",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    marginBottom: 12,
  },
  answerText: {
    color: "#333",
  },
});
