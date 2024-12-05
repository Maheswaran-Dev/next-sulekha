const products = [
	{
		id: 1,
		name: 'Aviation Colleges',
		color: '2356 Experts',
		href: '#',
		imageSrc:
			'https://sulcdn.azureedge.net/content/hpc/aviation-colleges.jpeg',
		imageAlt:
			'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
		price: '$140',
    },
    {
		id: 2,
		name: 'Air Hostess Training',
		color: '655 Experts',
		href: '#',
		imageSrc:
			'https://sulcdn.azureedge.net/content/hpc/air-hostess-training.jpeg',
		imageAlt:
			'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
		price: '$140',
    },
    {
		id: 3,
		name: 'Competitive Exam Coaching',
		color: '3266 Experts',
		href: '#',
		imageSrc:
			'https://sulcdn.azureedge.net/content/hpc/competitive-exam-coaching.jpg',
		imageAlt:
			'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
		price: '$140',
    },
    {
		id: 4,
		name: 'Competitive Exam Coaching',
		color: '410 Experts',
		href: '#',
		imageSrc:
			'https://sulcdn.azureedge.net/content/hpc/cabin-crew-training.jpeg',
		imageAlt:
			'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
		price: '$140',
    },
	// More products...
];

export default function SkListingsCard() {
	return (
		<div className="bg-gray-100">
			<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
				<h2 className="text-xl font-bold text-gray-900">Education & Training</h2>

				<div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
					{products.map((product) => (
						<div key={product.id} className="border-0">
							<div className="relative">
								<div className="relative h-42 w-full overflow-hidden rounded-lg">
									<img
										alt={product.imageAlt}
										src={product.imageSrc}
										className="size-full"
									/>
								</div>
								<div className="relative mt-4">
									<h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
									<p className="mt-1 text-sm text-gray-500">{product.color}</p>
								</div>
								<div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
									<div
										aria-hidden="true"
										className="absolute inset-x-0 bottom-0 h-36 bg-linear-to-t from-black opacity-50"
									/>
									<p className="relative text-lg font-semibold text-white">
										{/* {product.price} */}
									</p>
								</div>
							</div>
							<div className="mt-6">
								<a
									href={product.href}
									className="relative flex items-center justify-center rounded-md border-2 bg-white px-8 py-2 text-sm font-medium text-skRed hover:bg-gray-200">
									GET QUOTES<span className="sr-only">, {product.name}</span>
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
