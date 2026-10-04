import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons, MaterialCommunityIcons, Feather, Octicons } from '@expo/vector-icons';
import { colors, radii, shadows } from '../../src/theme/theme';

interface SessionItem {
  id: string;
  courseName: string;
  shift: string;
  time: string;
  room: string;
  gpsRadius: string;
  beacon: string;
  beaconActive: boolean;
  studentsCount: number;
  mode: string;
  statusLabel: string;
  isReady: boolean;
}

const mockSessions: SessionItem[] = [
  {
    id: '1',
    courseName: 'Lập trình Mobile',
    shift: 'Ca sáng',
    time: '07:30',
    room: 'Phòng A201',
    gpsRadius: 'GPS: Bán kính 50m',
    beacon: 'Beacon: Trạm A201-01',
    beaconActive: true,
    studentsCount: 65,
    mode: 'Tự động tức thì',
    statusLabel: 'Sẵn sàng',
    isReady: true,
  },
  {
    id: '2',
    courseName: 'Cơ sở dữ liệu – CS201',
    shift: 'Ca chiều',
    time: '13:30',
    room: 'Phòng B103',
    gpsRadius: 'GPS: Bán kính 30m',
    beacon: 'Beacon: Trạm B103-02',
    beaconActive: false,
    studentsCount: 58,
    mode: 'Chế độ quét kép',
    statusLabel: 'Dự kiến 90 phút',
    isReady: false,
  },
];

export default function TeacherDashboard() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [activeTab, setActiveTab] = useState<'host' | 'courses' | 'logs' | 'profile'>('host');

  return (
    <View style={styles.root}>
      {/* Top App Bar with circular back button and safe camera notch padding */}
      <View style={[styles.topBar, { paddingTop: Math.max(insets.top, 24) + 8 }]}>
        <View style={styles.topBarLeft}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.push('/(auth)/sign-in')}
            activeOpacity={0.7}
          >
            <Feather name="arrow-left" size={20} color={colors.textPrimary} />
          </TouchableOpacity>
          <View style={styles.activePulseDot} />
          <Text style={styles.topBarTitle}>Sessions Dashboard</Text>
        </View>

        <View style={styles.topBarRight}>
          <TouchableOpacity style={styles.iconCircleButton} activeOpacity={0.7}>
            <Ionicons name="notifications-outline" size={20} color={colors.textPrimary} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.avatarButton}
            onPress={() => router.push('/(auth)/sign-in')}
            activeOpacity={0.7}
          >
            <View style={styles.avatarPlaceholder}>
              <Ionicons name="person" size={18} color="#FFFFFF" />
            </View>
            <View style={styles.avatarStatusBadge} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={[
          styles.scrollContent,
          { paddingBottom: Math.max(insets.bottom, 16) + 80 },
        ]}
        showsVerticalScrollIndicator={false}
      >
        {/* Header Title Section */}
        <View style={styles.headerSection}>
          <View style={{ flex: 1 }}>
            <View style={styles.statusTagRow}>
              <View style={styles.statusDot} />
              <Text style={styles.statusTagText}>HỆ THỐNG SẴN SÀNG</Text>
            </View>
            <Text style={styles.mainTitle}>Quản lý điểm danh</Text>
            <Text style={styles.mainSubtitle}>
              Mẫu ca học đã lưu • Học kỳ II (2024–2025)
            </Text>
          </View>
        </View>

        {/* Info Banner Pill */}
        <View style={styles.infoBanner}>
          <View style={styles.infoBannerLeft}>
            <View style={styles.statusDot} />
            <Text style={styles.infoBannerText}>
              Hôm nay, Thứ Sáu 24/10 • 2 ca giảng dạy
            </Text>
          </View>
          <Text style={styles.infoBannerRight}>20:9 AMOLED</Text>
        </View>

        {/* Sessions List */}
        <View style={styles.sessionsList}>
          {mockSessions.map((session) => (
            <View key={session.id} style={[styles.sessionCard, shadows.card]}>
              {/* Card Header */}
              <View style={styles.sessionHeaderRow}>
                <View style={styles.sessionTitleGroup}>
                  <View style={[styles.sessionDot, session.isReady && styles.sessionDotActive]} />
                  <Text style={styles.sessionCourseName} numberOfLines={1}>
                    {session.courseName}
                  </Text>
                </View>
                <View style={styles.shiftBadge}>
                  <Text style={styles.shiftBadgeText}>
                    {session.shift} • {session.time}
                  </Text>
                </View>
              </View>

              {/* Tags & Metadata Row */}
              <View style={styles.metaRow}>
                <View style={styles.tagChip}>
                  <Ionicons name="location-outline" size={14} color={colors.textSecondary} />
                  <Text style={styles.tagChipText}>{session.room}</Text>
                </View>

                <View style={styles.tagChip}>
                  <MaterialCommunityIcons name="crosshairs-gps" size={14} color={colors.textSecondary} />
                  <Text style={styles.tagChipText}>{session.gpsRadius}</Text>
                </View>
              </View>

              {/* Beacon Sub-tag */}
              <View
                style={[
                  styles.beaconTag,
                  session.beaconActive
                    ? { backgroundColor: colors.accentLight }
                    : { backgroundColor: colors.tagBg },
                ]}
              >
                <MaterialCommunityIcons
                  name="access-point"
                  size={14}
                  color={session.beaconActive ? colors.accentDark : colors.textSecondary}
                />
                <Text
                  style={[
                    styles.beaconTagText,
                    session.beaconActive && { color: colors.accentDark, fontWeight: '600' },
                  ]}
                >
                  {session.beacon}
                </Text>
              </View>

              {/* Status Row */}
              <View style={styles.sessionStatusRow}>
                <View style={styles.statusLeft}>
                  <MaterialCommunityIcons
                    name={session.isReady ? 'shield-check-outline' : 'account-group-outline'}
                    size={16}
                    color={session.isReady ? colors.accent : colors.textSecondary}
                  />
                  <Text style={styles.statusCountText}>
                    <Text style={{ fontWeight: '700', color: colors.textPrimary }}>
                      {session.studentsCount} sinh viên
                    </Text>{' '}
                    đăng ký • {session.mode}
                  </Text>
                </View>

                <View style={styles.statusRightBadge}>
                  <Text
                    style={[
                      styles.statusRightText,
                      session.isReady && { color: colors.accentDark },
                    ]}
                  >
                    {session.statusLabel}
                  </Text>
                  {session.isReady && (
                    <Ionicons name="flash" size={13} color={colors.accent} style={{ marginLeft: 3 }} />
                  )}
                </View>
              </View>

              {/* Primary Action Button (1-Tap Start) */}
              <TouchableOpacity
                style={styles.startSessionButton}
                onPress={() => router.push('/(teacher)/session')}
                activeOpacity={0.88}
              >
                <Ionicons name="flash" size={17} color={colors.accent} style={{ marginRight: 6 }} />
                <Text style={styles.startSessionButtonText}>Bắt đầu ngay (1 chạm)</Text>
              </TouchableOpacity>

              {/* Handover Link */}
              <TouchableOpacity
                style={styles.handoverButton}
                onPress={() => router.push('/(teacher)/handover')}
                activeOpacity={0.7}
              >
                <Octicons name="arrow-switch" size={14} color={colors.textSecondary} />
                <Text style={styles.handoverButtonText}>
                  Bàn giao quyền cho GV dạy thay
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {/* Create New Template Button */}
        <TouchableOpacity
          style={styles.createTemplateButton}
          onPress={() => router.push('/(teacher)/templates')}
          activeOpacity={0.8}
        >
          <Ionicons name="add-circle-outline" size={20} color={colors.textPrimary} />
          <Text style={styles.createTemplateText}>Tạo mẫu lớp học mới</Text>
        </TouchableOpacity>

        {/* Footer Security Notice */}
        <View style={styles.footerSecurity}>
          <Feather name="lock" size={13} color={colors.textMuted} />
          <Text style={styles.footerSecurityText}>
            Được mã hóa xác thực thiết bị và định vị cục bộ
          </Text>
        </View>
      </ScrollView>

      {/* Floating Bottom Navigation Bar positioned safely above gesture pill */}
      <View
        style={[
          styles.floatingNavBar,
          shadows.floatingNav,
          { bottom: Math.max(insets.bottom, 12) + 8 },
        ]}
      >
        <TouchableOpacity
          style={[styles.navTab, activeTab === 'host' && styles.navTabActive]}
          onPress={() => setActiveTab('host')}
        >
          <Ionicons
            name={activeTab === 'host' ? 'grid' : 'grid-outline'}
            size={20}
            color={activeTab === 'host' ? colors.darkHero : colors.textMuted}
          />
          <Text
            style={[
              styles.navTabLabel,
              activeTab === 'host' && styles.navTabLabelActive,
            ]}
          >
            Host
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.navTab, activeTab === 'courses' && styles.navTabActive]}
          onPress={() => {
            setActiveTab('courses');
            router.push('/(teacher)/templates');
          }}
        >
          <Ionicons
            name="school-outline"
            size={20}
            color={activeTab === 'courses' ? colors.darkHero : colors.textMuted}
          />
          <Text
            style={[
              styles.navTabLabel,
              activeTab === 'courses' && styles.navTabLabelActive,
            ]}
          >
            Courses
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.navTab, activeTab === 'logs' && styles.navTabActive]}
          onPress={() => setActiveTab('logs')}
        >
          <Ionicons
            name="time-outline"
            size={20}
            color={activeTab === 'logs' ? colors.darkHero : colors.textMuted}
          />
          <Text
            style={[
              styles.navTabLabel,
              activeTab === 'logs' && styles.navTabLabelActive,
            ]}
          >
            Logs
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.navTab, activeTab === 'profile' && styles.navTabActive]}
          onPress={() => {
            setActiveTab('profile');
            router.push('/(auth)/sign-in');
          }}
        >
          <Ionicons
            name="settings-outline"
            size={20}
            color={activeTab === 'profile' ? colors.darkHero : colors.textMuted}
          />
          <Text
            style={[
              styles.navTabLabel,
              activeTab === 'profile' && styles.navTabLabelActive,
            ]}
          >
            Profile
          </Text>
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
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 10,
    backgroundColor: colors.canvas,
  },
  topBarLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  backButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: colors.card,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 2,
  },
  activePulseDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.accent,
  },
  topBarTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  topBarRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconCircleButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.card,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarButton: {
    position: 'relative',
  },
  avatarPlaceholder: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#1E293B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarStatusBadge: {
    position: 'absolute',
    bottom: -1,
    right: -1,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.accent,
    borderWidth: 2,
    borderColor: colors.canvas,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 8,
  },
  headerSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  statusTagRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 4,
  },
  statusDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.accent,
  },
  statusTagText: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.accentDark,
    letterSpacing: 0.5,
  },
  mainTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: colors.textPrimary,
    letterSpacing: -0.5,
  },
  mainSubtitle: {
    fontSize: 13,
    color: colors.textSecondary,
    marginTop: 4,
    fontWeight: '500',
  },
  infoBanner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.cardSubtle,
    borderRadius: radii.pill,
    paddingHorizontal: 14,
    paddingVertical: 8,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: colors.borderLight,
  },
  infoBannerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  infoBannerText: {
    fontSize: 12,
    color: colors.textSecondary,
    fontWeight: '600',
  },
  infoBannerRight: {
    fontSize: 11,
    color: colors.textMuted,
    fontWeight: '700',
  },
  sessionsList: {
    gap: 16,
    marginBottom: 18,
  },
  sessionCard: {
    backgroundColor: colors.card,
    borderRadius: radii.card,
    padding: 20,
  },
  sessionHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sessionTitleGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    flex: 1,
  },
  sessionDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#94A3B8',
  },
  sessionDotActive: {
    backgroundColor: colors.accent,
  },
  sessionCourseName: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  shiftBadge: {
    backgroundColor: colors.tagBg,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: radii.pill,
  },
  shiftBadgeText: {
    fontSize: 11,
    fontWeight: '600',
    color: colors.textSecondary,
  },
  metaRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 8,
  },
  tagChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    backgroundColor: colors.tagBg,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: radii.pill,
  },
  tagChipText: {
    fontSize: 12,
    color: colors.textSecondary,
    fontWeight: '500',
  },
  beaconTag: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: radii.pill,
    alignSelf: 'flex-start',
    marginBottom: 14,
  },
  beaconTagText: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  sessionStatusRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    paddingTop: 4,
  },
  statusLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  statusCountText: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  statusRightBadge: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusRightText: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.textSecondary,
  },
  startSessionButton: {
    backgroundColor: colors.darkHero,
    borderRadius: radii.pill,
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  startSessionButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
  handoverButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingVertical: 6,
  },
  handoverButtonText: {
    fontSize: 13,
    color: colors.textSecondary,
    fontWeight: '600',
  },
  createTemplateButton: {
    backgroundColor: colors.tagBg,
    borderRadius: radii.pill,
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 16,
  },
  createTemplateText: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  footerSecurity: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    marginBottom: 10,
  },
  footerSecurityText: {
    fontSize: 11,
    color: colors.textMuted,
    fontWeight: '500',
  },
  floatingNavBar: {
    position: 'absolute',
    left: 20,
    right: 20,
    backgroundColor: colors.card,
    borderRadius: radii.xl,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: colors.borderLight,
  },
  navTab: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
  navTabActive: {
    transform: [{ scale: 1.05 }],
  },
  navTabLabel: {
    fontSize: 10,
    color: colors.textMuted,
    fontWeight: '600',
    marginTop: 2,
  },
  navTabLabelActive: {
    color: colors.darkHero,
    fontWeight: '700',
  },
});
