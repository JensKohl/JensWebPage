import React from 'react';

/**
 * SectionResume Component
 * This is a functional component that renders a "Resume" box.
 */
const SectionResume: React.FC = () => {
  return (
    /* --- THE BOX ---
       - article: A semantic tag used for self-contained content.
       - bg-white: Sets the background color.
       - border border-[#eeeeee]: Creates that very light gray outline.
       - p-8 lg:p-12: Padding (inner space). It's 32px on mobile and 48px on large screens.
       - mb-12: Margin Bottom. Puts space between this section and the next one. 
    */
    <article
      id="resume"
      className="bg-white border border-[#eeeeee] p-8 lg:p-12 mb-12 shadow-[2px_2px_0px_rgba(0,0,0,0.01)]"
    >
      
      {/* --- 1. HEADER SECTION ---
          - mb-10: Space below the header.
          - border-b: Adds a bottom divider line.
          - pb-8: Padding bottom, so the text doesn't touch the line.
      */}
      <header className="mb-10 border-b border-[#f4f4f4] pb-8">
        <h2 className="text-[26px] font-[900] uppercase tracking-tight italic text-[#333333]">
          Resume
        </h2>
      </header>

      {/* --- 2. CONTENT SECTION ---
          - py-10: Extra padding on top and bottom to make the box feel "open".
          - flex flex-col items-center: This is the "magic" that centers the text 
            both vertically and horizontally.
      */}
      <div className="py-10 flex flex-col items-center justify-center">
        
        {/* --- THE TEXT ---
            - text-[#aaaaaa]: A light gray color for a subtle look.
            - text-sm: Small font size.
            - uppercase: Capitalizes every letter.
            - tracking-[0.3em]: Widens the space between letters for a modern feel.
            - italic: Slants the text.
        */}
        <p className="text-[#aaaaaa] text-sm uppercase tracking-[0.3em] font-medium italic">
          Under Construction
        </p>
        
        {/* --- DECORATIVE LINE ---
            - w-12: Makes the line 48px wide.
            - h-[1px]: Makes the line very thin.
            - mt-4: Adds 16px of space above this line.
        */}
        <div className="w-12 h-[1px] bg-[#eeeeee] mt-4"></div>
      </div>

    </article>
  );
};

export default SectionResume;