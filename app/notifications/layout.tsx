import React from 'react';
import AppLayout from '../appLayout';

export const metadata = {
	title: 'Notifications',
};

export default async function NotificationsLayout({
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
