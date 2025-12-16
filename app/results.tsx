import React, { useCallback, useEffect, useState } from "react";
import {
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from "react-native";

type Result = {
  nick: string;
  score: number;
  total: number;
  type: string;
  createdOn: string;
};

export default function ResultsScreen() {
  const [results, setResults] = useState<Result[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  const fetchResults = async () => {
    try {
      const response = await fetch(
        "https://tgryl.pl/quiz/results?last=20"
      );
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error("Błąd pobierania wyników", error);
    }
  };

  useEffect(() => {
    fetchResults();
  }, []);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await fetchResults();
    setRefreshing(false);
  }, []);

  const renderItem = ({ item }: { item: Result }) => (
    <View style={styles.card}>
      <Text style={styles.nick}>{item.nick}</Text>

      <Text style={styles.text}>
        Wynik: <Text style={styles.bold}>{item.score}/{item.total}</Text>
      </Text>

      <Text style={styles.text}>
        Kategoria: <Text style={styles.bold}>{item.type}</Text>
      </Text>

      <Text style={styles.date}>
        {item.createdOn?.split("T")[0]}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Results</Text>

      <FlatList
        data={results}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f9faf8",
  },

  title: {
    fontSize: 22,
    fontFamily: "Poppins_600SemiBold",
    color: "#adc6a4",
    marginBottom: 16,
    textAlign: "center",
  },

  card: {
    backgroundColor: "#ffffff",
    padding: 16,
    marginBottom: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#adc6a4",
  },

  nick: {
    fontSize: 18,
    fontFamily: "Poppins_600SemiBold",
    marginBottom: 6,
    color: "#333",
  },

  text: {
    fontFamily: "Nunito_400Regular",
    color: "#555",
    marginBottom: 2,
  },

  bold: {
    fontFamily: "Nunito_700Bold",
    color: "#333",
  },

  date: {
    marginTop: 6,
    fontFamily: "Nunito_400Regular",
    fontSize: 12,
    color: "#7a9c85",
  },
});
