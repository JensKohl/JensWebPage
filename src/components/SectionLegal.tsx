import type React from "react";

const SectionLegal: React.FC = () => {
	return (
		<div className="animate-fadeIn">
			{/* 1. THE WHITE BOX (Label removed for a cleaner start) */}
			<div className="bg-white p-10 lg:p-16 shadow-[0_1px_3px_rgba(0,0,0,0.05)] border border-[#eeeeee]">
				{/* IMPRESSUM */}
				<section className="mb-20">
					<h2 className="text-[32px] font-black uppercase tracking-tight text-[#333333] mb-8">
						Impressum
					</h2>
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
		</div>
	);
};

export default SectionLegal;
