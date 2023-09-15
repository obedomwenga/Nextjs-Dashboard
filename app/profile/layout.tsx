import React from 'react';
import AppLayout from '../appLayout';

export const metadata = {
	title: 'Profile',
};

export default async function ProfileLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className='min-h-screen'>
			<AppLayout>
				<div>{children}</div>
			</AppLayout>
		</div>
	);
}
