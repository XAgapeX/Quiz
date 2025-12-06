import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { Link } from 'expo-router';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CustomDrawerContent(props: DrawerContentComponentProps) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        
        <View style={styles.logoBox}>
          <Text style={styles.logoText}>Quiz App</Text>
        </View>

        <View style={styles.section}>
          <Link href="/" style={styles.button}>
            <Text style={styles.buttonText}>Home Page</Text>
          </Link>

          <Link href="/results" style={styles.button}>
            <Text style={styles.buttonText}>Results</Text>
          </Link>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tests</Text>

          <Link href="/test1" style={styles.testButton}>
            <Text>Test #1</Text>
          </Link>

          <Link href="/test2" style={styles.testButton}>
            <Text>Test #2</Text>
          </Link>

          <Link href="/test3" style={styles.testButton}>
            <Text>Test #3</Text>
          </Link>

          <Link href="/test4" style={styles.testButton}>
            <Text>Test #4</Text>
          </Link>

          <Link href="/test5" style={styles.testButton}>
            <Text>Test #5</Text>
          </Link>
        </View>

        <View style={styles.footer}>
          <Text style={{ color: '#777' }}>v1.0</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    paddingVertical: 20, 
    backgroundColor: '#f0f0f0', 
    flexGrow: 1,
    paddingTop: 30,
  },
  logoBox: {
    height: 140,
    marginHorizontal: 12,
    borderRadius: 8,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
  },
  logoText: { fontSize: 20, fontWeight: '700' },
  section: { marginHorizontal: 12, marginBottom: 18 },
  button: {
    backgroundColor: '#e6e6e6',
    padding: 14,
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonText: {
    fontWeight: '600',
    textAlign: 'center',
  },
  sectionTitle: {
    fontWeight: '700',
    marginBottom: 10,
  },
  testButton: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  footer: {
    marginTop: 20,
    alignItems: 'center',
  },
});
