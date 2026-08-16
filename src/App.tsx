import { useState } from "react";
import NavBar from "./components/NavBar";
import ProfileCard from "./components/ProfileCard";
import SectionAbout from "./components/SectionAbout";
import SectionContact from "./components/SectionContact";
import SectionLegal from "./components/SectionLegal"; // Updated Import
import SectionProjects from "./components/SectionProjects";
import SectionPublications from "./components/SectionPublications";
import SectionResume from "./components/SectionResume";

export default function App() {
	// ---------------------------------------------------------------------------
	// 1. STATE-DRIVEN NAVIGATION (Single Page Application - SPA)
	// Instead of traditional multi-page links (which cause full browser reloads),
	// we store the currently visible section in React State ('activeSection').
	// The default section is set to "About".
	// ---------------------------------------------------------------------------
	const [activeSection, setActiveSection] = useState("About");

	return (
		<div className="min-h-screen bg-[#eeeeee] font-sans">
			{/* We pass 'setActiveSection' as a prop so the navbar buttons can change the view */}
			<NavBar active={activeSection} setActive={setActiveSection} />

			<div className="flex flex-col lg:flex-row pt-[64px]">
				{/* The sidebar profile card also receives 'setActiveSection' to link to the Legal page */}
				<ProfileCard setActiveSection={setActiveSection} />

				<main className="flex-1 px-6 lg:px-14 py-12">
					<div className="max-w-none mx-auto">
						{/* CONDITIONAL RENDERING:
						    The '&&' (logical AND) operator evaluates the right side only
						    when the left-side condition is true. */}
						{activeSection === "About" && <SectionAbout />}
						{activeSection === "Resume" && <SectionResume />}
						{activeSection === "Projects" && <SectionProjects />}
						{activeSection === "Contact" && <SectionContact />}
						{activeSection === "Publications" && <SectionPublications />}
						{activeSection === "Legal" && <SectionLegal />}
					</div>
				</main>
			</div>
		</div>
	);
}
