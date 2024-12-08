import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MapPin, Search } from 'lucide-react';

export default function SkHeroImg() {
	return (
		<div className="relative bg-gray-800 overflow-hidden">
			<div className="absolute inset-0">
				<img
					className="h-full w-full object-cover"
					src="https://sulcdn.azureedge.net/content/hp/bg/photography-m.jpg"
					alt="Hero Image"
				/>
				<div
					className="absolute inset-0 bg-gray-700 mix-blend-multiply opacity-50"
					aria-hidden="true"></div>
			</div>
			<div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
				<div className="absolute top-4 left-4 text-gray-300 text-sm font-semibold">Sulekha</div>
				<h1 className="text-center text-2xl font-extrabold tracking-tight text-gray-200 sm:text-3xl lg:text-4xl">
					Fast, FREE way to get experts.
				</h1>
				<div className="mt-10 flex justify-center">
					<div className="flex bg-white rounded-md overflow-hidden">
						<Button className="flex items-center px-4 py-2 bg-gray-200 text-gray-600 hover:bg-gray-300">
							<MapPin className="h-5 w-5 mr-2" />
							Location
						</Button>
						<Input
							type="text"
							placeholder="Find your service here"
							className="px-4 py-2 border-0 focus:outline-none focus:ring-2 focus:ring-indigo-500"
						/>
						<Button className="flex items-center px-4 py-2 bg-gray-200 text-gray-600 hover:bg-gray-300">
							<Search className="h-5 w-5" />
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
