import AsyncStorage from "@react-native-async-storage/async-storage";
import { Link } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

type Test = {
  id: string;
  name: string;
  description: string;
};

export default function Home() {
  const [showWelcome, setShowWelcome] = useState<boolean | null>(null);
  const [tests, setTests] = useState<Test[]>([]);

  useEffect(() => {
    const checkFirstLaunch = async () => {
      try {
        const hasLaunched = await AsyncStorage.getItem("hasLaunched");
        setShowWelcome(!hasLaunched);
      } catch (error) {
        console.error("Błąd AsyncStorage", error);
        setShowWelcome(false);
      }
    };

    checkFirstLaunch();
  }, []);

  useEffect(() => {
    fetch("https://tgryl.pl/quiz/tests")
      .then((res) => res.json())
      .then(setTests)
      .catch((err) =>
        console.error("Błąd pobierania listy testów", err)
      );
  }, []);

  const acceptRules = async () => {
    await AsyncStorage.setItem("hasLaunched", "true");
    setShowWelcome(false);
  };

  const resetFirstLaunch = async () => {
    await AsyncStorage.removeItem("hasLaunched");
    Alert.alert(
      "Reset",
      "Flaga została usunięta. Zrestartuj aplikację."
    );
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
          <Button
            title="Reset First Launch (Test)"
            onPress={resetFirstLaunch}
            color="red"
          />
        </View>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Home Page</Text>

      {tests.map((test) => (
        <View key={test.id} style={styles.card}>
          <Text style={styles.cardTitle}>{test.name}</Text>
          <Text style={styles.cardText}>{test.description}</Text>
          <Link
            href={`../test/${test.id}`}
            style={styles.cardButton}
          >
            <Text style={styles.cardButtonText}>Start Test</Text>
          </Link>
        </View>
      ))}

      <View style={styles.footerBox}>
        <Link href="/results" style={styles.footerButton}>
          <Text style={styles.footerText}>
            Get to know your ranking results
          </Text>
        </Link>
      </View>

      <View style={{ marginTop: 20 }}>
        <Button
          title="Reset First Launch (Test)"
          onPress={resetFirstLaunch}
          color="red"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 40,
    backgroundColor: "#f9faf8",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontFamily: "Poppins_600SemiBold",
    color: "#0000",
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    fontFamily: "Nunito_400Regular",
    marginBottom: 20,
    color: "#444",
  },
  card: {
    padding: 14,
    borderWidth: 1,
    borderColor: "#adc6a4",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    marginBottom: 12,
  },
  cardTitle: {
    fontFamily: "Poppins_600SemiBold",
    marginBottom: 6,
    color: "#333",
  },
  cardText: {
    fontFamily: "Nunito_400Regular",
    color: "#666",
    marginBottom: 8,
  },
  cardButton: {
    backgroundColor: "#adc6a4",
    padding: 12,
    borderRadius: 8,
  },
  cardButtonText: {
    fontFamily: "Poppins_600SemiBold",
    textAlign: "center",
    color: "#fff",
  },
  footerBox: { marginTop: 20 },
  footerButton: {
    backgroundColor: "#e6efe3",
    padding: 14,
    borderRadius: 10,
  },
  footerText: {
    textAlign: "center",
    fontFamily: "Nunito_400Regular",
    color: "#4a6b57",
  },
});
