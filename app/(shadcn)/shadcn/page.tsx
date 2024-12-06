import SkHeader from '@/components/shadcn/sk-header';
import React from 'react';

export default function Home() {
	return (
		<div>
			<h1>Welcome to Shadcn Page</h1>
			<p>This is a simple Next.js page component.</p>
		</div>
	);
};

export const metadata = {
    title: 'Shadcn',
    description: 'Shadcn page description',
};