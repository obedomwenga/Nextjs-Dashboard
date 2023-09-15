import React from 'react';
import '@/styles/globals.css';
import { Outfit } from 'next/font/google';
import siteConfig from '@/config/site';
import Analytics from '@/components/analytics/analytics';
import ThemeProvider from '@/components/theme/theme-provider';

interface RootLayoutProps {
	children: React.ReactNode;
}

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata = {
	title: {
		default: siteConfig.name,
		template: `%s | ${siteConfig.name}`,
	},
	description: siteConfig.description,
	keywords: [
		'Crypto',
		'Offramp',
		'Payroll',
		'Exchange crypto for fiat',
		'Stellar',
	],
	authors: [
		{
			name: 'Lumenpay',
			url: 'https://lumenpay.finance',
		},
	],
	creator: 'Lumenpay',
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: 'white' },
		{ media: '(prefers-color-scheme: dark)', color: 'black' },
	],
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: siteConfig.url,
		title: siteConfig.name,
		description: siteConfig.description,
		siteName: siteConfig.name,
	},
	twitter: {
		card: 'summary_large_image',
		title: siteConfig.name,
		description: siteConfig.description,
		images: [`${siteConfig.url}/og.jpg`],
		creator: '@loibon',
	},
	icons: {
		icon: '/favicon.ico',
		shortcut: '/favicon-16x16.png',
		apple: '/apple-touch-icon.png',
	},
	manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html
			lang='en'
			className={`${outfit.variable} font-outfit`}
			suppressHydrationWarning
		>
			<head />
			<body>
				<ThemeProvider attribute='class' defaultTheme='light' enableSystem>
					{children}
					<Analytics />
				</ThemeProvider>
			</body>
		</html>
	);
}
