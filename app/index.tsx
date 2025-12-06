import AsyncStorage from '@react-native-async-storage/async-storage';
import { Link } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Alert, Button, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Home() {
  const [showWelcome, setShowWelcome] = useState<boolean | null>(null);

  useEffect(() => {
    const checkFirstLaunch = async () => {
      try {
        const hasLaunched = await AsyncStorage.getItem('hasLaunched');
        if (!hasLaunched) {
          setShowWelcome(true);
        } else {
          setShowWelcome(false);
        }
      } catch (error) {
        console.error('Błąd AsyncStorage', error);
        setShowWelcome(false);
      }
    };

    checkFirstLaunch();
  }, []);

  const acceptRules = async () => {
    try {
      await AsyncStorage.setItem('hasLaunched', 'true');
      setShowWelcome(false);
    } catch (error) {
      console.error('Błąd zapisu AsyncStorage', error);
    }
  };

  const resetFirstLaunch = async () => {
    try {
      await AsyncStorage.removeItem('hasLaunched');
      Alert.alert('Reset', 'Flaga została usunięta. Zrestartuj aplikację, aby zobaczyć ekran powitalny.');
    } catch (error) {
      console.error('Błąd resetowania AsyncStorage', error);
    }
  };

  if (showWelcome === null) {
    return (
      <View style={styles.center}>
        <Text>Ładowanie...</Text>
      </View>
    );
  }

  if (showWelcome) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Regulamin Aplikacji</Text>
        <Text style={styles.text}>
          1. Twoje odpowiedzi i dane są prywatne i nie udostępniamy ich osobom trzecim.{"\n"}
          2. Materiały w aplikacji (pytania, teksty, grafiki) są chronione prawami autorskimi.{"\n"}
          3. Nie kopiuj, nie udostępniaj ani nie publikuj treści z aplikacji bez naszej zgody.{"\n"}
          4. Korzystając z aplikacji, zgadzasz się używać jej zgodnie z przeznaczeniem.
      </Text>
        <Button title="Akceptuję" onPress={acceptRules} />
        <View style={{ marginTop: 10 }}>
          <Button title="Reset First Launch (Test)" onPress={resetFirstLaunch} color="red" />
        </View>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Home Page</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Title Test #1</Text>
        <Text style={styles.cardText}>
          Historia
        </Text>
        <Link href="/test1" style={styles.cardButton}>
          <Text style={styles.cardButtonText}>Start Test</Text>
        </Link>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Title Test #2</Text>
        <Text style={styles.cardText}>
          Geografia
        </Text>
        <Link href="/test2" style={styles.cardButton}>
          <Text style={styles.cardButtonText}>Start Test</Text>
        </Link>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Title Test #3</Text>
        <Text style={styles.cardText}>
          Informatyka
        </Text>
        <Link href="/test3" style={styles.cardButton}>
          <Text style={styles.cardButtonText}>Start Test</Text>
        </Link>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Title Test #4</Text>
        <Text style={styles.cardText}>
          Biologia
        </Text>
        <Link href="/test4" style={styles.cardButton}>
          <Text style={styles.cardButtonText}>Start Test</Text>
        </Link>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Title Test #5</Text>
        <Text style={styles.cardText}>
          Sztuka
        </Text>
        <Link href="/test5" style={styles.cardButton}>
          <Text style={styles.cardButtonText}>Start Test</Text>
        </Link>
      </View>

      <View style={styles.footerBox}>
        <Link href="/results" style={styles.footerButton}>
          <Text style={styles.footerText}>Get to know your ranking results</Text>
        </Link>
      </View>

      <View style={{ marginTop: 20 }}>
        <Button title="Reset First Launch (Test)" onPress={resetFirstLaunch} color="red" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, paddingBottom: 40 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 22, fontWeight: '700', marginBottom: 16 },
  text: { fontSize: 16, marginBottom: 20 },

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
  cardButtonText: { fontWeight: '700', textAlign: 'center' },

  footerBox: { marginTop: 20 },
  footerButton: {
    backgroundColor: '#ddd',
    padding: 14,
    borderRadius: 10,
  },
  footerText: { textAlign: 'center', fontWeight: '700' },
});
