import { useState } from 'react';
import profileData from './data/profile.json';

import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import WhitePaper from './components/WhitePaper'; // New optional component import if you have a separate file
import './index.css';

export default function App() {
  // Safe destructuring with fallback values to guard against runtime errors
  const personalInfo = profileData?.personalInfo || {};
  const whitePapers = profileData?.whitePapers || [];
  const coreCompetencies = profileData?.coreCompetencies || [];
  const technicalSkills = profileData?.technicalSkills || {};
  const education = profileData?.education || [];
  const experience = profileData?.experience || [];
  const certifications = profileData?.certifications || {};
  const learningWorks = profileData?.learningWorks || [];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900 scroll-smooth">
      {/* Sticky Navigation */}
      <Navbar name={personalInfo.name || "Saju Mulakkal Joseph"} />

      {/* Hero Header */}
      <div id="home" className="pt-16">
        <Hero personalInfo={personalInfo} />
      </div>

      {/* Main Container */}
      <main className="container mx-auto px-4 space-y-24 py-12 max-w-6xl">
        <section id="about" className="scroll-mt-20">
          <About 
            summary={personalInfo.summary || ""} 
            competencies={coreCompetencies} 
            education={education}
            resumes={personalInfo.resumes || {}} 
          />
        </section>

        {/* White Papers Section */}
        <section id="whitepapers" className="scroll-mt-20">
          <div className="border-b border-slate-200 pb-4 mb-8">
            <h2 className="text-3xl font-bold text-slate-900">White Papers & Research</h2>
            <p className="text-slate-600 mt-1">Technical publications, architecture specifications, and Web3 strategy frameworks.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {whitePapers.map((paper, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col justify-between hover:shadow-md transition">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{paper.title}</h3>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">{paper.description}</p>
                  
                  {paper.techStack && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {paper.techStack.map((tech, tIdx) => (
                        <span key={tIdx} className="px-2.5 py-1 text-xs font-medium bg-indigo-50 text-indigo-700 rounded-md">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <a
                  href={paper.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg text-sm transition"
                >
                  Read White Paper
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="scroll-mt-20">
          <Experience experience={experience} />
        </section>

        <section id="skills" className="scroll-mt-20">
          <Skills skills={technicalSkills} />
        </section>

        <section id="certifications" className="scroll-mt-20">
          <Certifications certifications={certifications} />
        </section>

        <section id="projects" className="scroll-mt-20">
          <Projects projects={learningWorks} />
        </section>

        <section id="contact" className="scroll-mt-20">
          <Contact contact={personalInfo.contact || {}} socials={personalInfo.socials || {}} />
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-200 bg-white text-center">
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} {personalInfo.name || "Saju Mulakkal Joseph"} &bull; Built with React & Tailwind CSS
        </p>
      </footer>
    </div>
  );
}
