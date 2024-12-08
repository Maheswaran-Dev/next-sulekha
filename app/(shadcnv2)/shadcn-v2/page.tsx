import SkHeader from '@/components/shadcn-v2/sk-header';
import SkHeroImg from '@/components/shadcn-v2/sk-hero-img';
import React from 'react';

export default function Home() {
	return (
		<div>
			<SkHeader />
			<SkHeroImg />
		</div>
	);
}

export const metadata = {
	title: 'Shadcn',
	description: 'Shadcn page description',
};
