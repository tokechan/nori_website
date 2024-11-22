import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        'ripple-1': {
          '0%': { transform: 'scale(0.95)', opacity: '0.5' },
          '50%': { transform: 'scale(1.05)', opacity: '0.3' },
          '100%': { transform: 'scale(0.95)', opacity: '0.5' },
        },
        'ripple-2': {
          '0%': { transform: 'scale(0.98)', opacity: '0.3' },
          '50%': { transform: 'scale(1.02)', opacity: '0.2' },
          '100%': { transform: 'scale(0.98)', opacity: '0.3' },
        },
        'ripple-3': {
          '0%': { transform: 'scale(1)', opacity: '0.2' },
          '50%': { transform: 'scale(1.01)', opacity: '0.1' },
          '100%': { transform: 'scale(1)', opacity: '0.2' },
        },
      },
      animation: {
        'ripple-1': 'ripple-1 4s ease-in-out infinite',
        'ripple-2': 'ripple-2 4s ease-in-out infinite 0.3s',
        'ripple-3': 'ripple-3 4s ease-in-out infinite 0.6s',
      },
    },
  },
  plugins: [],
} satisfies Config;