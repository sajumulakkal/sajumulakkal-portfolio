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
import './index.css';

export default function App() {
  // Safe destructuring with fallback values to guard against runtime errors
  const personalInfo = profileData?.personalInfo || {};
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