import { ScrollView, StyleSheet, Text, View } from 'react-native';

const results = [
  { nick: 'ala', point: '18/20', type: 'test1', date: '21-11-2018' },
  { nick: 'kasf', point: '15/20', type: 'test1', date: '18-11-2018' },
  { nick: 'cwv', point: '11/20', type: 'test1', date: '11-10-2018' },
  { nick: 'zzc', point: '3/20', type: 'test1', date: '15-04-2018' },
];

export default function Results() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Results</Text>

      <View style={styles.table}>
        <View style={[styles.row, styles.headerRow]}>
          <Text style={[styles.cell, styles.headerCell]}>Nick</Text>
          <Text style={[styles.cell, styles.headerCell]}>Point</Text>
          <Text style={[styles.cell, styles.headerCell]}>Type</Text>
          <Text style={[styles.cell, styles.headerCell]}>Date</Text>
        </View>

        {results.map((r, i) => (
          <View key={i} style={styles.row}>
            <Text style={styles.cell}>{r.nick}</Text>
            <Text style={styles.cell}>{r.point}</Text>
            <Text style={styles.cell}>{r.type}</Text>
            <Text style={styles.cell}>{r.date}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontSize: 22, fontWeight: '700', marginBottom: 12 },
  table: { borderWidth: 1, borderColor: '#ddd', borderRadius: 6 },
  row: { flexDirection: 'row', borderBottomWidth: 1, borderColor: '#eee' },
  headerRow: { backgroundColor: '#f7f7f7' },
  cell: { flex: 1, padding: 10 },
  headerCell: { fontWeight: '700' },
});
