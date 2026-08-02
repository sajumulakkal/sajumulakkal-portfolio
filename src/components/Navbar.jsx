import { useState } from 'react';

export default function Navbar({ name, socials, certifications }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Uses profile.json URLs if available, with your exact links as fallbacks
  const linkedinUrl =
    socials?.linkedin || 'https://www.linkedin.com/in/sajumulakkal/';
  const credlyUrl =
    certifications?.externalBadgeProfiles?.credly ||
    'https://www.credly.com/users/saju-mulakkal-joseph/badges/credly';

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Learning Works', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-[100] border-b border-slate-200">
      <div className="container mx-auto px-4 h-16 flex justify-between items-center max-w-6xl">
        {/* Brand / Logo */}
        <a
          href="#home"
          className="font-bold text-lg tracking-tight text-slate-800 hover:text-indigo-600 transition-colors"
        >
          {name || 'Saju Mulakkal Joseph'}
        </a>

        {/* Desktop Links & Social Badges */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
            >
              {link.name}
            </a>
          ))}

          {/* Vertical Separator */}
          <div className="h-4 w-px bg-slate-300 mx-1"></div>

          {/* Quick Action Badges */}
          <div className="flex items-center gap-2">
            {/* LinkedIn Icon */}
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer"
              title="LinkedIn Profile"
              className="p-1.5 rounded-lg bg-slate-100 hover:bg-blue-50 text-slate-600 hover:text-blue-600 transition-colors flex items-center justify-center border border-slate-200"
            >
              <svg className="w-4 h-4 fill-current text-[#0A66C2]" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>

            {/* Credly Badge Link */}
            <a
              href={credlyUrl}
              target="_blank"
              rel="noreferrer"
              title="Verified Credly Badges"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200/80 text-xs font-bold transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
              Credly
            </a>
          </div>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden p-2 text-slate-600 hover:text-slate-900"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 shadow-lg">
          <div className="flex flex-col p-4 gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-base font-medium text-slate-700 hover:text-indigo-600 px-2 py-1 transition-colors"
              >
                {link.name}
              </a>
            ))}

            <div className="border-t border-slate-100 pt-3 flex gap-3">
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-blue-600 px-2 py-1"
              >
                <svg className="w-4 h-4 fill-current text-[#0A66C2]" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
                LinkedIn
              </a>

              <a
                href={credlyUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded bg-amber-50 text-amber-800 border border-amber-200"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                Credly Badges
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}