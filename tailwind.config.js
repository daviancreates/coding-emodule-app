/** @type {import('tailwindcss').Config} */
module.exports = {
  // Melacak semua file di folder app & components agar bisa pakai Tailwind
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}
