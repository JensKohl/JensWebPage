import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type React from "react";
import { type SocialLinks, social_links } from "../data/contact";

const SectionContact: React.FC = () => {
	return (
		<section className="animate-fadeIn pb-20">
			{/* Unified white box container matching SectionProjects */}
			<div className="bg-white border border-[#eeeeee] p-8 shadow-sm transition-all">
				{/* 1. Header Section */}
				<header className="mb-8 border-b border-[#eeeeee] pb-6">
					<h1 className="text-[24px] font-black uppercase tracking-tight text-[#333333]">
						Contact
					</h1>
				</header>

				<p className="text-[#666666] text-lg leading-relaxed mb-16">
					I'm reachable via several channels. Feel free to shoot me a mail!
				</p>

				{/* Icons with the "Polishing" effects */}
				<div className="flex flex-wrap gap-12">
					{social_links.map((social: SocialLinks) => (
						<a
							key={social.label}
							href={social.link}
							target="_blank"
							rel="noopener noreferrer"
							title={social.label}
							className="text-[#333333] hover:text-black transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
						>
							{social.customSvgPath ? (
								<svg
									viewBox="0 0 24 24"
									fill="currentColor"
									className="w-8 h-8"
									role="img"
								>
									<title>{social.label}</title>
									<path d={social.customSvgPath} />
								</svg>
							) : (
								<FontAwesomeIcon icon={social.icon} className="text-3xl" />
							)}
						</a>
					))}
				</div>
			</div>
		</section>
	);
};

export default SectionContact;
