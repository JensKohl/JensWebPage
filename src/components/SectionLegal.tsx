import type React from "react";

const SectionLegal: React.FC = () => {
	return (
		<section className="animate-fadeIn pb-20">
			{/* Unified white box container matching SectionProjects */}
			<div className="bg-white border border-[#eeeeee] p-8 shadow-sm transition-all">
				{/* IMPRESSUM */}
				<section className="mb-20">
					<header className="mb-8 border-b border-[#eeeeee] pb-6">
						<h1 className="text-[24px] font-black uppercase tracking-tight text-[#333333]">
							Impressum
						</h1>
					</header>
					<div className="space-y-6 text-[15px] leading-relaxed text-[#555555]">
						<div>
							<p className="font-bold text-black uppercase text-[10px] tracking-widest mb-2">
								Provider
							</p>
							<p>Dr. Jens Kohl</p>
						</div>
						<div>
							<p className="font-bold text-black uppercase text-[10px] tracking-widest mb-2">
								Contact
							</p>
							<p>Email: jens.kohl@gmx.de</p>
						</div>
					</div>
				</section>

				{/* PRIVACY */}
				<section>
					<h2 className="text-[18px] font-bold uppercase tracking-widest text-[#333333] mb-8 border-t border-[#f7f7f7] pt-12">
						Datenschutz
					</h2>
					<div className="text-[15px] leading-relaxed text-[#555555]">
						<p>
							This website does not use tracking cookies or store personal user
							data. We use a privacy-friendly visit counter (CounterAPI) that
							does not identify individual visitors. Server logs are kept only
							for security and technical stability according to Art. 6 Para. 1
							lit. f GDPR.
						</p>
					</div>
				</section>
			</div>
		</section>
	);
};

export default SectionLegal;
