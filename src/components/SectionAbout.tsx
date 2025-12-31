import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

const SectionAbout: React.FC = () => {
  // --- 1. STATE MANAGEMENT ---
  // We create a "variable" to hold the text from our file.
  // 'content' starts empty, and 'setContent' is the function we use to update it.
  const [content, setContent] = useState<string>("");

  // 'loading' helps us show a placeholder while the file is being downloaded.
  const [loading, setLoading] = useState<boolean>(true);

  // --- 2. THE DATA FETCH ---
  // useEffect runs automatically when the component first appears on the screen.
  useEffect(() => {
    // We "fetch" (download) the file from your public folder.
    fetch('/docs/aboutMe.md')
      .then((res) => {
        // If the file isn't there, we throw an error.
        if (!res.ok) throw new Error("Markdown file not found");
        return res.text(); // Convert the file into a plain text string.
      })
      .then((text) => {
        setContent(text);   // Put that text into our 'content' variable.
        setLoading(false);  // Tell the app we are finished loading.
      })
      .catch((err) => {
        console.error("Error loading markdown:", err);
        setContent("Failed to load bio content.");
        setLoading(false);
      });
  }, []); // The empty brackets [] mean "only run this once".

  return (
    <section className="py-8">
      {/* The Container: White background, gray border, and a shadow for the 'box' look */}
      <div className="bg-white border border-[#eeeeee] p-10 shadow-sm rounded-sm max-w-5xl mx-auto">

        {/* The Main Header */}
        <h2 className="text-2xl font-black uppercase tracking-tighter text-[#333333]">
          About me
        </h2>

        {/* The horizontal gray line divider */}
        <hr className="my-6 border-t border-[#eeeeee]" />

        <div className="text-[#666666] text-lg leading-relaxed">
          {/* IF logic: If loading is true, show the skeleton. If false, show the Markdown. */}
          {loading ? (
            /* A 'Pulse' animation that looks like text loading */
            <div className="animate-pulse space-y-4">
              <div className="h-4 bg-gray-100 rounded w-3/4"></div>
              <div className="h-4 bg-gray-100 rounded w-full"></div>
            </div>
          ) : (
            /* ReactMarkdown takes your text and turns it into HTML tags */
            <ReactMarkdown
              components={{
                // For every # Header in Markdown, use these styles:
                h1: ({ children }) => <h3 className="text-xl font-black uppercase tracking-tight text-[#333333] mt-10 mb-4">{children}</h3>,
                h2: ({ children }) => <h4 className="text-lg font-bold uppercase tracking-wide text-[#333333] mt-8 mb-3">{children}</h4>,

                // Bullet points (ul) and Numbered lists (ol)
                ul: ({ children }) => <ul className="list-disc ml-6 mb-6 space-y-2">{children}</ul>,
                ol: ({ children }) => <ol className="list-decimal ml-6 mb-6 space-y-2">{children}</ol>,
                li: ({ children }) => <li className="pl-2">{children}</li>,

                // Blockquotes (text starting with > in Markdown)
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-[#eeeeee] pl-6 italic my-8 text-[#888888]">
                    {children}
                  </blockquote>
                ),

                // Code snippets (text inside `backticks`)
                code: ({ children }) => (
                  <code className="bg-[#f7f7f7] text-[#333333] px-1.5 py-0.5 rounded font-mono text-sm border border-[#eeeeee]">
                    {children}
                  </code>
                ),

                // Regular paragraphs
                p: ({ children }) => <p className="mb-5 last:mb-0">{children}</p>,

                // Bold text (**text**)
                strong: ({ children }) => <strong className="font-bold text-[#333333]">{children}</strong>,

                // Links ([text](url))
                a: ({ href, children }) => (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#333333] underline decoration-[#eeeeee] underline-offset-4 hover:text-black hover:decoration-black transition-all"
                  >
                    {children}
                  </a>
                ),
              }}
            >
              {content}
            </ReactMarkdown>
          )}
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;