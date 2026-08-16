import type React from "react";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const SectionPublications: React.FC = () => {
	const [content, setContent] = useState<string>("");

	useEffect(() => {
		fetch(`${import.meta.env.BASE_URL}docs/Publications.md`)
			.then((res) => {
				if (!res.ok) throw new Error("Could not load publications");
				return res.text();
			})
			.then((text) => setContent(text))
			.catch(() => setContent("Could not load publications."));
	}, []);

	return (
		<section className="animate-fadeIn">
			<div className="text-[#666666] text-[15px] leading-relaxed prose prose-sm max-w-none">
				<ReactMarkdown
					components={{
						h1: ({ ...props }) => (
							<h1
								className="text-[22px] font-black uppercase tracking-tight text-[#333333] mt-4 mb-8 border-b border-[#eeeeee] pb-4"
								{...props}
							/>
						),
						h2: ({ ...props }) => (
							<h2
								className="text-[14px] font-bold uppercase tracking-[0.2em] text-[#333333] mt-10 mb-4"
								{...props}
							/>
						),
						p: ({ ...props }) => <p className="mb-4" {...props} />,
						ul: ({ ...props }) => (
							<ul
								className="list-disc list-outside ml-6 mb-6 space-y-3"
								{...props}
							/>
						),
						ol: ({ ...props }) => (
							<ol
								className="list-decimal list-outside ml-6 mb-6 space-y-3"
								{...props}
							/>
						),
						li: ({ ...props }) => <li className="pl-2" {...props} />,
						a: ({ ...props }) => (
							<a
								className="text-[#333333] border-b border-[#cccccc] hover:border-black transition-all no-underline"
								{...props}
							/>
						),
						strong: ({ ...props }) => (
							<strong className="font-bold text-[#333333]" {...props} />
						),
					}}
				>
					{content}
				</ReactMarkdown>
			</div>
		</section>
	);
};

export default SectionPublications;
