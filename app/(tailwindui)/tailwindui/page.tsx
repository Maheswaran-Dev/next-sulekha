import SkHeroImage from '@/components/tailwindui/sk-hero-image';
import SkListingsCard from '@/components/tailwindui/sk-listings-card';
import SkOverallCount from '@/components/tailwindui/sk-overall-count';
import SkServiceCategories from '@/components/tailwindui/sk-service-categories';

export default function Home() {
	return (
		<>
			<SkHeroImage />
			<div className="w-full my-5"></div>
			<SkOverallCount />
			<div className="w-full my-5"></div>
			<SkServiceCategories />
			<div className="w-full my-10"></div>
			<SkListingsCard />
			<SkListingsCard />
			<div className="w-full my-52"></div>
		</>
	);
}
