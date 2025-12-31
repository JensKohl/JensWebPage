import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { social_links } from '../data/contact'; 

const ProfileCard: React.FC = () => {
  // --- 1. STATE ---
  // We use 'bio' to store the text from our markdown file. 
  // It starts as an empty string ('').
  const [bio, setBio] = useState<string>('');

  // --- 2. THE EFFECT (LIFECYCLE) ---
  // This runs once when the component is first loaded onto the page.
  useEffect(() => {
    // We 'fetch' (download) the file from the public folder path.
    fetch('/docs/shortAboutMe.md')
      .then((res) => res.text()) // Convert the response into plain text.
      .then((text) => setBio(text)) // Save that text into our 'bio' state.
      .catch(() => setBio('Could not load bio.')); // If it fails, show an error message.
  }, []); // The empty brackets [] ensure this only runs once.


// TODO: fix spacing so that all appears on one side!

  return (
    /* The main sidebar container. 
       - lg:w-[600px] sets the desktop width.
       - flex-col + items-center keeps everything stacked and centered. */
    <aside
        style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }} // Hides the scrollbar
        className="w-full lg:w-[600px] lg:min-h-screen border-r border-[#eeeeee] bg-white p-10 flex flex-col items-center"
        >

      {/* 1. IMAGE SECTION 
          - overflow-hidden + rounded-full makes the image a perfect circle.
          - grayscale makes it black and white. */}
      <div className="w-40 h-40 rounded-full overflow-hidden mb-4 border-4 border-[#f4f4f4] shrink-0 mx-auto lg:mx-0">
        <img 
          src="/images/JensAnzug2.jpg" 
          alt="Jens K" 
          className="w-full h-full object-cover grayscale"
        />
      </div>

      {/* 2. IDENTITY SECTION 
          - space-y-1 adds a tiny bit of vertical space between the name and email. */}
      <div className="space-y-1 items-center">
        <h1 className="text-[26px] font-black uppercase tracking-tight text-[#333333]">
          Dr. Jens Kohl
        </h1>
        <a 
          href="mailto:jens.kohl@gmx.de" 
          className="text-[14px] text-[#aaaaaa] hover:text-blue-600 transition-colors border-b border-transparent hover:border-blue-600 mb-8 block" 
        >
          jens.kohl@gmx.de
        </a>
      </div>

      {/* FIRST DIVIDER 
          - border-t (top) creates the horizontal line.
          - mb-12 adds a generous 48px gap after the line. */}
      <hr className="w-full border-0 border-t border-[#eeeeee] mb-12" />


      {/* 3. ABOUT SECTION (Markdown Content) 
          - mb-16 adds a large 64px gap after the text finishes. */}
      <div className="space-y-1 w-full mb-16">

        {/* prose prose-sm is a Tailwind plugin that styles markdown tags automatically. */}
        <div className="text-[#666666] text-[15px] leading-relaxed prose prose-sm max-w-none">
          {/* ReactMarkdown takes our 'bio' string and turns it into HTML tags. */}
          <ReactMarkdown
            components={{
                // Custom styling for # in Markdown (H1)
                h1: ({ ...props }) => (
                    <h1 className="text-[22px] font-black uppercase tracking-tight text-[#333333] mt-8 mb-4 text-center w-full" {...props} />
                ),
                // Custom styling for ## in Markdown (H2)
                h2: ({ ...props }) => (
                    <h2 className="text-[14px] font-bold uppercase tracking-[0.2em] text-[#444444] mt-8 mb-3 text-center w-full" {...props} />
                ),
                // Custom styling for Bullet Points (ul)
                ul: ({ ...props }) => (
                    <ul className="list-disc list-outside ml-6 mb-6 space-y-2 text-[#666666]" {...props} />
                ),
                // Custom styling for Numbered Lists (ol)
                ol: ({ ...props }) => (
                    <ol className="list-decimal list-outside ml-6 mb-6 space-y-2 text-[#666666]" {...props} />
                ),
                // Custom styling for Links inside the markdown text
                a: ({ ...props }) => (
                    <a {...props} className="text-[#333333] border-b border-[#cccccc] hover:border-black transition-all no-underline" />
                )
            }}
          >
            {bio}
          </ReactMarkdown>
        </div>
      </div>

      {/* SECOND DIVIDER 
          - Identical to the first divider to maintain visual balance. */}
      <hr className="w-full border-0 border-t border-[#eeeeee] mb-8" />

      {/* 4. SOCIAL LINKS ROW 
          - We use .map to loop through your social_links array and create icons. */}
      <div className="flex justify-center gap-6 pt-2">
        {social_links.map((social, index : number) => (
          <a
            key={index} // React needs a unique key for items in a list.
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            title={social.label}
            className="text-[#aaaaaa] hover:text-black transition-colors duration-300"
          >
            <FontAwesomeIcon icon={social.icon} size="lg" />
          </a>
        ))}
      </div>

      {/* 5. COPYRIGHT FOOTER 
          - mt-2 pt-12 creates space at the bottom. */}
        <div className="mt-2 pt-12 flex flex-col items-center gap-8 w-full">
            <p className="text-[10px] text-[#cccccc] uppercase tracking-[0.2em] font-medium">
                © {new Date().getFullYear()} Jens Kohl
            </p>
        </div>

    </aside>
  );
};

export default ProfileCard;