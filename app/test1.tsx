import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { tasksTest1 } from "../_data/tasksTest1";

export default function Test1() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);

  const q = tasksTest1[index];

  function choose(isCorrect: boolean) {
    if (isCorrect) setScore(score + 1);

    if (index + 1 < tasksTest1.length) {
      setIndex(index + 1);
    } else {
      alert(`Wynik: ${score + (isCorrect ? 1 : 0)} / ${tasksTest1.length}`);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Question {index + 1} of {tasksTest1.length}
      </Text>

      <Text style={styles.question}>{q.question}</Text>

      {q.answers.map((a: any, i: number) => (
        <TouchableOpacity
          key={i}
          style={styles.answer}
          onPress={() => choose(a.isCorrect)}
        >
          <Text>{a.content}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, flex: 1 },
  title: { fontSize: 18, fontWeight: "700", marginBottom: 20 },
  question: { fontSize: 18, marginBottom: 20 },
  answer: {
    backgroundColor: "#eee",
    padding: 14,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: "center",
  },
});
