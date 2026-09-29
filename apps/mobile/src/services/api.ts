const apiBaseUrl = process.env.EXPO_PUBLIC_API_URL ?? 'http://localhost:4000/api';

// Add authenticated API methods here. Keeping the base URL centralized makes device testing easier.
export { apiBaseUrl };
