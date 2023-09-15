import React from 'react';
import AppLayout from '../appLayout';

export const metadata = {
	title: 'Dashboard',
};

export default async function DashboardLayout({
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
