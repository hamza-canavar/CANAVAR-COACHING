/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#DC2626", // أحمر الشعار
          foreground: "#FFFFFF", // أبيض
        },
        secondary: {
          DEFAULT: "#1A1A1A", // أسود الشعار
          foreground: "#FFFFFF", // أبيض
        },
        background: "#0A0A0A", // خلفية داكنة جداً
        foreground: "#FFFFFF", // نص أبيض
        muted: "#A0A0A0", // نص رمادي فاتح
        card: "#1A1A1A", // خلفية البطاقات
        border: "#333333", // حدود
      },
      fontFamily: {
        sans: ["Impact", "Arial Black", "sans-serif"], // خط حاد وقوي
      },
    },
  },
  plugins: [],
};

