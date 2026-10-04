import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { colors, radii, shadows } from '../../src/theme/theme';

export default function ScanQrScreen() {
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
          <Text style={styles.headerTitle}>Quét mã điểm danh</Text>
          <View style={{ width: 40 }} />
        </View>

        {/* Viewfinder Area */}
        <View style={styles.scannerWrapper}>
          <View style={[styles.scannerFrame, shadows.cardHover]}>
            <View style={styles.scanCornerTL} />
            <View style={styles.scanCornerTR} />
            <View style={styles.scanCornerBL} />
            <View style={styles.scanCornerBR} />

            <MaterialCommunityIcons name="qrcode-scan" size={64} color={colors.textSecondary} />
            <Text style={styles.scannerTip}>Hướng camera về mã QR trên màn hình giảng viên</Text>
          </View>
        </View>

        {/* Action / Next Step */}
        <View style={styles.bottomSection}>
          <TouchableOpacity
            style={styles.continueButton}
            onPress={() => router.push('/(student)/verify-location')}
            activeOpacity={0.88}
          >
            <Text style={styles.continueButtonText}>Xác nhận & Kiểm tra GPS</Text>
            <Feather name="arrow-right" size={18} color="#FFFFFF" style={{ marginLeft: 8 }} />
          </TouchableOpacity>
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
  scannerWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 'auto',
  },
  scannerFrame: {
    width: 280,
    height: 280,
    backgroundColor: colors.card,
    borderRadius: radii.card,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    position: 'relative',
  },
  scanCornerTL: {
    position: 'absolute',
    top: 16,
    left: 16,
    width: 24,
    height: 24,
    borderTopWidth: 3,
    borderLeftWidth: 3,
    borderColor: colors.accent,
    borderTopLeftRadius: 8,
  },
  scanCornerTR: {
    position: 'absolute',
    top: 16,
    right: 16,
    width: 24,
    height: 24,
    borderTopWidth: 3,
    borderRightWidth: 3,
    borderColor: colors.accent,
    borderTopRightRadius: 8,
  },
  scanCornerBL: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    width: 24,
    height: 24,
    borderBottomWidth: 3,
    borderLeftWidth: 3,
    borderColor: colors.accent,
    borderBottomLeftRadius: 8,
  },
  scanCornerBR: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    width: 24,
    height: 24,
    borderBottomWidth: 3,
    borderRightWidth: 3,
    borderColor: colors.accent,
    borderBottomRightRadius: 8,
  },
  scannerTip: {
    fontSize: 13,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: 16,
    lineHeight: 18,
  },
  bottomSection: {
    gap: 12,
  },
  continueButton: {
    backgroundColor: colors.darkHero,
    borderRadius: radii.pill,
    height: 52,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  continueButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
});
