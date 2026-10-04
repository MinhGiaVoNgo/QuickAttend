import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useRouter } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons, MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { colors, radii, shadows } from "../../src/theme/theme";

export default function SignInScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [email, setEmail] = useState("gv.nguyen@hcmus.edu.vn");
  const [password, setPassword] = useState("HCMUS@2024Secure");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberDevice, setRememberDevice] = useState(true);

  const handleSignIn = () => {
    // If student email or default to teacher
    if (
      email.toLowerCase().includes("sv") ||
      email.toLowerCase().includes("student")
    ) {
      router.push("/(student)");
    } else {
      router.push("/(teacher)/dashboard");
    }
  };

  return (
    <View style={[styles.root, { paddingTop: Math.max(insets.top, 24) + 12 }]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={[
            styles.scrollContainer,
            { paddingBottom: Math.max(insets.bottom, 16) + 24 },
          ]}
          showsVerticalScrollIndicator={false}
        >
          {/* Top Header & Branding (Padded safely below punch-hole camera) */}
          <View style={styles.header}>
            <View style={styles.brandRow}>
              <View style={styles.logoIconWrapper}>
                <MaterialCommunityIcons
                  name="timer-outline"
                  size={26}
                  color={colors.textPrimary}
                />
                <View style={styles.logoBadgeDot} />
              </View>
              <Text style={styles.brandTitle}>
                quickattend<Text style={{ color: colors.accent }}>.</Text>
              </Text>
            </View>

            <Text style={styles.brandSubtitle}>
              Điểm danh 1 chạm • Nhanh chóng & Chính xác
            </Text>

            {/* GPS Status Chip */}
            <View style={styles.gpsStatusChip}>
              <View style={styles.activeDot} />
              <Text style={styles.gpsStatusText}>
                Hệ thống GPS Campus VNU-HCM sẵn sàng
              </Text>
            </View>
          </View>

          {/* Main Auth Card */}
          <View style={[styles.authCard, shadows.card]}>
            <View style={styles.cardHeaderRow}>
              <Text style={styles.cardTitle}>Đăng nhập</Text>
              <View style={styles.versionBadge}>
                <Text style={styles.versionBadgeText}>v2.4 HyperOS</Text>
              </View>
            </View>

            {/* Email Input */}
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>EMAIL / MÃ NGƯỜI DÙNG</Text>
              <View style={styles.inputContainer}>
                <Feather
                  name="at-sign"
                  size={18}
                  color={colors.textSecondary}
                  style={styles.inputLeadingIcon}
                />
                <TextInput
                  style={styles.textInput}
                  value={email}
                  onChangeText={setEmail}
                  placeholder="name@university.edu.vn"
                  placeholderTextColor={colors.textMuted}
                  autoCapitalize="none"
                  keyboardType="email-address"
                />
                {email.length > 0 && (
                  <TouchableOpacity
                    onPress={() => setEmail("")}
                    hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                  >
                    <Ionicons
                      name="close-circle-outline"
                      size={18}
                      color={colors.textMuted}
                    />
                  </TouchableOpacity>
                )}
              </View>
            </View>

            {/* Password Input */}
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>MẬT KHẨU</Text>
              <View style={styles.inputContainer}>
                <Feather
                  name="lock"
                  size={18}
                  color={colors.textSecondary}
                  style={styles.inputLeadingIcon}
                />
                <TextInput
                  style={styles.textInput}
                  value={password}
                  onChangeText={setPassword}
                  placeholder="Nhập mật khẩu"
                  placeholderTextColor={colors.textMuted}
                  secureTextEntry={!showPassword}
                />
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                >
                  <Feather
                    name={showPassword ? "eye" : "eye-off"}
                    size={18}
                    color={colors.textSecondary}
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* Remember Me & Forgot Password */}
            <View style={styles.optionsRow}>
              <TouchableOpacity
                style={styles.checkboxRow}
                onPress={() => setRememberDevice(!rememberDevice)}
                activeOpacity={0.7}
              >
                <View
                  style={[
                    styles.checkbox,
                    rememberDevice && styles.checkboxActive,
                  ]}
                >
                  {rememberDevice && (
                    <Ionicons name="checkmark" size={13} color="#FFFFFF" />
                  )}
                </View>
                <Text style={styles.checkboxLabel}>Ghi nhớ thiết bị</Text>
              </TouchableOpacity>

              <TouchableOpacity activeOpacity={0.7}>
                <Text style={styles.forgotPasswordText}>Quên mật khẩu?</Text>
              </TouchableOpacity>
            </View>

            {/* Submit Button */}
            <TouchableOpacity
              style={styles.primaryButton}
              onPress={handleSignIn}
              activeOpacity={0.88}
            >
              <Text style={styles.primaryButtonText}>ĐĂNG NHẬP</Text>
              <Feather
                name="arrow-right"
                size={18}
                color="#FFFFFF"
                style={{ marginLeft: 8 }}
              />
            </TouchableOpacity>
          </View>

          {/* Role Selection / Secondary Options */}
          <View style={styles.secondarySection}>
            <Text style={styles.sectionHeader}>
              Chưa có tài khoản? Chọn vai trò đăng ký
            </Text>

            {/* Teacher Role Card */}
            <TouchableOpacity
              style={[styles.roleCard, shadows.card]}
              onPress={() => router.push("/(auth)/register-teacher")}
              activeOpacity={0.7}
            >
              <View style={styles.roleIconBox}>
                <MaterialCommunityIcons
                  name="card-account-details-outline"
                  size={24}
                  color={colors.textPrimary}
                />
              </View>
              <View style={styles.roleTextBox}>
                <View style={styles.roleTitleRow}>
                  <Text style={styles.roleTitle}>Giảng viên</Text>
                  <View style={styles.roleTag}>
                    <Text style={styles.roleTagText}>Host</Text>
                  </View>
                </View>
                <Text style={styles.roleSubtitle}>
                  Tạo mẫu ca & Quản lý lớp học
                </Text>
              </View>
              <View style={styles.chevronBox}>
                <Feather
                  name="chevron-right"
                  size={18}
                  color={colors.textSecondary}
                />
              </View>
            </TouchableOpacity>

            {/* Student Role Card */}
            <TouchableOpacity
              style={[styles.roleCard, shadows.card]}
              onPress={() => router.push("/(auth)/register-student")}
              activeOpacity={0.7}
            >
              <View
                style={[
                  styles.roleIconBox,
                  { backgroundColor: colors.accentLight },
                ]}
              >
                <Ionicons
                  name="location-sharp"
                  size={22}
                  color={colors.accent}
                />
              </View>
              <View style={styles.roleTextBox}>
                <View style={styles.roleTitleRow}>
                  <Text style={styles.roleTitle}>Sinh viên</Text>
                  <View
                    style={[
                      styles.roleTag,
                      { backgroundColor: colors.accentSubtle },
                    ]}
                  >
                    <Text
                      style={[styles.roleTagText, { color: colors.accentDark }]}
                    >
                      Instant
                    </Text>
                  </View>
                </View>
                <Text style={styles.roleSubtitle}>
                  Điểm danh 1 chạm qua GPS & Wi-Fi
                </Text>
              </View>
              <View style={styles.chevronBox}>
                <Feather
                  name="chevron-right"
                  size={18}
                  color={colors.textSecondary}
                />
              </View>
            </TouchableOpacity>

            {/* SSO / University Account Card */}
            <TouchableOpacity
              style={[
                styles.roleCard,
                { backgroundColor: "#F1F5F9", elevation: 0 },
              ]}
              activeOpacity={0.7}
            >
              <View
                style={[styles.roleIconBox, { backgroundColor: "#E2E8F0" }]}
              >
                <Ionicons
                  name="school-outline"
                  size={22}
                  color={colors.textPrimary}
                />
              </View>
              <View style={styles.roleTextBox}>
                <Text style={styles.roleTitle}>
                  Liên kết tài khoản trường đại học
                </Text>
                <Text style={styles.roleSubtitle}>
                  SSO Trường Đại học Bách khoa - HCMUT
                </Text>
              </View>
              <Ionicons
                name="shield-checkmark"
                size={18}
                color={colors.textSecondary}
              />
            </TouchableOpacity>
          </View>

          {/* Footer Security Notice */}
          <View style={styles.footer}>
            <View style={styles.securityRow}>
              <MaterialCommunityIcons
                name="shield-check"
                size={16}
                color={colors.accent}
              />
              <Text style={styles.securityText}>
                Bảo mật vị trí & Xác thực thiết bị an toàn SHA-256
              </Text>
            </View>

            {/* Indicator Dots */}
            <View style={styles.dotsRow}>
              <View style={[styles.dot, styles.dotActive]} />
              <View style={styles.dot} />
              <View style={[styles.dot, styles.dotActive]} />
            </View>
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
  scrollContainer: {
    paddingHorizontal: 20,
    paddingTop: 14,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  brandRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  logoIconWrapper: {
    position: "relative",
    marginRight: 8,
  },
  logoBadgeDot: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 9,
    height: 9,
    borderRadius: 5,
    backgroundColor: colors.accent,
  },
  brandTitle: {
    fontSize: 28,
    fontWeight: "800",
    color: colors.textPrimary,
    letterSpacing: -0.5,
  },
  brandSubtitle: {
    fontSize: 13,
    color: colors.textSecondary,
    marginTop: 6,
    fontWeight: "500",
  },
  gpsStatusChip: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.accentLight,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: radii.pill,
    marginTop: 12,
  },
  activeDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.accent,
    marginRight: 6,
  },
  gpsStatusText: {
    fontSize: 12,
    fontWeight: "600",
    color: colors.accentDark,
  },
  authCard: {
    backgroundColor: colors.card,
    borderRadius: radii.card,
    padding: 22,
    marginBottom: 24,
  },
  cardHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: colors.textPrimary,
  },
  versionBadge: {
    backgroundColor: colors.tagBg,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: radii.pill,
  },
  versionBadgeText: {
    fontSize: 11,
    fontWeight: "600",
    color: colors.textSecondary,
  },
  inputGroup: {
    marginBottom: 14,
  },
  inputLabel: {
    fontSize: 11,
    fontWeight: "700",
    color: colors.textSecondary,
    letterSpacing: 0.5,
    marginBottom: 6,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F1F5F9",
    borderRadius: radii.md,
    paddingHorizontal: 14,
    height: 48,
  },
  inputLeadingIcon: {
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 14,
    color: colors.textPrimary,
    fontWeight: "500",
  },
  optionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 4,
    marginBottom: 20,
  },
  checkboxRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: 18,
    height: 18,
    borderRadius: 5,
    backgroundColor: "#121316",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
  checkboxActive: {
    backgroundColor: "#121316",
  },
  checkboxLabel: {
    fontSize: 12,
    color: colors.textSecondary,
    fontWeight: "500",
  },
  forgotPasswordText: {
    fontSize: 12,
    color: colors.textSecondary,
    fontWeight: "500",
  },
  primaryButton: {
    backgroundColor: colors.darkHero,
    borderRadius: radii.pill,
    height: 52,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 3,
  },
  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
    letterSpacing: 0.8,
  },
  secondarySection: {
    gap: 10,
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 13,
    color: colors.textSecondary,
    textAlign: "center",
    marginBottom: 4,
    fontWeight: "500",
  },
  roleCard: {
    backgroundColor: colors.card,
    borderRadius: radii.lg,
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
  },
  roleIconBox: {
    width: 44,
    height: 44,
    borderRadius: radii.md,
    backgroundColor: colors.tagBg,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  roleTextBox: {
    flex: 1,
  },
  roleTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  roleTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: colors.textPrimary,
  },
  roleTag: {
    backgroundColor: colors.tagBg,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: radii.pill,
  },
  roleTagText: {
    fontSize: 10,
    fontWeight: "700",
    color: colors.textSecondary,
  },
  roleSubtitle: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 2,
  },
  chevronBox: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.canvas,
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    alignItems: "center",
    marginTop: 10,
    gap: 12,
  },
  securityRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  securityText: {
    fontSize: 11,
    color: colors.textSecondary,
    fontWeight: "500",
  },
  dotsRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: 2,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#CBD5E1",
  },
  dotActive: {
    backgroundColor: "#475569",
  },
});
