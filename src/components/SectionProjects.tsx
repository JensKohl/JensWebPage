import type React from "react";
import { projects } from "../data/projects";

const SectionProjects: React.FC = () => {
	return (
		<section className="animate-fadeIn pb-20">
			{/* 1. New Section Header */}
			<header className="mb-12 border-b border-[#eeeeee] pb-6">
				<h1 className="text-[24px] font-black uppercase tracking-tight text-[#333333]">
					Selected (publishable) projects I did or was part of
				</h1>
			</header>

			{/* 2. Projects List */}
			<div className="flex flex-col gap-16">
				{/* -------------------------------------------------------------------
				    DYNAMIC LIST RENDERING (.map):
				    We transform each project object in our array into JSX elements.
				    - 'key={project.title}': React requires a unique 'key' identifier 
				      for every rendered list item to efficiently optimize DOM updates.
				    ------------------------------------------------------------------- */}
				{projects.map((project) => (
					<article
						key={project.title}
						className="bg-white border border-[#eeeeee] p-8 shadow-sm transition-all"
					>
						{/* Title */}
						<h2 className="text-[20px] font-bold text-[#333333] leading-tight">
							{project.title}
						</h2>

						{/* Conditional Rendering: Renders subtitle only if present in data */}
						{project.subtitle && (
							<p className="text-[14px] text-[#666666] mt-1 font-medium">
								{project.subtitle}
							</p>
						)}

						{/* Date */}
						<p className="text-[11px] font-bold uppercase tracking-widest text-[#aaaaaa] mt-2 mb-6">
							{project.date}
						</p>

						{/* Combined Image & Minimal Gray Box */}
						<div className="relative group overflow-hidden border border-[#eeeeee] flex flex-col">
							<div className="w-full">
								<img
									src={`${import.meta.env.BASE_URL}${project.image.replace(/^\//, "")}`}
									alt={project.title}
									className="w-full h-auto min-h-[300px] max-h-[600px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700 block"
								/>
							</div>

							{/* Minimal Height Bright Gray Box */}
							<div className="w-full bg-[#f8f8f8] p-6 border-t border-[#eeeeee]">
								<p className="text-[#333333] text-[15px] leading-relaxed whitespace-pre-line w-full">
									{project.desc}
								</p>

								{project.link && (
									<a
										href={project.link}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-block mt-4 text-[11px] font-bold text-black uppercase tracking-[0.2em] border-b-2 border-black hover:text-[#666666] hover:border-[#666666] transition-all"
									>
										Click for more details
									</a>
								)}
							</div>
						</div>
					</article>
				))}
			</div>
		</section>
	);
};

export default SectionProjects;
