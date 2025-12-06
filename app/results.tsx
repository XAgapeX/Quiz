import React, { useCallback, useState } from 'react';
import { FlatList, RefreshControl, StyleSheet, Text, View } from 'react-native';

export default function ResultsScreen() {
  const [refreshing, setRefreshing] = useState(false);

  const [results, setResults] = useState([
    { nick: "Marek", score: 18, total: 20, type: "historia", date: "2022-11-22" },
    { nick: "Anna", score: 15, total: 20, type: "sport", date: "2023-04-10" },
    { nick: "Kasia", score: 20, total: 20, type: "geografia", date: "2023-06-01" },
    { nick: "Piotr", score: 10, total: 20, type: "muzyka", date: "2024-02-15" }
  ]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  const renderItem = ({ item }: { item: any }) => (
    <View style={styles.card}>
      <Text style={styles.nick}>{item.nick}</Text>
      <Text>Wynik: {item.score}/{item.total}</Text>
      <Text>Kategoria: {item.type}</Text>
      <Text>Data: {item.date}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Results</Text>

      <FlatList
        data={results}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 16,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#eee",
    padding: 16,
    marginBottom: 12,
    borderRadius: 10,
  },
  nick: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 4,
  }
});
