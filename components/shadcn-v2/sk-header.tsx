import { Menu } from 'lucide-react';
import SkHeaderMenu from './sk-header-menu';
import SkHeaderSearch from './sk-header-search';

export default function SkHeader() {
	return (
		<header className="bg-white text-black p-4 flex justify-between items-center">
			<div className="flex items-center space-x-4">
				<SkHeaderMenu side="left">
					<Menu className="w-6 h-6" />
				</SkHeaderMenu>
				<img
					src="https://sulcdn.azureedge.net/content/images/v8/sulekha-logo-v3.png"
					alt="Logo"
					className="h-8"
				/>
			</div>
			<SkHeaderSearch />
		</header>
	);
}
