import type { Metadata } from 'next';
import localFont from 'next/font/local';
import SkHeader from '@/components/mine/sk-header';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<SkHeader />
				{children}
			</body>
		</html>
	);
}
