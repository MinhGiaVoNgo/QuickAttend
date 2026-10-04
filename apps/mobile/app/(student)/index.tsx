import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { colors, radii, shadows } from '../../src/theme/theme';

export default function StudentHomeScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.root,
        {
          paddingTop: Math.max(insets.top, 24) + 12,
          paddingBottom: Math.max(insets.bottom, 16) + 16,
        },
      ]}
    >
      <View style={styles.container}>
        {/* Top Bar */}
        <View style={styles.topBar}>
          <TouchableOpacity
            style={[styles.brandPill, shadows.card]}
            onPress={() => router.push('/(auth)/sign-in')}
            activeOpacity={0.7}
          >
            <MaterialCommunityIcons name="radio-tower" size={16} color={colors.textPrimary} />
            <Text style={styles.brandPillText}>QUICKATTEND</Text>
          </TouchableOpacity>

          <View style={[styles.studentIdBadge, shadows.card]}>
            <MaterialCommunityIcons name="card-account-details-outline" size={16} color={colors.textSecondary} />
            <Text style={styles.studentIdText}>SV: 20260101</Text>
          </View>
        </View>

        {/* Greeting Section */}
        <View style={styles.greetingSection}>
          <Text style={styles.dateText}>THỨ TƯ, 24 THÁNG 10</Text>
          <Text style={styles.greetingHeadline}>Xin chào, Lê Văn B</Text>
        </View>

        {/* Hero Check-in Dark Card */}
        <View style={[styles.heroCard, shadows.heroDark]}>
          {/* Status Tag */}
          <View style={styles.sessionStatusRow}>
            <Text style={styles.sessionStatusLabel}>CA HỌC HIỆN TẠI</Text>
            <View style={styles.statusDot} />
          </View>

          {/* Card Title */}
          <Text style={styles.heroCardTitle}>Sẵn sàng điểm danh</Text>

          {/* Class Details */}
          <View style={styles.classDetailsBox}>
            <Text style={styles.classDetailText}>
              Phòng A2-301 • Môn: Lập trình thiết bị di động
            </Text>
            <Text style={styles.classTimeText}>
              Thời gian: 09:30 — 11:30
            </Text>
          </View>

          {/* Main Action Button (White Pill on Dark Card) */}
          <TouchableOpacity
            style={styles.checkInButton}
            onPress={() => router.push('/(student)/scan-qr')}
            activeOpacity={0.88}
          >
            <Text style={styles.checkInButtonText}>ĐIỂM DANH NGAY</Text>
            <Feather name="arrow-right" size={18} color={colors.darkHero} style={{ marginLeft: 8 }} />
          </TouchableOpacity>
        </View>

        {/* GPS Background Status Pill */}
        <View style={[styles.gpsStatusPill, shadows.card]}>
          <View style={styles.gpsDot} />
          <Text style={styles.gpsStatusLabel}>
            Vị trí GPS: Đang kết nối nền
          </Text>
        </View>

        {/* Bottom Spacer & Security Notice */}
        <View style={styles.footer}>
          <Feather name="lock" size={13} color={colors.textSecondary} />
          <Text style={styles.securityNoticeText}>
            Xác thực vị trí bảo mật hai lớp chuẩn sinh viên
          </Text>
        </View>
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
    paddingHorizontal: 22,
    justifyContent: 'space-between',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  brandPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: colors.card,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: radii.pill,
  },
  brandPillText: {
    fontSize: 12,
    fontWeight: '800',
    color: colors.textPrimary,
    letterSpacing: 0.5,
  },
  studentIdBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: colors.card,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: radii.pill,
  },
  studentIdText: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  greetingSection: {
    marginBottom: 28,
  },
  dateText: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.textSecondary,
    letterSpacing: 0.6,
    marginBottom: 8,
  },
  greetingHeadline: {
    fontSize: 30,
    fontWeight: '800',
    color: colors.textPrimary,
    letterSpacing: -0.6,
  },
  heroCard: {
    backgroundColor: colors.darkHero,
    borderRadius: radii.xl + 4,
    padding: 26,
    marginBottom: 16,
  },
  sessionStatusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 16,
  },
  sessionStatusLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: '#94A3B8',
    letterSpacing: 0.8,
  },
  statusDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.accent,
  },
  heroCardTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 18,
  },
  classDetailsBox: {
    gap: 6,
    marginBottom: 28,
  },
  classDetailText: {
    fontSize: 14,
    color: '#E2E8F0',
    fontWeight: '500',
    lineHeight: 20,
  },
  classTimeText: {
    fontSize: 13,
    color: '#94A3B8',
    fontWeight: '500',
  },
  checkInButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: radii.pill,
    height: 52,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkInButtonText: {
    color: colors.darkHero,
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 0.8,
  },
  gpsStatusPill: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: colors.card,
    borderRadius: radii.pill,
    paddingVertical: 10,
    paddingHorizontal: 16,
    alignSelf: 'center',
    marginBottom: 'auto',
    marginTop: 10,
  },
  gpsDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: colors.accent,
  },
  gpsStatusLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.textSecondary,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingBottom: 4,
  },
  securityNoticeText: {
    fontSize: 12,
    color: colors.textSecondary,
    fontWeight: '500',
  },
});
