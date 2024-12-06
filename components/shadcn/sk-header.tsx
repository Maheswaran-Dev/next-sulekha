import { Menu, Search } from 'lucide-react';
import { SidebarTrigger } from '@/components/ui/sidebar';

export default function SkHeader() {
	return (
		<header className="bg-white shadow-md flex justify-between items-center p-4">
			<div className="flex items-center">
				<SidebarTrigger>
					<Menu className="w-6 h-6" />
				</SidebarTrigger>
				<img
					src="https://sulcdn.azureedge.net/content/images/v8/sulekha-logo-v3.png"
					alt="App Logo"
					className="h-8"
				/>
			</div>
			<button>
				<Search className="w-6 h-6" />
			</button>
		</header>
	);
}
