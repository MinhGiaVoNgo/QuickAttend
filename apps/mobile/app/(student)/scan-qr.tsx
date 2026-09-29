import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function ScanQrScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scan attendance QR</Text>
      <Text>Camera integration belongs in this screen.</Text>
      <Link href="/(student)/verify-location" style={styles.link}>Continue to location verification</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, gap: 14 },
  title: { fontSize: 28, fontWeight: '700' },
  link: { color: '#2563EB', fontSize: 16 }
});
