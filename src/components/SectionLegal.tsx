import React from 'react';

// This tells TypeScript that this component needs the "setActiveSection" function
interface SectionLegalProps {
  setActiveSection: (section: string) => void;
}

const SectionLegal: React.FC<SectionLegalProps> = ({ setActiveSection }) => {
  return (
    <div className="max-w-3xl animate-fadeIn">
      
      {/* Back Button */}
      <button 
        onClick={() => setActiveSection('About')}
        className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400 hover:text-black transition-colors mb-12 block"
      >
        ← Back to About
      </button>

      {/* --- IMPRESSUM --- */}
      <section className="mb-20">
        <h1 className="text-[26px] font-black uppercase tracking-tight text-[#333333] mb-8">
          Legal Disclosure // Impressum
        </h1>
        
        <div className="space-y-6 text-[15px] leading-relaxed text-[#666666]">
          <div>
            <p className="font-bold text-black uppercase text-[10px] tracking-widest mb-1">Provider:</p>
            <p>Dr. Jens Kohl</p>
            <p>Georgenstraße</p>
            <p>80798 Munich</p>
          </div>

          <div>
            <p className="font-bold text-black uppercase text-[10px] tracking-widest mb-1">Contact:</p>
            <p>Email: jens.kohl@gmx.de</p>
          </div>
        </div>
      </section>

      {/* --- PRIVACY --- */}
      <section>
        <h2 className="text-[18px] font-bold uppercase tracking-widest text-[#333333] mb-8">
          Privacy Policy // Datenschutz
        </h2>
        <div className="text-[15px] leading-relaxed text-[#666666]">
          <p>
            This website does not use tracking cookies or store personal user data. 
            We use a privacy-friendly visit counter (CounterAPI) that does not identify 
            individual visitors. Server logs are kept only for security and technical 
            stability according to Art. 6 Para. 1 lit. f GDPR.
          </p>
        </div>
      </section>
    </div>
  );
};

export default SectionLegal;