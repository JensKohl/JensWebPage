import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type React from "react";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { social_links } from "../data/contact";
import ViewCounter from "./ViewCounter";

// TypeScript Interface defining the props expected by this component
interface ProfileCardProps {
	setActiveSection: (section: string) => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ setActiveSection }) => {
	// 'bio' holds the raw markdown string loaded from public/docs/shortAboutMe.md
	const [bio, setBio] = useState<string>("");

	// ---------------------------------------------------------------------------
	// ASYNC DATA FETCHING:
	// useEffect runs once when the component mounts.
	// We use 'import.meta.env.BASE_URL' to ensure the request is routed properly
	// on GitHub Pages (e.g. https://<user>.github.io/<repo>/docs/shortAboutMe.md).
	// ---------------------------------------------------------------------------
	useEffect(() => {
		fetch(`${import.meta.env.BASE_URL}docs/shortAboutMe.md`)
			.then((res) => {
				// fetch() does not reject on HTTP 404/500, so we check res.ok manually
				if (!res.ok) throw new Error("Could not load bio");
				return res.text();
			})
			.then((text) => setBio(text))
			.catch(() => setBio("Could not load bio."));
	}, []);

	return (
		<aside
			style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}
			className="w-full lg:w-[600px] lg:min-h-screen border-r border-[#eeeeee] bg-white p-10 flex flex flex-col items-center"
		>
			{/* 1. TOP SECTION: IDENTITY */}
			<div className="mb-14">
				<div className="w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-[#f4f4f4] shrink-0">
					<img
						src={`${import.meta.env.BASE_URL}images/Jens.jpg`}
						alt="Jens K"
						className="w-full h-full object-cover grayscale"
					/>
				</div>
				<h1 className="text-[26px] font-black uppercase tracking-tight text-[#333333] leading-none mb-2">
					Dr. Jens Kohl
				</h1>
				<a
					href="mailto:jens.kohl@gmx.de"
					className="text-[14px] text-[#aaaaaa] hover:text-blue-600 transition-colors border-b border-transparent hover:border-blue-600 block w-fit mx-auto font-medium"
				>
					jens.kohl@gmx.de
				</a>
			</div>

			{/* 2. MIDDLE SECTION: BIOGRAPHY */}
			<div className="w-full mb-12">
				<div className="text-[#666666] text-[15px] leading-relaxed prose prose-sm max-w-none">
					{/* ReactMarkdown parses raw markdown and renders it as HTML elements.
					    We override standard tags (h1, h2, ul, a) to apply our custom Tailwind styles. */}
					<ReactMarkdown
						components={{
							h1: ({ ...props }) => (
								<h1
									className="text-[20px] font-bold uppercase tracking-tight text-[#333333] mt-0 mb-4 text-left"
									{...props}
								/>
							),
							h2: ({ ...props }) => (
								<h2
									className="text-[13px] font-bold uppercase tracking-[0.2em] text-[#888888] mt-8 mb-3 text-left"
									{...props}
								/>
							),
							ul: ({ ...props }) => (
								<ul
									className="list-disc list-outside ml-5 mb-6 space-y-2 text-[#666666]"
									{...props}
								/>
							),
							a: ({ ...props }) => (
								<a
									{...props}
									className="text-[#333333] border-b border-[#dddddd] hover:border-black transition-all no-underline"
								/>
							),
						}}
					>
						{bio}
					</ReactMarkdown>
				</div>
			</div>

			{/* 3. LOWER SECTION: SOCIALS */}
			<div className="flex justify-start gap-6 w-full mb-12">
				{social_links.map((social) => (
					<a
						key={social.label}
						href={social.link}
						target="_blank"
						rel="noopener noreferrer"
						className="text-[#cccccc] hover:text-black transition-colors duration-300"
					>
						<FontAwesomeIcon icon={social.icon} size="lg" />
					</a>
				))}
			</div>

			{/* 4. ANCHORED FOOTER: LEGAL & METRICS */}
			{/* We keep this one line to visually separate "Content" from "Administration" */}
			<div className="mt-auto pt-8 flex flex-col items-start w-full border-t border-[#f8f8f8]">
				<div className="flex items-center gap-2 mb-1.5">
					<p className="text-[10px] text-[#333333] uppercase tracking-[0.2em] font-bold">
						© {new Date().getFullYear()}
					</p>
					<p className="text-[10px] text-[#aaaaaa] uppercase tracking-[0.2em] font-medium">
						Dr. Jens Kohl
					</p>
				</div>

				<div className="flex items-center gap-4">
					<div className="opacity-30 grayscale hover:opacity-100 transition-opacity duration-500">
						<ViewCounter />
					</div>

					<span className="w-1 h-1 rounded-full bg-[#eeeeee]" />

					<button
						type="button"
						onClick={() => setActiveSection("Legal")}
						className="text-[9px] uppercase tracking-[0.3em] text-[#aaaaaa] hover:text-black transition-all duration-300 font-bold"
					>
						Legal & Privacy
					</button>
				</div>
			</div>
		</aside>
	);
};

export default ProfileCard;
