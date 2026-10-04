import { Stack } from 'expo-router';

export default function StudentLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="scan-qr" options={{ headerShown: false }} />
      <Stack.Screen name="verify-location" options={{ headerShown: false }} />
    </Stack>
  );
}
