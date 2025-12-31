import { useState } from "react";
import NavBar from "./components/NavBar";
import ProfileCard from "./components/ProfileCard";
import SectionAbout from "./components/SectionAbout";
import SectionContact from "./components/SectionContact";
import SectionProjects from "./components/SectionProjects";
import SectionResume from "./components/SectionResume";
import SectionPublications from './components/SectionPublications';

/**
 * Main Application Component
 * Manages the high-level layout and the current active section.
 */
export default function App() {
	// State to track which section is currently being viewed
	const [activeSection, setActiveSection] = useState("About");

	return (
		<div className="min-h-screen bg-[#eeeeee] font-sans">
			{/* Fixed Header with Navigation */}
			<NavBar active={activeSection} setActive={setActiveSection} />

			<div className="flex flex-col lg:flex-row pt-[64px]">
				{/* Sidebar: Fixed position on large screens */}
				<ProfileCard />

				{/* Main Content Area: allow the text to fill the entire right window. */}
				<main className="flex-1 px-6 lg:px-14 py-12">
					<div className="max-w-none mx-auto">
						{activeSection === "About" && <SectionAbout />}
						{activeSection === "Resume" && <SectionResume />}
						{activeSection === "Projects" && <SectionProjects />}
						{activeSection === "Contact" && <SectionContact />}
						{activeSection === 'Publications' && <SectionPublications />}
					</div>
				</main>
			</div>
		</div>
	);
}