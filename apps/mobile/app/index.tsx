import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>QuickAttend</Text>
      <Text style={styles.subtitle}>Attendance made quick, flexible, and manageable.</Text>
      <Link href="/(auth)/sign-in" style={styles.link}>Open sign-in shell</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 24, gap: 12 },
  title: { fontSize: 32, fontWeight: '700' },
  subtitle: { fontSize: 16, color: '#4B5563' },
  link: { fontSize: 16, color: '#2563EB' }
});
