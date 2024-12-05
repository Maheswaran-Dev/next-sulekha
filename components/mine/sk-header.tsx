'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaSearch } from 'react-icons/fa';

const SkHeader: React.FC = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<header className="sticky top-0 bg-white shadow-md z-50">
			<div className="container mx-auto flex items-center justify-between p-4">
				<div className="flex items-center">
					<button
						className="md:hidden"
						onClick={toggleMobileMenu}>
						<FaBars size={24} />
					</button>
					<Link href="/">
						<Image
							src="https://sulcdn.azureedge.net/content/images/v8/sulekha-logo-v3.png"
							alt="Logo"
							width={100}
							height={40}
						/>
					</Link>
				</div>
				<div className="flex items-center space-x-4">
					<div className="hidden md:flex space-x-4">
						<Link href="/" legacyBehavior>
							<a className="text-gray-700 hover:text-gray-900">About</a>
						</Link>
						<Link href="/" legacyBehavior>
							<a className="text-gray-700 hover:text-gray-900">Services</a>
						</Link>
						<Link href="/" legacyBehavior>
							<a className="text-gray-700 hover:text-gray-900">Contact</a>
						</Link>
					</div>
					<FaSearch
						size={24}
						className="md:hidden"
					/>
				</div>
			</div>
			{isMobileMenuOpen && (
				<div className="md:hidden bg-white shadow-md">
					<Link href="/" legacyBehavior>
						<a className="block px-4 py-2 text-gray-700 hover:bg-gray-100">About</a>
					</Link>
					<Link href="/" legacyBehavior>
						<a className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Services</a>
					</Link>
					<Link href="/" legacyBehavior>
						<a className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Contact</a>
					</Link>
				</div>
			)}
		</header>
	);
};

export default SkHeader;
