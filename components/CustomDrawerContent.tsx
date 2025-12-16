import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { Link } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { fetchTests } from "../services/quizService";

type Test = {
  id: string;
  name: string;
};

export default function CustomDrawerContent(
  props: DrawerContentComponentProps
) {
  const [tests, setTests] = useState<Test[]>([]);

  useEffect(() => {
    fetchTests()
      .then(setTests)
      .catch((err) =>
        console.error("Błąd pobierania testów do Drawera", err)
      );
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>


        <View style={styles.logoBox}>
          <Text style={styles.logoText}>Quiz App</Text>
          <Text style={styles.logoSub}>Wybierz test i graj</Text>
        </View>

        <View style={styles.section}>
          <Link href="/" style={styles.card}>
            <Text style={styles.cardTitle}>Home</Text>
          </Link>

          <Link href="/results" style={styles.card}>
            <Text style={styles.cardTitle}>Results</Text>
          </Link>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Testy</Text>

          {tests.map((test) => (
            <Link
              key={test.id}
              href={`/test/${test.id}`}
              style={styles.card}
            >
              <Text style={styles.cardTitle}>{test.name}</Text>
            </Link>
          ))}
        </View>

        <View style={styles.footerBox}>
          <View style={styles.footerButton}>
            <Text style={styles.footerText}>
              Quiz App · v1.0
            </Text>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 40,
    backgroundColor: "#f9faf8",
  },

  logoBox: {
    paddingVertical: 24,
    paddingHorizontal: 16,
    borderRadius: 14,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#adc6a4",
    marginBottom: 24,
    alignItems: "center",
  },

  logoText: {
    fontSize: 22,
    fontFamily: "Poppins_600SemiBold",
    color: "#adc6a4",
    textAlign: "center",
  },

  logoSub: {
    marginTop: 4,
    fontSize: 14,
    fontFamily: "Nunito_400Regular",
    color: "#6b8f7b",
    textAlign: "center",
  },

  section: {
    marginBottom: 24,
  },

  sectionTitle: {
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
    color: "#4a6b57",
    marginBottom: 12,
  },

  card: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#adc6a4",
    backgroundColor: "#ffffff",
    borderRadius: 12,
    marginBottom: 12,
  },

  cardTitle: {
    fontSize: 15,
    fontFamily: "Poppins_600SemiBold",
    color: "#333",
    textAlign: "center",
  },

  footerBox: {
    marginTop: 10,
  },

  footerButton: {
    backgroundColor: "#e6efe3",
    paddingVertical: 14,
    borderRadius: 12,
  },

  footerText: {
    textAlign: "center",
    fontSize: 13,
    fontFamily: "Nunito_400Regular",
    color: "#4a6b57",
  },
});

