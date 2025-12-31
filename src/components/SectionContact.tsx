import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type React from "react";
import { type SocialLinks, social_links } from "../data/contact";

const SectionContact: React.FC = () => {
	return (
		<section className="py-8">
			{/* Changed to max-w-5xl for a wider profile. Use max-w-full to fill the entire container. */}
			<div className="bg-white border border-[#eeeeee] p-10 shadow-sm rounded-sm max-w-5xl mx-auto">
				<h2 className="text-2xl font-black uppercase tracking-tighter text-[#333333]">
					Contact
				</h2>

				<hr className="my-6 border-t border-[#eeeeee]" />

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
