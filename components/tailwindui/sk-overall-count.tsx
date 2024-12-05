import { ArrowPathIcon, CalendarIcon, TruckIcon } from '@heroicons/react/24/outline';

const perks = [
	{ name: '30+ M', description: 'Happy Users', icon: CalendarIcon },
	{ name: '200+ K', description: 'Verified Experts', icon: ArrowPathIcon },
	{ name: '200+', description: 'Categories', icon: TruckIcon },
];

export default function Example() {
	return (
		<div className="bg-white">
			<h2 className="sr-only">Our perks</h2>
			<div className="mx-auto text-center max-w-7xl divide-y divide-gray-200 lg:flex lg:justify-center lg:divide-x lg:divide-y-0 lg:py-8">
				{perks.map((perk, perkIdx) => (
					<div
						key={perkIdx}
						className="py-8 lg:w-1/6 lg:flex-none lg:py-0">
						<div className="mx-auto flex max-w-xs items-center px-4 lg:max-w-none lg:px-8">
							{/* <perk.icon aria-hidden="true" className="size-8 shrink-0 text-indigo-600" /> */}
							<div className="ml-4 flex flex-auto flex-col">
								<h3 className="font-bold text-gray-900">{perk.name}</h3>
								<p className="text-sm text-gray-500">{perk.description}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
