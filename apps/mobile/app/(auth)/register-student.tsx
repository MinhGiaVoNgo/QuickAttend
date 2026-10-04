import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { colors, radii, shadows } from '../../src/theme/theme';

export default function RegisterStudentScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [fullName, setFullName] = useState('Lê Văn B');
  const [email, setEmail] = useState('20260101@student.edu.vn');
  const [studentId, setStudentId] = useState('20260101');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(true);

  const handleRegister = () => {
    router.push('/(student)');
  };

  return (
    <View style={[styles.root, { paddingTop: Math.max(insets.top, 24) + 8 }]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        {/* Top App Bar */}
        <View style={styles.topBar}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
            activeOpacity={0.7}
          >
            <Feather name="arrow-left" size={20} color={colors.textPrimary} />
          </TouchableOpacity>

          <Text style={styles.topBarTitle}>Active Tracking</Text>

          <TouchableOpacity style={styles.avatarButton} activeOpacity={0.7}>
            <View style={styles.avatarPlaceholder}>
              <Ionicons name="person" size={16} color="#FFFFFF" />
            </View>
          </TouchableOpacity>
        </View>

        <ScrollView
          contentContainerStyle={[
            styles.scrollContainer,
            { paddingBottom: Math.max(insets.bottom, 16) + 24 },
          ]}
          showsVerticalScrollIndicator={false}
        >
          {/* Header Section */}
          <View style={styles.headerSection}>
            <View style={styles.portalTagRow}>
              <View style={styles.statusDot} />
              <Text style={styles.portalTagText}>CỔNG TUYỂN SINH & ĐÀO TẠO</Text>
            </View>
            <Text style={styles.mainTitle}>Đăng ký sinh viên</Text>
            <Text style={styles.mainSubtitle}>
              Điểm danh 1 chạm bằng GPS tại lớp học
            </Text>
          </View>

          {/* EduPass Banner Card */}
          <View style={[styles.eduPassBanner, shadows.heroDark]}>
            <View style={styles.eduPassIconWrapper}>
              <MaterialCommunityIcons name="shield-check" size={20} color={colors.accent} />
            </View>
            <View style={styles.eduPassTextBox}>
              <View style={styles.bannerTitleRow}>
                <Text style={styles.eduPassTitle}>Đồng bộ lớp học tự động</Text>
                <View style={styles.eduPassTag}>
                  <Text style={styles.eduPassTagText}>EDUPASS</Text>
                </View>
              </View>
              <Text style={styles.eduPassSubtitle}>
                Liên kết dữ liệu thời khóa biểu & danh sách sinh viên tức thì từ hệ thống viện đào tạo.
              </Text>
            </View>
          </View>

          {/* Form Card */}
          <View style={[styles.formCard, shadows.card]}>
            {/* Student Full Name */}
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>HỌ VÀ TÊN SINH VIÊN</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.textInput}
                  value={fullName}
                  onChangeText={setFullName}
                  placeholder="Nhập họ và tên sinh viên"
                  placeholderTextColor={colors.textMuted}
                />
                <Feather name="user" size={18} color={colors.textSecondary} />
              </View>
            </View>

            {/* Student Email */}
            <View style={styles.inputGroup}>
              <View style={styles.labelRow}>
                <Text style={styles.inputLabel}>EMAIL SINH VIÊN (.EDU.VN)</Text>
                <View style={styles.requiredBadgeBox}>
                  <Text style={styles.requiredBadgeText}>Bắt buộc</Text>
                </View>
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.textInput}
                  value={email}
                  onChangeText={setEmail}
                  placeholder="mssv@student.edu.vn"
                  placeholderTextColor={colors.textMuted}
                  autoCapitalize="none"
                  keyboardType="email-address"
                />
                <Ionicons name="school-outline" size={18} color={colors.accent} />
              </View>
              <View style={styles.helperRow}>
                <Feather name="info" size={13} color={colors.accent} style={{ marginTop: 2, marginRight: 5 }} />
                <Text style={styles.helperText}>
                  Dùng email trường cấp để liên kết tự động với danh sách lớp.
                </Text>
              </View>
            </View>

            {/* Student ID (MSSV) */}
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>MÃ SỐ SINH VIÊN (MSSV)</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.textInput}
                  value={studentId}
                  onChangeText={setStudentId}
                  placeholder="Ví dụ: 20260101"
                  placeholderTextColor={colors.textMuted}
                  keyboardType="numeric"
                />
                <MaterialCommunityIcons name="card-account-details-outline" size={18} color={colors.textSecondary} />
              </View>
            </View>

            {/* Password */}
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>MẬT KHẨU</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.textInput}
                  value={password}
                  onChangeText={setPassword}
                  placeholder="Nhập mật khẩu an toàn"
                  placeholderTextColor={colors.textMuted}
                  secureTextEntry={!showPassword}
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                  <Feather name={showPassword ? 'eye' : 'eye-off'} size={18} color={colors.textSecondary} />
                </TouchableOpacity>
              </View>
            </View>

            {/* Terms Checkbox */}
            <TouchableOpacity
              style={styles.termsRow}
              onPress={() => setAgreedToTerms(!agreedToTerms)}
              activeOpacity={0.7}
            >
              <View style={[styles.checkboxCircle, agreedToTerms && styles.checkboxActive]}>
                {agreedToTerms && <Ionicons name="checkmark" size={12} color="#FFFFFF" />}
              </View>
              <Text style={styles.termsText}>
                Tôi đồng ý với{' '}
                <Text style={styles.termsHighlight}>Quy chuẩn Điểm danh</Text> &{' '}
                <Text style={styles.termsHighlight}>Điều khoản QuickAttend.</Text>
              </Text>
            </TouchableOpacity>
          </View>

          {/* Device Binding Notice Card */}
          <View style={styles.deviceNoticeCard}>
            <View style={styles.deviceIconWrapper}>
              <Feather name="smartphone" size={18} color={colors.textPrimary} />
            </View>
            <Text style={styles.deviceNoticeText}>
              Tài khoản sẽ tự động liên kết với thiết bị này để xác thực đa yếu tố và chống giả mạo GPS.
            </Text>
          </View>

          {/* Complete Registration Button */}
          <TouchableOpacity
            style={styles.submitButton}
            onPress={handleRegister}
            activeOpacity={0.88}
          >
            <Text style={styles.submitButtonText}>HOÀN TẤT ĐĂNG KÝ SINH VIÊN</Text>
            <Feather name="arrow-right" size={18} color="#FFFFFF" style={{ marginLeft: 8 }} />
          </TouchableOpacity>

          {/* Footer Back to Sign In */}
          <View style={styles.footerRow}>
            <Text style={styles.footerText}>Đã có tài khoản? </Text>
            <TouchableOpacity onPress={() => router.push('/(auth)/sign-in')} activeOpacity={0.7}>
              <Text style={styles.footerLink}>Đăng nhập ngay</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
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
    paddingVertical: 10,
  },
  backButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: colors.card,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topBarTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  avatarButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarPlaceholder: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#1E293B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingTop: 8,
  },
  headerSection: {
    marginBottom: 16,
  },
  portalTagRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.accentLight,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: radii.pill,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  statusDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.accent,
    marginRight: 6,
  },
  portalTagText: {
    fontSize: 10,
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
  eduPassBanner: {
    backgroundColor: colors.darkHero,
    borderRadius: radii.lg,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  eduPassIconWrapper: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(16, 185, 129, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  eduPassTextBox: {
    flex: 1,
  },
  bannerTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 4,
  },
  eduPassTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  eduPassTag: {
    backgroundColor: 'rgba(16, 185, 129, 0.2)',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: radii.pill,
  },
  eduPassTagText: {
    fontSize: 9,
    fontWeight: '800',
    color: colors.accent,
    letterSpacing: 0.5,
  },
  eduPassSubtitle: {
    fontSize: 11,
    color: '#94A3B8',
    lineHeight: 15,
  },
  formCard: {
    backgroundColor: colors.card,
    borderRadius: radii.card,
    padding: 22,
    marginBottom: 16,
  },
  inputGroup: {
    marginBottom: 16,
  },
  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  inputLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.textSecondary,
    letterSpacing: 0.5,
    marginBottom: 6,
  },
  requiredBadgeBox: {
    backgroundColor: '#FEE2E2',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: radii.pill,
  },
  requiredBadgeText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#DC2626',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F5F9',
    borderRadius: radii.md,
    paddingHorizontal: 14,
    height: 50,
  },
  textInput: {
    flex: 1,
    fontSize: 14,
    color: colors.textPrimary,
    fontWeight: '600',
  },
  helperRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 6,
    paddingHorizontal: 2,
  },
  helperText: {
    flex: 1,
    fontSize: 11,
    color: colors.textSecondary,
    lineHeight: 16,
  },
  termsRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 4,
    paddingRight: 10,
  },
  checkboxCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    marginTop: 2,
  },
  checkboxActive: {
    backgroundColor: colors.accent,
  },
  termsText: {
    flex: 1,
    fontSize: 12,
    color: colors.textSecondary,
    lineHeight: 18,
  },
  termsHighlight: {
    fontWeight: '700',
    color: colors.textPrimary,
  },
  deviceNoticeCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F5F9',
    borderRadius: radii.lg,
    padding: 14,
    gap: 12,
    marginBottom: 20,
  },
  deviceIconWrapper: {
    width: 36,
    height: 36,
    borderRadius: radii.sm,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  deviceNoticeText: {
    flex: 1,
    fontSize: 11,
    color: colors.textSecondary,
    lineHeight: 16,
    fontWeight: '500',
  },
  submitButton: {
    backgroundColor: colors.darkHero,
    borderRadius: radii.pill,
    height: 54,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 3,
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.6,
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 4,
  },
  footerText: {
    fontSize: 13,
    color: colors.textSecondary,
  },
  footerLink: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.textPrimary,
    textDecorationLine: 'underline',
  },
});
