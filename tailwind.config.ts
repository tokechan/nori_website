import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			navigation: {
  				text: 'hsl(var(--navigation-text))',
  				hover: 'hsl(var(--navigation-hover))',
  				background: 'hsl(var(--navigation-background))'
  			}
  		},
  		screens: {
  			'hover-hover': {'raw': '(hover: hover)'},
  			sm: '640px',
  			md: '768px',
  			lg: '1024x',
  			xl: '1280px',
  			'2xl': '1536px'
  		},
  		keyframes: {
  			'ripple-1': {
  				'0%': {
  					transform: 'scale(0.95)',
  					opacity: '0.5'
  				},
  				'50%': {
  					transform: 'scale(1.05)',
  					opacity: '0.3'
  				},
  				'100%': {
  					transform: 'scale(0.95)',
  					opacity: '0.5'
  				}
  			},
  			'ripple-2': {
  				'0%': {
  					transform: 'scale(0.98)',
  					opacity: '0.3'
  				},
  				'50%': {
  					transform: 'scale(1.02)',
  					opacity: '0.2'
  				},
  				'100%': {
  					transform: 'scale(0.98)',
  					opacity: '0.3'
  				}
  			},
  			'ripple-3': {
  				'0%': {
  					transform: 'scale(1)',
  					opacity: '0.2'
  				},
  				'50%': {
  					transform: 'scale(1.01)',
  					opacity: '0.1'
  				},
  				'100%': {
  					transform: 'scale(1)',
  					opacity: '0.2'
  				}
  			},
  			'nav-tap': {
  				'0%': {
  					transform: 'scale(1)',
  					opacity: '1'
  				},
  				'50%': {
  					transform: 'scale(0.95)',
  					opacity: '0.8'
  				},
  				'100%': {
  					transform: 'scale(1)',
  					opacity: '1'
  				}
  			}
  		},
  		animation: {
  			'ripple-1': 'ripple-1 4s ease-in-out infinite',
  			'ripple-2': 'ripple-2 4s ease-in-out infinite 0.3s',
  			'ripple-3': 'ripple-3 4s ease-in-out infinite 0.6s',
  			'nav-tap': 'nav-tap 0.2s ease-in-out'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		fontFamily: {
  			sans: [
  				'var(--font-notoSansJP)',
  				'var(--font-amiri)',
  				'sans-serif'
  			],
  			amiri: ['var(--font-amiri)', 'serif'],
  			'noto-sans': ['var(--font-notoSansJP)', 'sans-serif'],
  			base: [
  				'var(--font-amiri)',
  				'var(--font-notoSansJP)',
  				'sans-serif'
  			]
  		},
  	}
  },
  plugins: [],
} satisfies Config;