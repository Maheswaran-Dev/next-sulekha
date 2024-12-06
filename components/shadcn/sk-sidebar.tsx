import {
	Sidebar,
	SidebarProvider,
	SidebarHeader,
	SidebarFooter,
	SidebarContent,
	SidebarGroup,
	SidebarTrigger,
	SidebarGroupLabel,
} from '@/components/ui/sidebar';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown } from 'lucide-react';

export default function SkSidebar() {
	return (
		<Sidebar>
			<SidebarHeader>{/* <SidebarTrigger /> */}</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<div className="w-64 bg-white shadow-md p-4">
						<div className="flex justify-between mb-4">
							<button className="w-1/2 bg-blue-500 text-white py-2 rounded-md mr-2 hover:bg-blue-600">
								Sign Up
							</button>
							<button className="w-1/2 bg-gray-200 py-2 rounded-md hover:bg-gray-300">
								Sign In
							</button>
						</div>

						<ul className="space-y-4">
							<li>
								<a
									href="#"
									className="flex items-center text-gray-800 hover:text-blue-500">
									<span className="inline-block w-5 h-5 bg-gray-200 rounded-full mr-2 flex items-center justify-center">
										<svg
											className="w-3 h-3 text-gray-600"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor">
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M5 13l4 4L19 7"
											/>
										</svg>
									</span>
									<span className="font-medium">LIST YOUR BUSINESS</span>
									<span className="ml-auto text-sm text-gray-500">
										List your business for FREE
									</span>
								</a>
							</li>
							<li>
								<a
									href="#"
									className="flex items-center text-gray-800 hover:text-blue-500">
									<span className="inline-block w-5 h-5 bg-gray-200 rounded-full mr-2 flex items-center justify-center">
										<svg
											className="w-3 h-3 text-gray-600"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor">
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M15 12h2m4-4h-6m-4 4H3m0 4h6m4 4h2m4-4h6m-6-4H3"
											/>
										</svg>
									</span>
									<span className="font-medium">POST A FREE AD</span>
									<span className="ml-auto text-sm text-gray-500">
										Post rentals, property, roommates ads
									</span>
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-800 hover:text-blue-500">
									Home Services
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-800 hover:text-blue-500">
									Pest Control
								</a>
							</li>
						</ul>
					</div>
				</SidebarGroup>
				<SidebarGroup>
					<a
						href="http://www.sulekha.com/user/dashboard"
						className="icon-dashboard">
						My Dashboard
					</a>
				</SidebarGroup>
				<SidebarGroup>
					<a
						href="https://myaccount.sulekha.com/network/signout.aspx"
						className="icon-logout">
						Logout
					</a>
				</SidebarGroup>
				<SidebarGroup>
					<a
						href="https://www.sulekha.com/list-your-business?utm_source=internal&amp;utm_medium=internal_header&amp;utm_campaign=list_your_business"
						className="hub-listed-service">
						List your business
					</a>
				</SidebarGroup>
				<SidebarGroup>
					<a
						href="https://property.sulekha.com/post-an-ad?utm_source=internal&amp;utm_medium=internal_header&amp;utm_campaign=post_an_ad"
						className="hub-high-rise-apartments">
						Post a Free Ad
					</a>
				</SidebarGroup>
				<Collapsible
					defaultOpen
					className="group/collapsible">
					<SidebarGroup>
						<SidebarGroupLabel asChild>
							<CollapsibleTrigger>
								Home Services
								<ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
							</CollapsibleTrigger>
						</SidebarGroupLabel>
						<CollapsibleContent>
							<SidebarGroup>
								<a
									href="https://www.sulekha.com/pest-control-services/delhi"
									title="Pest Control">
									Pest Control
								</a>
							</SidebarGroup>
							<SidebarGroup>
								<a
									href="https://www.sulekha.com/packers-and-movers/delhi"
									title="Packers &amp; Movers">
									Packers & Movers
								</a>
							</SidebarGroup>
							<SidebarGroup>
								<a
									href="https://www.sulekha.com/waterproofing-contractors/delhi"
									title="Waterproofing Contractors">
									Waterproofing Contractors
								</a>
							</SidebarGroup>
						</CollapsibleContent>
					</SidebarGroup>
				</Collapsible>
				<Collapsible
					defaultOpen
					className="group/collapsible">
					<SidebarGroup>
						<SidebarGroupLabel asChild>
							<CollapsibleTrigger>
								Home Improvement
								<ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
							</CollapsibleTrigger>
						</SidebarGroupLabel>
						<CollapsibleContent>
							<SidebarGroup>
								<a
									href="https://www.sulekha.com/interior-designers-decorators/delhi"
									title="Interior Designers">
									Interior Designers
								</a>
							</SidebarGroup>
							<SidebarGroup>
								<a
									href="https://www.sulekha.com/modular-kitchen-dealers/delhi"
									title="Modular Kitchen">
									Modular Kitchen
								</a>
							</SidebarGroup>
							<SidebarGroup>
								<a
									href="https://www.sulekha.com/architects/delhi"
									title="Architect">
									Architect
								</a>
							</SidebarGroup>
						</CollapsibleContent>
					</SidebarGroup>
				</Collapsible>
				<Collapsible
					defaultOpen
					className="group/collapsible">
					<SidebarGroup>
						<SidebarGroupLabel asChild>
							<CollapsibleTrigger>
								Home Appliance Services
								<ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
							</CollapsibleTrigger>
						</SidebarGroupLabel>
						<CollapsibleContent>
							<SidebarGroup>
								<a
									href="https://www.sulekha.com/ac-services/delhi"
									title="AC Service">
									AC Service
								</a>
							</SidebarGroup>
							<SidebarGroup>
								<a
									href="https://www.sulekha.com/generator-repair-services/delhi"
									title="Generator Repair">
									Generator Repair
								</a>
							</SidebarGroup>
							<SidebarGroup>
								<a
									href="https://www.sulekha.com/ups-repair-services/delhi"
									title="UPS Service">
									UPS Service
								</a>
							</SidebarGroup>
						</CollapsibleContent>
					</SidebarGroup>
				</Collapsible>
				<SidebarGroup>
					<a
						href="http://property.sulekha.com"
						title="Properties &amp; rental">
						Properties & rental
					</a>
				</SidebarGroup>
				<Collapsible
					defaultOpen
					className="group/collapsible">
					<SidebarGroup>
						<SidebarGroupLabel asChild>
							<CollapsibleTrigger>
								Education & Training
								<ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
							</CollapsibleTrigger>
						</SidebarGroupLabel>
						<CollapsibleContent>
							<SidebarGroup>
								<a
									href="https://www.sulekha.com/entrance-exam-coaching/delhi"
									title="Entrance Exam">
									Entrance Exam
								</a>
							</SidebarGroup>
							<SidebarGroup>
								<a
									href="https://www.sulekha.com/college-tuitions/delhi"
									title="College Tuitions">
									College Tuitions
								</a>
							</SidebarGroup>
							<SidebarGroup>
								<a
									href="https://www.sulekha.com/distance-education/delhi"
									title="Distance Education">
									Distance Education
								</a>
							</SidebarGroup>
						</CollapsibleContent>
					</SidebarGroup>
				</Collapsible>
				<Collapsible
					defaultOpen
					className="group/collapsible">
					<SidebarGroup>
						<SidebarGroupLabel asChild>
							<CollapsibleTrigger>
								IT Training
								<ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
							</CollapsibleTrigger>
						</SidebarGroupLabel>
						<CollapsibleContent>
							<SidebarGroup>
								<a
									href="https://www.sulekha.com/cloud-computing-training/delhi"
									title="Cloud Computing">
									Cloud Computing
								</a>
							</SidebarGroup>
							<SidebarGroup>
								<a
									href="https://www.sulekha.com/data-science-and-business-analytics-training/delhi"
									title="Data Science">
									Data Science
								</a>
							</SidebarGroup>
							<SidebarGroup>
								<a
									href="https://www.sulekha.com/web-design-and-development/delhi"
									title="Web Design &amp; Development">
									Web Design & Development
								</a>
							</SidebarGroup>
						</CollapsibleContent>
					</SidebarGroup>
				</Collapsible>
				<Collapsible
					defaultOpen
					className="group/collapsible">
					<SidebarGroup>
						<SidebarGroupLabel asChild>
							<CollapsibleTrigger>
								Professional Services
								<ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
							</CollapsibleTrigger>
						</SidebarGroupLabel>
						<CollapsibleContent>
							<SidebarGroup>
								<a
									href="https://www.sulekha.com/chartered-accountants/delhi"
									title="Chartered Accountant">
									Chartered Accountant
								</a>
							</SidebarGroup>
							<SidebarGroup>
								<a
									href="https://www.sulekha.com/iso-certification-consultants/delhi"
									title="ISO Consultants">
									ISO Consultants
								</a>
							</SidebarGroup>
							<SidebarGroup>
								<a
									href="https://www.sulekha.com/advocates-lawyers/delhi"
									title="Lawyers">
									Lawyers
								</a>
							</SidebarGroup>
						</CollapsibleContent>
					</SidebarGroup>
				</Collapsible>
				<Collapsible
					defaultOpen
					className="group/collapsible">
					<SidebarGroup>
						<SidebarGroupLabel asChild>
							<CollapsibleTrigger>
								Tours & Travels
								<ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
							</CollapsibleTrigger>
						</SidebarGroupLabel>
						<CollapsibleContent>
							<SidebarGroup>
								<a
									href="https://www.sulekha.com/tour-operators/delhi"
									title="Tour Operators">
									Tour Operators
								</a>
							</SidebarGroup>
							<SidebarGroup>
								<a
									href="https://www.sulekha.com/hotels/delhi"
									title="Hotels">
									Hotels
								</a>
							</SidebarGroup>
							<SidebarGroup>
								<a
									href="https://www.sulekha.com/car-rentals/delhi"
									title="Car Rentals">
									Car Rentals
								</a>
							</SidebarGroup>
						</CollapsibleContent>
					</SidebarGroup>
				</Collapsible>
				<Collapsible
					defaultOpen
					className="group/collapsible">
					<SidebarGroup>
						<SidebarGroupLabel asChild>
							<CollapsibleTrigger>
								Health & Wellness
								<ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
							</CollapsibleTrigger>
						</SidebarGroupLabel>
						<CollapsibleContent>
							<SidebarGroup>
								<a
									href="https://www.sulekha.com/gyms/delhi"
									title="Gyms">
									Gyms
								</a>
							</SidebarGroup>
							<SidebarGroup>
								<a
									href="https://www.sulekha.com/yoga-classes/delhi"
									title="Yoga Classes">
									Yoga Classes
								</a>
							</SidebarGroup>
							<SidebarGroup>
								<a
									href="https://www.sulekha.com/beauty-parlour-services/delhi"
									title="Beauty Parlour">
									Beauty Parlour
								</a>
							</SidebarGroup>
						</CollapsibleContent>
					</SidebarGroup>
				</Collapsible>
				<Collapsible
					defaultOpen
					className="group/collapsible">
					<SidebarGroup>
						<SidebarGroupLabel asChild>
							<CollapsibleTrigger>
								Events
								<ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
							</CollapsibleTrigger>
						</SidebarGroupLabel>
						<CollapsibleContent>
							<SidebarGroup>
								<a
									href="https://www.sulekha.com/catering-services/delhi"
									title="Caterers">
									Caterers
								</a>
							</SidebarGroup>
							<SidebarGroup>
								<a
									href="https://www.sulekha.com/marriage-halls/delhi"
									title="Marriage Halls">
									Marriage Halls
								</a>
							</SidebarGroup>
							<SidebarGroup>
								<a
									href="https://www.sulekha.com/wedding-organisers/delhi"
									title="Wedding Planner">
									Wedding Planner
								</a>
							</SidebarGroup>
						</CollapsibleContent>
					</SidebarGroup>
				</Collapsible>
			</SidebarContent>
			<SidebarFooter>{/* Footer content here */}</SidebarFooter>
		</Sidebar>
	);
}
