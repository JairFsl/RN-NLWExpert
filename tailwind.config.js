/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        AppRegular: "Inter_400Regular",
        AppMedium: "Inter_500Medium",
        AppSemiBold: "Inter_600SemiBold",
        AppBold: "Inter_700Bold",
      },
    },
  },
  plugins: [],
};
