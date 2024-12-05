import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

export default function SkHeroSearchBtn() {
	return (
		<span className="isolate inline-flex rounded-md shadow-xs">
			<Menu
				as="div"
				className="relative inline-block text-left items-center bg-gray-200 px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50 focus:z-10">
				<div>
					<MenuButton className="inline-flex w-full justify-center gap-x-1.5  bg-gray-200 px-3 py-2 text-sm font-semibold text-gray-900  shadow-xs ring-inset hover:bg-gray-50">
						Delhi
						<ChevronDownIcon
							aria-hidden="true"
							className="-mr-1 size-5 text-gray-400"
						/>
					</MenuButton>
				</div>

				<MenuItems
					transition
					className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in">
					<div className="py-1">
						<MenuItem>
							<a
								href="#"
								className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden">
								Account settings
							</a>
						</MenuItem>
						<MenuItem>
							<a
								href="#"
								className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden">
								Support
							</a>
						</MenuItem>
						<MenuItem>
							<a
								href="#"
								className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden">
								License
							</a>
						</MenuItem>
						<form
							action="#"
							method="POST">
							<MenuItem>
								<button
									type="submit"
									className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden">
									Sign out
								</button>
							</MenuItem>
						</form>
					</div>
				</MenuItems>
			</Menu>

			<input
				id="search-text"
				name="search-text"
				type="text"
				placeholder="Find your service here"
				aria-label="Email"
				className="w-full bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
			/>
			<button
				type="button"
				className="relative w-60 -ml-px inline-flex items-center rounded-r-sm bg-skRed px-3 py-2 text-sm font-semibold text-white focus:z-10">
				Get Experts
			</button>
		</span>
	);
}
