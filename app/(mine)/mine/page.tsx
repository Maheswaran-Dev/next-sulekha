import SkHomeCard from '@/components/mine/sk-home-card';
import SkHomeCarousel from '@/components/mine/sk-home-carousel';
import HeroImage from '@/components/tailwindui/sk-hero-image';

export default function Home() {
	return (
		<>
			<HeroImage />
			<div className="my-20"></div>
			<SkHomeCarousel
				items={[...Array.from({ length: 20 }, (_, i) => <SkHomeCard key={i} />)]}
			/>
			<div className="my-20"></div>
		</>
	);
}
