import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { fetchTests } from "../services/quizService";

type Test = {
  id: string;
  name: string;
  description: string;
};

export default function TestsScreen() {
  const [tests, setTests] = useState<Test[]>([]);

  useEffect(() => {
    fetchTests().then(setTests);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dostępne testy</Text>

      <FlatList
        data={tests}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link href={`../test/${item.id}`} asChild>
            <TouchableOpacity style={styles.card}>
              <Text style={styles.name}>{item.name}</Text>
              <Text>{item.description}</Text>
            </TouchableOpacity>
          </Link>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 22, fontWeight: "700", marginBottom: 16 },
  card: {
    backgroundColor: "#eee",
    padding: 16,
    borderRadius: 10,
    marginBottom: 10,
  },
  name: { fontSize: 18, fontWeight: "700" },
});
