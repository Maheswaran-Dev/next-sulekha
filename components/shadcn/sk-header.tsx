import { Menu, Search } from 'lucide-react';
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetClose } from '@/components/ui/sheet';

export default function SkHeader() {
    return (
        <header className="bg-white shadow-md flex justify-between items-center p-4">
            <div className="flex items-center">
                <Sheet>
                    <SheetTrigger asChild>
                        <button className="mr-4">
                            <Menu className="w-6 h-6" />
                        </button>
                    </SheetTrigger>
                    <SheetContent side="left">
                        <SheetHeader>
                            <SheetClose asChild>
                                <button className="mr-4">
                                    <Menu className="w-6 h-6" />
                                </button>
                            </SheetClose>
                            <h2>Menu</h2>
                        </SheetHeader>
                        {/* Add your menu items here */}
                        <nav>
                            <a href="#" className="block py-2">Home</a>
                            <a href="#" className="block py-2">About</a>
                            <a href="#" className="block py-2">Contact</a>
                        </nav>
                    </SheetContent>
                </Sheet>
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