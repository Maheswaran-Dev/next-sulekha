import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { Search } from 'lucide-react'; // Import the search icon from lucide-react
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu'; // Import dropdown menu components

export default function skHeaderSearch() {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <div>
            <Search className="h-5 w-5 cursor-pointer" /> {/* Use the search icon */}
          </div>
        </SheetTrigger>
        <SheetContent side="right">
          <div className="p-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Result 1</DropdownMenuItem>
                <DropdownMenuItem>Result 2</DropdownMenuItem>
                <DropdownMenuItem>Result 3</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
