/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E50914", // أحمر الشعار
        secondary: "#1A1A1A", // أسود الشعار
        accent: "#FFFFFF", // أبيض الشعار
        background: "#0A0A0A", // خلفية داكنة جداً
        foreground: "#FFFFFF", // نص أبيض
        muted: "#A0A0A0", // نص رمادي فاتح
        border: "#333333", // حدود رمادية داكنة
        card: "#1C1C1C", // خلفية البطاقات
        "card-foreground": "#FFFFFF", // نص البطاقات
      },
      fontFamily: {
        sans: ["Arial", "sans-serif"], // خط حاد وعصري
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(255, 0, 0, 0.3)",
      }
    },
  },
  plugins: [],
}

