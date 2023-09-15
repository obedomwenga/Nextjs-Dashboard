import Sidebar from '@/components/navigation/sidebar';
import React from 'react';

export default function AppLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className='min-h-screen'>
			<Sidebar />
			<div>{children}</div>
		</div>
	);
}
