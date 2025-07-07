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
          DEFAULT: "#E01F26", // أحمر الشعار الرئيسي
          foreground: "#FFFFFF", // نص أبيض على الأحمر
        },
        secondary: {
          DEFAULT: "#1A1A1A", // أسود الشعار الرئيسي
          foreground: "#FFFFFF", // نص أبيض على الأسود
        },
        background: "#0D0D0D", // خلفية داكنة جداً (قريب من الأسود في الشعار)
        foreground: "#FFFFFF", // نص أبيض على الخلفية
        muted: {
          DEFAULT: "#A0A0A0", // رمادي فاتح للنصوص الثانوية (من الشعار)
          foreground: "#1A1A1A", // نص أسود على الرمادي
        },
        card: {
          DEFAULT: "#2A2A2A", // لون بطاقات أغمق قليلاً من الخلفية
          foreground: "#FFFFFF", // نص أبيض على البطاقات
        },
        border: "#E01F26", // حدود حمراء
        input: "#E01F26", // حدود حقول الإدخال حمراء
        ring: "#E01F26", // حلقات التركيز حمراء
      },
      fontFamily: {
        sans: ["Impact", "Arial Black", "sans-serif"], // خطوط حادة وقوية
      },
    },
  },
  plugins: [],
}

