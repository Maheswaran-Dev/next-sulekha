const pngUrl = 'https://sulcdn.azureedge.net/content/images/v8/menu-category.png';

const incentives = [
	{
		name: 'Home & Office',
		description:
			"It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
		iconPosition: '8px -9px',
	},
	{
		name: 'Home Improvement',
		description:
			'Our AI chat widget is powered by a naive series of if/else statements. Guaranteed to irritate.',
		iconPosition: '-65px -9px',
	},
	{
		name: 'Properties & Rentals',
		description:
			"Look how fast that cart is going. What does this mean for the actual experience? I don't know.",
		iconPosition: '-153px -9px',
	},
	{
		name: 'Education & Training',
		description:
			"Buy them for your friends, especially if they don't like our store. Free money for us, it's great.",
		iconPosition: '242px -9px',
	},
	{
		name: 'Professional Services',
		description:
			"Not happy with your purchase? Return it with ease and get your money back.",
		iconPosition: '3px -75px',
	},
	{
		name: 'Travel & Transport',
		description:
			"Your payment information is safe with us. We use the latest encryption technology.",
		iconPosition: '-73px -75px',
	},
	{
		name: 'Health & Wellness',
		description:
			"We ensure the highest quality of our products. Satisfaction guaranteed.",
		iconPosition: '-172px -75px',
	},
	{
		name: 'Events',
		description:
			"Get access to exclusive offers and discounts available only to our members.",
		iconPosition: '-247px -280px',
	},
];

export default function SkServiceCategories() {
	return (
		<div className="">
			<div className="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8">
				<div className="grid grid-cols-2 gap-y-12 sm:grid-cols-2 sm:gap-x-4 lg:grid-cols-8 lg:gap-x-2">
					{incentives.map((incentive) => (
						<div key={incentive.name}>
							<div
								style={{
									backgroundImage: `url(${pngUrl})`,
									backgroundPosition: incentive.iconPosition,
									width: '68px',
									height: '40px',
									display: 'block',
									margin: '0 auto 10px',
									content: '""',
									position: 'relative',
									transition: '.3s ease-in',
								}}
								className="h-24 w-auto"
							/>
							<h3 className="mt-6 text-sm text-center font-medium text-gray-900">{incentive.name}</h3>
							{/* <p className="mt-2 text-sm text-gray-500">{incentive.description}</p> */}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
