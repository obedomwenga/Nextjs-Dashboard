import React from 'react';
import AppLayout from '../appLayout';

export const metadata = {
	title: 'Settings',
};

export default async function SettingsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className='min-h-screen'>
			<AppLayout>
				<div>{children}</div>
			</AppLayout>{' '}
		</div>
	);
}
