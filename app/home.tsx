import { Button, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Witaj w Quizie!</Text>

      <Button 
        title="Przejdź do Testu"
        onPress={() => navigation.navigate('test')}
      />

      <View style={styles.footer}>
        <Button 
          title="Przejdź do Wyników"
          onPress={() => navigation.navigate('results')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 28, marginBottom: 20 },
  footer: { position: 'absolute', bottom: 20, width: '100%' }
});
