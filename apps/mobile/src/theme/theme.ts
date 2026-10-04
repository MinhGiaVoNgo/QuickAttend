/**
 * Design tokens and theme configuration adhering to DESIGN.md
 */

export const colors = {
  // Canvas / Background
  canvas: '#F7F8FA',

  // Surfaces
  card: '#FFFFFF',
  cardSubtle: '#F8FAFC',
  cardMuted: '#F1F5F9',

  // Primary Hero / Dark Accent
  darkHero: '#121316',
  darkCard: '#18191E',

  // Text Colors
  textPrimary: '#111827', // High-contrast Dark Charcoal
  textSecondary: '#64748B', // Muted Slate
  textMuted: '#94A3B8',
  textLight: '#F8FAFC',
  textOnDark: '#FFFFFF',

  // Accent & Status
  accent: '#10B981', // Soft Emerald Green
  accentLight: '#E6FBF2',
  accentSubtle: '#D1FAE5',
  accentDark: '#059669',

  // Borders & Dividers
  borderSubtle: '#E2E8F0',
  borderLight: '#EDF2F7',

  // Badges & Tag backgrounds
  tagBg: '#F1F5F9',
  tagBlueBg: '#EFF6FF',
  tagBlueText: '#2563EB',
  tagGreenBg: '#ECFDF5',
  tagGreenText: '#059669',
};

export const radii = {
  xs: 8,
  sm: 12,
  md: 16,
  lg: 24,
  xl: 30,
  card: 28,
  pill: 9999,
};

export const shadows = {
  card: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.04,
    shadowRadius: 20,
    elevation: 2,
  },
  cardHover: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.07,
    shadowRadius: 24,
    elevation: 4,
  },
  heroDark: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 16 },
    shadowOpacity: 0.16,
    shadowRadius: 28,
    elevation: 6,
  },
  floatingNav: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.08,
    shadowRadius: 30,
    elevation: 8,
  },
};
