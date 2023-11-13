import { Block, Link, Navbar, Page, Panel } from "konsta/react";
import { roles, industry, location, salary } from "../data";
const MobileFilterSection = ({ leftPanelOpened, setLeftPanelOpened }) => {
	return (
		<div className="md:hidden">
			<Panel
				side="left"
				opened={leftPanelOpened}
				onBackdropClick={() => setLeftPanelOpened(false)}
			>
				<Page>
					<Navbar
						title="Refine"
						right={
							<Link navbar onClick={() => setLeftPanelOpened(false)}>
								Close
							</Link>
						}
					/>
					<Block className="space-y-2">
						<div className="bg-white flex justify-center px-4">
							<div className="w-full flex flex-col gap-y-2">
								<div className="">
									<h1 className="text-md font-semibold text-slate-800 mb-2 pb-1 border-b-2 border-purple-700">
										Role
									</h1>
									<div className="flex flex-col gap-y-2">
										{roles.map((role, id) => (
											<div key={id} className="flex items-center">
												<input
													id="checked-checkbox"
													type="checkbox"
													value=""
													className="w-4 h-4 text-purple-600 bg-gray-100 border-purple-300 rounded"
												/>
												<label
													htmlFor="checked-checkbox"
													className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
												>
													{role.title}
												</label>
											</div>
										))}
									</div>
								</div>
								<div className="">
									<h1 className="text-md font-semibold text-slate-800 mb-2 pb-1 border-b-2 border-purple-700">
										Industry
									</h1>
									<div className="flex flex-col gap-y-2">
										{industry.map((role, id) => (
											<div key={id} className="flex items-center">
												<input
													id="checked-checkbox"
													type="checkbox"
													value=""
													className="w-4 h-4 text-purple-600 bg-gray-100 border-purple-300 rounded"
												/>
												<label
													htmlFor="checked-checkbox"
													className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
												>
													{role.title}
												</label>
											</div>
										))}
									</div>
								</div>
								<div className="">
									<h1 className="text-md font-semibold text-slate-800 mb-2 pb-1 border-b-2 border-purple-700">
										Location
									</h1>
									<div className="flex flex-col gap-y-2">
										{location.map((role, id) => (
											<div key={id} className="flex items-center">
												<input
													id="checked-checkbox"
													type="checkbox"
													value=""
													className="w-4 h-4 text-purple-600 bg-gray-100 border-purple-300 rounded"
												/>
												<label
													htmlFor="checked-checkbox"
													className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
												>
													{role.title}
												</label>
											</div>
										))}
									</div>
								</div>
								<div className="">
									<h1 className="text-md font-semibold text-slate-800 mb-2 pb-1 border-b-2 border-purple-700">
										Salary
									</h1>
									<div className="flex flex-col gap-y-2">
										{salary.map((role, id) => (
											<div key={id} className="flex items-center">
												<input
													id="checked-checkbox"
													type="checkbox"
													value=""
													className="w-4 h-4 text-purple-600 bg-gray-100 border-purple-300 rounded"
												/>
												<label
													htmlFor="checked-checkbox"
													className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
												>
													{role.title}
												</label>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</Block>
				</Page>
			</Panel>
		</div>
	);
};

export default MobileFilterSection;
