'use client';
import { useState } from 'react';
import { FaBars, FaSearch, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerTitle,
	DrawerTrigger,
} from '@/components/ui/drawer';

const SkHeader = () => {
	const [isSidebarOpen, setSidebarOpen] = useState(false);
	const [isSearchDrawerOpen, setSearchDrawerOpen] = useState(false);

	return (
		<header className="flex justify-between items-center p-4 bg-white shadow-md">
			<div className="flex items-center">
				<Button
					onClick={() => setSidebarOpen(true)}
					className="mr-4">
					<FaBars className="h-6 w-6 text-gray-700" />
				</Button>
				<Link
					href="/"
					legacyBehavior>
					<a className="text-xl font-bold">
						<img
							src="https://sulcdn.azureedge.net/content/images/v8/sulekha-logo-v3.png"
							alt="App Logo"
							className="h-8"
						/>
					</a>
				</Link>
			</div>
			<Button onClick={() => setSearchDrawerOpen(true)}>
				<FaSearch className="h-6 w-6 text-gray-700" />
			</Button>

			<Drawer
				open={isSidebarOpen}
				onClose={() => setSidebarOpen(false)}>
				<DrawerOverlay>
					<DrawerContent>
						<DrawerClose>
							<Button variant="outline">Cancel</Button>
						</DrawerClose>
						<DrawerHeader>
							<div>
								<Button className="text-blue-500">Sign Up</Button> |{' '}
								<Button className="text-blue-500">Sign In</Button>
							</div>
						</DrawerHeader>
						<nav>
							<ul>
								<li className="mb-4">
									<a
										href="#"
										className="flex items-center">
										<span className="mr-2">🏠</span>
										<div>
											<p className="font-bold">Home</p>
											<p className="text-sm text-gray-500">Go to homepage</p>
										</div>
									</a>
								</li>
								<li className="mb-4">
									<p className="font-bold">Categories</p>
									<ul className="ml-4">
										<li className="mb-2">
											<a href="#">Category 1</a>
										</li>
										<li className="mb-2">
											<a href="#">Category 2</a>
										</li>
										<li className="mb-2">
											<a href="#">Category 3</a>
										</li>
									</ul>
								</li>
							</ul>
						</nav>
					</DrawerContent>
				</DrawerOverlay>
			</Drawer>

			<Drawer
				open={isSearchDrawerOpen}
				onClose={() => setSearchDrawerOpen(false)}>
				<DrawerOverlay>
					<DrawerContent>
						<DrawerClose>
							<Button variant="outline">Cancel</Button>
						</DrawerClose>
						<DrawerHeader>
							<p className="text-lg font-bold">Search</p>
						</DrawerHeader>
						<div className="mb-4">
							<div className="flex items-center border rounded p-2">
								<input
									type="text"
									className="flex-grow outline-none"
									placeholder="Search..."
								/>
								<Button className="ml-2">
									<FaTimes className="h-5 w-5 text-gray-500" />
								</Button>
								<Button className="ml-2">
									<FaSearch className="h-5 w-5 text-gray-500" />
								</Button>
							</div>
						</div>
						<div>
							<p className="font-bold mb-2">Suggestions</p>
							<ul>
								<li className="mb-2">
									<a href="#">Suggestion 1</a>
								</li>
								<li className="mb-2">
									<a href="#">Suggestion 2</a>
								</li>
								<li className="mb-2">
									<a href="#">Suggestion 3</a>
								</li>
							</ul>
						</div>
					</DrawerContent>
				</DrawerOverlay>
			</Drawer>
		</header>
	);
};

export default SkHeader;
