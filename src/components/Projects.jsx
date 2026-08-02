export default function Projects({ projects }) {
  if (!projects || !Array.isArray(projects) || projects.length === 0) return null;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border-b border-slate-200 pb-3">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
          Learning Works & Live Demos
        </h2>
        <p className="text-slate-500 text-sm mt-1">
          Demonstrating technical concepts across React, DApps, 3D WebGL, ML, and Blockchain platforms.
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md hover:border-indigo-300 transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-slate-800">
                {proj?.title || "Untitled Project"}
              </h3>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-1.5">
                {(proj?.techStack || proj?.tech || []).map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-0.5 text-xs font-semibold rounded-md bg-indigo-50 text-indigo-700 border border-indigo-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                {proj?.description || "No description provided."}
              </p>
            </div>

            {/* Launch Link */}
            {proj?.url && (
              <div className="pt-4 mt-4 border-t border-slate-100">
                <a
                  href={proj.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-semibold text-sm gap-1 group"
                >
                  Launch Project Live
                  <span className="group-hover:translate-x-1 transition-transform">
                    &rarr;
                  </span>
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}