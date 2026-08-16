import type React from "react";

/**
 * SectionResume Component
 * This is a functional component that renders a "Resume" box.
 */
const SectionResume: React.FC = () => {
	return (
		<section className="animate-fadeIn pb-20">
			{/* Unified white box container matching SectionProjects */}
			<article
				id="resume"
				className="bg-white border border-[#eeeeee] p-8 shadow-sm transition-all"
			>
				{/* 1. Header Section */}
				<header className="mb-8 border-b border-[#eeeeee] pb-6">
					<h1 className="text-[24px] font-black uppercase tracking-tight text-[#333333]">
						Resume
					</h1>
				</header>

			{/* --- 2. CONTENT SECTION ---
          - py-10: Extra padding on top and bottom to make the box feel "open".
          - flex flex-col items-center: This is the "magic" that centers the text 
            both vertically and horizontally.
      */}
			<div className="py-10 flex flex-col items-center justify-center">
				{/* --- THE TEXT ---
            - text-[#aaaaaa]: A light gray color for a subtle look.
            - text-sm: Small font size.
            - uppercase: Capitalizes every letter.
            - tracking-[0.3em]: Widens the space between letters for a modern feel.
            - italic: Slants the text.
        */}
				<p className="text-[#aaaaaa] text-sm uppercase tracking-[0.3em] font-medium italic">
					Under Construction
				</p>

				{/* --- DECORATIVE LINE ---
            - w-12: Makes the line 48px wide.
            - h-[1px]: Makes the line very thin.
            - mt-4: Adds 16px of space above this line.
        */}
				<div className="w-12 h-[1px] bg-[#eeeeee] mt-4"></div>
			</div>
		</article>
	</section>
);
};

export default SectionResume;
