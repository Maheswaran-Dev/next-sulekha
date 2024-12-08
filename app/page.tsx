import Link from 'next/link';

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2">
			<h1 className="text-4xl font-bold mb-4">Welcome to the Home Page</h1>
			<p className="text-2xl mb-8">Try the below versions:</p>
			<nav className="space-y-4">
				<div>
					<Link href="/tailwindui" className="text-blue-500 hover:underline text-xl">
						Tailwind UI
					</Link>
				</div>
				<div>
					<Link href="/mine" className="text-blue-500 hover:underline text-xl">
						Mine
					</Link>
				</div>
				<div>
					<Link href="/shadcn" className="text-blue-500 hover:underline text-xl">
						Shadcn
					</Link>
				</div>
				<div>
					<Link href="/shadcn-v2" className="text-blue-500 hover:underline text-xl">
						Shadcn-v2
					</Link>
				</div>
			</nav>
		</div>
	);
}
