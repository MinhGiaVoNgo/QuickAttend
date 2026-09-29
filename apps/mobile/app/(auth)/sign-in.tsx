import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function SignInScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign in</Text>
      <Text>Authentication UI will be implemented here.</Text>
      <Link href="/(teacher)/dashboard" style={styles.link}>Lecturer flow placeholder</Link>
      <Link href="/(student)/scan-qr" style={styles.link}>Student flow placeholder</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 24, gap: 14 },
  title: { fontSize: 28, fontWeight: '700' },
  link: { color: '#2563EB', fontSize: 16 }
});
