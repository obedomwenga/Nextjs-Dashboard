import React from 'react';

export const metadata = {
	title: 'Get Started',
};

export default async function AuthLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className='min-h-screen'>
			<div>{children}</div>
		</div>
	);
}
