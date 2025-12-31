import type React from "react";

/**
 * NavBar Component
 * Displays the name/brand and the navigation buttons.
 */
interface NavBarProps {
	active: string;
	setActive: (val: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ active, setActive }) => {
	const navLinks = [
		"About",
		"Resume",
		"Projects",
		"Publications",
		"Contact",
		"Legal",
	];

	return (
		<nav className="fixed top-0 left-0 w-full h-[64px] bg-white border-b border-[#eeeeee] z-[100] flex items-center px-8">
			{/* Name/Brand Section with vertical divider */}
			<div className="flex items-center h-full pr-8 border-r border-[#eeeeee] mr-8">
				<button
					type="button"
					onClick={() => setActive("About")}
					className="text-[14px] font-black uppercase tracking-[0.25em] text-[#333333] cursor-pointer"
				>
					Jens Kohl
				</button>
			</div>

			{/* Navigation Link List */}
			<div className="flex gap-8">
				{navLinks.map((item) => (
					<button
						type="button"
						key={item}
						onClick={() => setActive(item)}
						className={`text-[11px] font-bold uppercase tracking-[0.25em] transition-colors cursor-pointer ${
							active === item
								? "text-[#333333] border-b border-black"
								: "text-[#aaaaaa] hover:text-[#333333]"
						}`}
					>
						{item}
					</button>
				))}
			</div>
		</nav>
	);
};

export default NavBar;
