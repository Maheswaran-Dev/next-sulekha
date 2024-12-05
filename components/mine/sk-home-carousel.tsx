'use client';
import React, { useState, useEffect, useRef } from 'react';

interface CarouselProps {
	items: React.ReactNode[];
}

const SkHomeCarousel: React.FC<CarouselProps> = ({ items }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [itemsToShow, setItemsToShow] = useState(1);
	const carouselRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 1200) {
				setItemsToShow(4);
			} else if (window.innerWidth >= 992) {
				setItemsToShow(3);
			} else if (window.innerWidth >= 768) {
				setItemsToShow(2);
			} else {
				setItemsToShow(1);
			}
		};

		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	useEffect(() => {
		let scrollTimeout: NodeJS.Timeout | null = null;

		const handleScroll = (event: WheelEvent) => {
			if (event.shiftKey) {
				event.preventDefault();
				if (scrollTimeout) {
					clearTimeout(scrollTimeout);
				}
				scrollTimeout = setTimeout(() => {
					if (event.deltaY > 0) {
						next();
					} else {
						prev();
					}
				}, 100); // Adjust the timeout value to reduce sensitivity
			}
		};

		const carouselElement = carouselRef.current;
		if (carouselElement) {
			carouselElement.addEventListener('wheel', handleScroll);
		}
		return () => {
			if (carouselElement) {
				carouselElement.removeEventListener('wheel', handleScroll);
			}
			if (scrollTimeout) {
				clearTimeout(scrollTimeout);
			}
		};
	}, [currentIndex, itemsToShow]);

	const next = () => {
		if (currentIndex < items.length - itemsToShow) {
			setCurrentIndex(currentIndex + 1);
		}
	};

	const prev = () => {
		if (currentIndex > 0) {
			setCurrentIndex(currentIndex - 1);
		}
	};

	return (
		<div className="flex items-center">
			<button
				onClick={prev}
				disabled={currentIndex === 0}
				className="p-2 bg-gray-300 rounded disabled:opacity-50">
				Previous
			</button>
			<div
				className="overflow-hidden w-full mx-4"
				ref={carouselRef}>
				<div
					className="flex transition-transform duration-300 ease-in-out gap-4"
					style={{
						transform: `translateX(-${(100 / itemsToShow) * currentIndex}%)`,
						width: `${(100 / itemsToShow) * items.length}%`,
					}}>
					{items.map((item, index) => (
						<div
							className="flex-shrink-0"
							key={index}
							style={{ width: `${100 / items.length}%` }}>
							{item}
						</div>
					))}
				</div>
			</div>
			<button
				onClick={next}
				disabled={currentIndex >= items.length - itemsToShow}
				className="p-2 bg-gray-300 rounded disabled:opacity-50">
				Next
			</button>
		</div>
	);
};

export default SkHomeCarousel;
