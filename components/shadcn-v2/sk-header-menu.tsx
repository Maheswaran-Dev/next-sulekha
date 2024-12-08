import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

const session = null; // Set unauthorized as default

export default function SkHeaderMenu({
	children,
	side = 'left',
}: {
	children: React.ReactNode;
	side?: 'left' | 'right';
}) {
	return (
		<Sheet>
			<SheetTrigger>{children}</SheetTrigger>
			<SheetContent side={side}>
				<SheetHeader>
					<SheetTitle>
						<div className="bg-gray-200 p-4">
							{session ? (
								<div>
									<p>User Name</p>
									<p>example@gmail.com</p>
								</div>
							) : (
								<div>
									<Button variant="secondary">Sign Up</Button>
									<Button
										variant="secondary"
										className="ml-2">
										Sign In
									</Button>
								</div>
							)}
						</div>
					</SheetTitle>
					<SheetDescription>
						This action cannot be undone. This will permanently delete your account and remove
						your data from our servers.
					</SheetDescription>
				</SheetHeader>
			</SheetContent>
		</Sheet>
	);
}
