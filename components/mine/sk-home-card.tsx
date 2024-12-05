import Image from 'next/image';

export default function SkHomeCard() {
	return (
		<div className="max-w-sm rounded-lg shadow-lg bg-white overflow-hidden">
			<Image
				className="w-full h-48 object-cover"
				src="https://sulcdn.azureedge.net/content/hpc/aviation-colleges.jpeg"
				alt="Property"
				width={500}
				height={200}
			/>
			<div className="p-4">
				<h2 className="text-xl font-semibold text-gray-800">Properties to Buy</h2>
				<div>
                    <div className="flex items-center justify-between mt-2">
                        <p className="text-gray-600">501 Experts</p>
                        <button
                            type="button"
                            className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-[#e73a34] shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                            GET QUOTES
                        </button>
                    </div>
				</div>
			</div>
		</div>
	);
}
