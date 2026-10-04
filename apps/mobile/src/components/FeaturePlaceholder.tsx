import { StyleSheet, Text, View } from "react-native";

type FeaturePlaceholderProps = { title: string; description: string };

export function FeaturePlaceholder({
  title,
  description,
}: FeaturePlaceholderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.note}>
        Feature shell only — add UI and business logic here.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, gap: 12 },
  title: { fontSize: 28, fontWeight: "700" },
  description: { fontSize: 16, color: "#374151" },
  note: { marginTop: 8, fontSize: 14, color: "#6B7280" },
});
