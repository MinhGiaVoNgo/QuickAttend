Role & Platform: Android Mobile App UI Designer (Material 3 meets High-end Minimalist).
Design Aesthetic & Reference: 
- Clean, premium, calm, and distraction-free UI inspired by minimalist productivity apps.
- NO unnecessary boxes, heavy borders, or harsh dividing lines. Separation is achieved strictly through subtle background color contrasts, whitespace, typography hierarchy, and soft elevation/shadows.
- Border radius: Highly rounded corners (24px to 32px for cards, pill-shaped for primary action buttons).
- Color Palette:
  * Canvas/Background: Soft warm off-white (#F7F8FA)
  * Surface Card: Pure White (#FFFFFF) with subtle, smooth drop shadow (0 8px 24px rgba(0, 0, 0, 0.04))
  * Primary Hero / Dark Accent: Deep Dark Slate (#121316) for prominent highlight cards
  * Text Colors: High-contrast Dark Charcoal (#111827) for bold headings, Muted Slate (#64748B) for body and metadata
  * Accent / Status: Soft Emerald Green (#10B981) for success/active states
- Typography: Modern geometric Sans-serif (like Inter or Roboto), generous line-height, bold and lowercase/sentence-case headline aesthetic.
- Form Factor: Android frame (with Android system status bar at top and gesture pill navigation at bottom).

Navigation & Header Standardization Rules:
- NO default native navigation headers: Always disable default React Navigation / Expo Router native headers (`headerShown: false` on all Stack layouts and Root layout).
- Custom Standard TopBar: Every screen must use a custom TopBar with:
  * Left: Circular Back button (`width: 38`, `height: 38`, `borderRadius: 19`, `backgroundColor: colors.card`, Feather `arrow-left` icon).
  * Center/Title: Descriptive heading in `colors.textPrimary`, bold `16px-18px`.
  * Right: Profile avatar button (`34px-38px` circular) or notification bell / action icon.
- Edge-to-Edge & Safe Area Insets:
  * Transparent translucent Status Bar (`<StatusBar style="dark" translucent backgroundColor="transparent" />`).
  * Canvas background (`#F7F8FA`) fills 100% of screen under system status bar and navigation gesture bar.
  * Insets handled dynamically with `useSafeAreaInsets()`: `paddingTop: Math.max(insets.top, 24) + 8` on TopBar and `paddingBottom: Math.max(insets.bottom, 16) + 16` on scroll content / floating navigation bars.