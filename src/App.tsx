import { useState } from "react";
import NavBar from "./components/NavBar";
import ProfileCard from "./components/ProfileCard";
import SectionAbout from "./components/SectionAbout";
import SectionContact from "./components/SectionContact";
import SectionProjects from "./components/SectionProjects";
import SectionResume from "./components/SectionResume";
import SectionPublications from './components/SectionPublications';
import SectionLegal from './components/SectionLegal'; // Updated Import

export default function App() {
    const [activeSection, setActiveSection] = useState("About");

    return (
        <div className="min-h-screen bg-[#eeeeee] font-sans">
            <NavBar active={activeSection} setActive={setActiveSection} />

            <div className="flex flex-col lg:flex-row pt-[64px]">

                {/* Passing the state switcher to the sidebar */}
                <ProfileCard setActiveSection={setActiveSection} />

                <main className="flex-1 px-6 lg:px-14 py-12">
                    <div className="max-w-none mx-auto">
                        {activeSection === "About" && <SectionAbout />}
                        {activeSection === "Resume" && <SectionResume />}
                        {activeSection === "Projects" && <SectionProjects />}
                        {activeSection === "Contact" && <SectionContact />}
                        {activeSection === 'Publications' && <SectionPublications />}

                        {/* Updated to use SectionLegal */}
                        {activeSection === 'Legal' && (
                            <SectionLegal setActiveSection={setActiveSection} />
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
}