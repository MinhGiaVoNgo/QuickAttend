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

export default function RegisterTeacherScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [fullName, setFullName] = useState("TS. Nguyễn Văn A");
  const [email, setEmail] = useState("giangvien@daihoc.edu.vn");
  const [teacherId, setTeacherId] = useState("GV-IT-102 • Khoa CNTT");
  const [password, setPassword] = useState("QuickAttend#2024");
  const [showPassword, setShowPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(true);

  const handleRegister = () => {
    router.push("/(teacher)/dashboard");
  };

  return (
    <View style={[styles.root, { paddingTop: Math.max(insets.top, 24) + 8 }]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
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

          <Text style={styles.topBarTitle}>Personal Credentials</Text>

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
          {/* EduPass Banner Card */}
          <View style={[styles.eduPassBanner, shadows.heroDark]}>
            <View style={styles.eduPassIconWrapper}>
              <MaterialCommunityIcons
                name="shield-check"
                size={20}
                color={colors.accent}
              />
            </View>
            <View style={styles.eduPassTextBox}>
              <Text style={styles.eduPassTitle}>
                Xác thực học thuật EduPass
              </Text>
              <Text style={styles.eduPassSubtitle}>
                Tự động đồng bộ lịch trình & danh sách lớp
              </Text>
            </View>
            <Ionicons name="sparkles-outline" size={18} color="#94A3B8" />
          </View>

          {/* Form Card */}
          <View style={[styles.formCard, shadows.card]}>
            {/* Full Name */}
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>HỌ VÀ TÊN</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.textInput}
                  value={fullName}
                  onChangeText={setFullName}
                  placeholder="Nhập họ và tên"
                  placeholderTextColor={colors.textMuted}
                />
                <Feather name="user" size={18} color={colors.textSecondary} />
              </View>
            </View>

            {/* University Email */}
            <View style={styles.inputGroup}>
              <View style={styles.labelRow}>
                <Text style={styles.inputLabel}>
                  EMAIL TRƯỜNG CẤP (.EDU / ĐẠI HỌC)
                </Text>
                <Text style={styles.requiredBadge}>Bắt buộc</Text>
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.textInput}
                  value={email}
                  onChangeText={setEmail}
                  placeholder="name@university.edu.vn"
                  placeholderTextColor={colors.textMuted}
                  autoCapitalize="none"
                  keyboardType="email-address"
                />
                <Ionicons
                  name="business-outline"
                  size={18}
                  color={colors.accent}
                />
              </View>
              <View style={styles.helperRow}>
                <Feather
                  name="info"
                  size={13}
                  color={colors.accent}
                  style={{ marginTop: 2, marginRight: 5 }}
                />
                <Text style={styles.helperText}>
                  Sử dụng email định danh của trường để hệ thống tự động kích
                  hoạt quyền giảng viên & bộ công cụ host.
                </Text>
              </View>
            </View>

            {/* Teacher ID / Department */}
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>MÃ GIẢNG VIÊN / KHOA</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.textInput}
                  value={teacherId}
                  onChangeText={setTeacherId}
                  placeholder="Ví dụ: GV-IT-102 • Khoa CNTT"
                  placeholderTextColor={colors.textMuted}
                />
                <MaterialCommunityIcons
                  name="card-account-details-outline"
                  size={18}
                  color={colors.textSecondary}
                />
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

            {/* Terms Checkbox */}
            <TouchableOpacity
              style={styles.termsRow}
              onPress={() => setAgreedToTerms(!agreedToTerms)}
              activeOpacity={0.7}
            >
              <View
                style={[
                  styles.checkboxCircle,
                  agreedToTerms && styles.checkboxActive,
                ]}
              >
                {agreedToTerms && (
                  <Ionicons name="checkmark" size={12} color="#FFFFFF" />
                )}
              </View>
              <Text style={styles.termsText}>
                Tôi đồng ý với{" "}
                <Text style={styles.termsHighlight}>
                  Quy chuẩn Điểm danh Bảo mật
                </Text>{" "}
                &{" "}
                <Text style={styles.termsHighlight}>
                  Điều khoản QuickAttend.
                </Text>
              </Text>
            </TouchableOpacity>
          </View>

          {/* Complete Registration Button */}
          <TouchableOpacity
            style={styles.submitButton}
            onPress={handleRegister}
            activeOpacity={0.88}
          >
            <Text style={styles.submitButtonText}>
              HOÀN TẤT ĐĂNG KÝ GIẢNG VIÊN
            </Text>
            <Feather
              name="arrow-right"
              size={18}
              color="#FFFFFF"
              style={{ marginLeft: 8 }}
            />
          </TouchableOpacity>

          {/* Footer Back to Sign In */}
          <View style={styles.footerRow}>
            <Text style={styles.footerText}>Đã có tài khoản? </Text>
            <TouchableOpacity
              onPress={() => router.push("/(auth)/sign-in")}
              activeOpacity={0.7}
            >
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  backButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: colors.card,
    alignItems: "center",
    justifyContent: "center",
  },
  topBarTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.textPrimary,
  },
  avatarButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarPlaceholder: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#1E293B",
    alignItems: "center",
    justifyContent: "center",
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  eduPassBanner: {
    backgroundColor: colors.darkHero,
    borderRadius: radii.lg,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  eduPassIconWrapper: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "rgba(16, 185, 129, 0.15)",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  eduPassTextBox: {
    flex: 1,
  },
  eduPassTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#FFFFFF",
    marginBottom: 2,
  },
  eduPassSubtitle: {
    fontSize: 11,
    color: "#94A3B8",
    lineHeight: 15,
  },
  formCard: {
    backgroundColor: colors.card,
    borderRadius: radii.card,
    padding: 22,
    marginBottom: 24,
  },
  inputGroup: {
    marginBottom: 16,
  },
  labelRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 6,
  },
  inputLabel: {
    fontSize: 11,
    fontWeight: "700",
    color: colors.textSecondary,
    letterSpacing: 0.5,
    marginBottom: 6,
  },
  requiredBadge: {
    fontSize: 11,
    fontWeight: "700",
    color: colors.accentDark,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F1F5F9",
    borderRadius: radii.md,
    paddingHorizontal: 14,
    height: 50,
  },
  textInput: {
    flex: 1,
    fontSize: 14,
    color: colors.textPrimary,
    fontWeight: "600",
  },
  helperRow: {
    flexDirection: "row",
    alignItems: "flex-start",
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
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 4,
    paddingRight: 10,
  },
  checkboxCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#121316",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    marginTop: 2,
  },
  checkboxActive: {
    backgroundColor: "#121316",
  },
  termsText: {
    flex: 1,
    fontSize: 12,
    color: colors.textSecondary,
    lineHeight: 18,
  },
  termsHighlight: {
    fontWeight: "700",
    color: colors.textPrimary,
  },
  submitButton: {
    backgroundColor: colors.darkHero,
    borderRadius: radii.pill,
    height: 54,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 3,
  },
  submitButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "700",
    letterSpacing: 0.6,
  },
  footerRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 4,
  },
  footerText: {
    fontSize: 13,
    color: colors.textSecondary,
  },
  footerLink: {
    fontSize: 13,
    fontWeight: "700",
    color: colors.textPrimary,
    textDecorationLine: "underline",
  },
});
