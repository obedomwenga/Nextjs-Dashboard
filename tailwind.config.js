/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx, js, jsx}',
		'./components/**/*.{ts,tsx,js,jsx}',
		'./app/**/*.{ts,tsx,js,jsx}',
	],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				sidebar: 'hsl(var(--sidebar))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
			},
			backgroundImage: {
				'hero-desktop-bg':
					'url(https://res.cloudinary.com/dqab6gg7d/image/upload/v1671534336/bg/Bg-desktop_fapbxy.svg)',
				'bg-payment':
					'url(https://res.cloudinary.com/dqab6gg7d/image/upload/v1671701372/bg/Bgpayment_xypaai.svg)',
				'hero-image':
					'url(https://res.cloudinary.com/dqab6gg7d/image/upload/v1671549032/bg/Image_kwy4ez.png)',
				vector:
					'url(https://res.cloudinary.com/dqab6gg7d/image/upload/v1671651489/bg/vector_2_gmzujq.svg)',
				ellipse:
					'url(https://res.cloudinary.com/dqab6gg7d/image/upload/v1671713552/bg/Ellipse_3_tvz21s.svg)',
				'bg-footer':
					'url(https://res.cloudinary.com/dqab6gg7d/image/upload/v1671714493/bg/Bg_furug3.svg)',
				circles:
					'url(https://res.cloudinary.com/dqab6gg7d/image/upload/v1671715417/bg/Lingkaran_xubmil.svg)',
			},
			fontFamily: {
				outfit: ['var(--font-outfit)'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: 0 },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: 0 },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
		},
	},
	plugins: [
		// eslint-disable-next-line global-require
		require('tailwindcss-animate', 'prettier-plugin-tailwindcss', '@tailwindcss/forms'),
	],
};
