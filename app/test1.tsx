import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Test1() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Question 3 of 10</Text>
      <Text style={styles.timer}>Time: 28 sec</Text>

      <View style={styles.progress}>
        <View style={[styles.progressFill, { width: '30%' }]} />
      </View>

      <Text style={styles.question}>
        This is some example of a long question to fill the place.
      </Text>

      <TouchableOpacity style={styles.answer}><Text>Answer A</Text></TouchableOpacity>
      <TouchableOpacity style={styles.answer}><Text>Answer B</Text></TouchableOpacity>
      <TouchableOpacity style={styles.answer}><Text>Answer C</Text></TouchableOpacity>
      <TouchableOpacity style={styles.answer}><Text>Answer D</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, flex: 1 },
  title: { fontSize: 18, fontWeight: '700' },
  timer: { marginTop: 4, marginBottom: 12, color: '#555' },
  progress: {
    height: 10,
    backgroundColor: '#eee',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 12,
  },
  progressFill: {
    backgroundColor: '#ffdd99',
    height: '100%',
  },
  question: { fontSize: 16, marginBottom: 10 },
  answer: {
    backgroundColor: '#eee',
    padding: 14,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
});
