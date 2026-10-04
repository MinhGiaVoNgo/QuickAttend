import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons, Feather } from '@expo/vector-icons';
import { colors, radii, shadows } from '../../src/theme/theme';

export default function VerifyLocationScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.root,
        {
          paddingTop: Math.max(insets.top, 24) + 8,
          paddingBottom: Math.max(insets.bottom, 16) + 16,
        },
      ]}
    >
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
            activeOpacity={0.7}
          >
            <Feather name="arrow-left" size={20} color={colors.textPrimary} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Xác thực vị trí</Text>
          <View style={{ width: 40 }} />
        </View>

        {/* Verification Status Card */}
        <View style={[styles.statusCard, shadows.card]}>
          <View style={[styles.iconCircle, { backgroundColor: colors.accentLight }]}>
            <Ionicons name="checkmark-circle" size={48} color={colors.accent} />
          </View>

          <Text style={styles.resultTitle}>Điểm danh thành công!</Text>
          <Text style={styles.resultSubtitle}>
            Vị trí GPS nằm trong bán kính cho phép của Phòng A2-301 (sai số 8m).
          </Text>

          <View style={styles.detailsBox}>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Thời gian:</Text>
              <Text style={styles.detailValue}>09:35:12 • 24/10/2026</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Môn học:</Text>
              <Text style={styles.detailValue}>Lập trình thiết bị di động</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Mã phiên:</Text>
              <Text style={styles.detailValue}>#SES-MOB-9921</Text>
            </View>
          </View>
        </View>

        {/* Return Button */}
        <TouchableOpacity
          style={styles.finishButton}
          onPress={() => router.push('/(student)')}
          activeOpacity={0.88}
        >
          <Text style={styles.finishButtonText}>Hoàn tất & Về trang chủ</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.canvas,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.card,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  statusCard: {
    backgroundColor: colors.card,
    borderRadius: radii.card,
    padding: 24,
    alignItems: 'center',
    marginVertical: 'auto',
  },
  iconCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  resultTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: colors.textPrimary,
    marginBottom: 8,
  },
  resultSubtitle: {
    fontSize: 13,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 18,
    marginBottom: 20,
  },
  detailsBox: {
    width: '100%',
    backgroundColor: colors.tagBg,
    borderRadius: radii.md,
    padding: 14,
    gap: 8,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailLabel: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  detailValue: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  finishButton: {
    backgroundColor: colors.darkHero,
    borderRadius: radii.pill,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
  },
  finishButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
});
