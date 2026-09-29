import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function TeacherDashboard() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lecturer dashboard</Text>
      <Link href="/(teacher)/templates" style={styles.link}>Attendance templates</Link>
      <Link href="/(teacher)/session" style={styles.link}>Active session</Link>
      <Link href="/(teacher)/handover" style={styles.link}>Temporary handover</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, gap: 16 },
  title: { fontSize: 28, fontWeight: '700' },
  link: { color: '#2563EB', fontSize: 16 }
});
