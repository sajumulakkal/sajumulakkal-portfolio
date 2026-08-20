import React from 'react';

export default function WhitePaper({ whitePapers = [] }) {
  return (
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
  );
}
