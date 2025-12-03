import { Link } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Home() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Home Page</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Title Test #1</Text>
        <Text style={styles.cardText}>
          This is short examples of few words to fill the place.
        </Text>
        <Link href="/test1" style={styles.cardButton}>
          <Text style={styles.cardButtonText}>Start Test</Text>
        </Link>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Title Test #2</Text>
        <Link href="/test2" style={styles.cardButton}>
          <Text style={styles.cardButtonText}>Start Test</Text>
        </Link>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Title Test #3</Text>
        <Link href="/test3" style={styles.cardButton}>
          <Text style={styles.cardButtonText}>Start Test</Text>
        </Link>
      </View>

      <View style={styles.footerBox}>
        <Link href="/results" style={styles.footerButton}>
          <Text style={styles.footerText}>Get to know your ranking results</Text>
        </Link>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, paddingBottom: 40 },
  title: { fontSize: 22, fontWeight: '700', marginBottom: 16 },

  card: {
    padding: 14,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 12,
  },
  cardTitle: { fontWeight: '700', marginBottom: 8 },
  cardText: { color: '#555', marginBottom: 8 },

  cardButton: {
    backgroundColor: '#eee',
    padding: 12,
    borderRadius: 8,
  },
  cardButtonText: {
    fontWeight: '700',
    textAlign: 'center',
  },

  footerBox: { marginTop: 20 },
  footerButton: {
    backgroundColor: '#ddd',
    padding: 14,
    borderRadius: 10,
  },
  footerText: { textAlign: 'center', fontWeight: '700' },
});
