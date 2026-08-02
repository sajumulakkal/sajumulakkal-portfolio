export default function About({ summary, competencies, education, resumes }) {
  // Safe array fallbacks to prevent .map() runtime crashes
  const compList = Array.isArray(competencies) ? competencies : [];
  const eduList = Array.isArray(education) ? education : [];

  return (
    <div className="space-y-12">
      {/* Bio Summary */}
      {summary && (
        <div className="space-y-4">
          <div className="border-b border-slate-200 pb-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
              About Me
            </h2>
          </div>
          <p className="text-slate-700 leading-relaxed text-base md:text-lg bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            {summary}
          </p>
        </div>
      )}

      {/* Core Competencies */}
      {compList.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-slate-800">Core Competencies</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {compList.map((comp, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:border-indigo-300 transition-all"
              >
                <h4 className="font-bold text-indigo-600 mb-1">
                  {comp?.name || "Competency"}
                </h4>
                <p className="text-slate-600 text-sm leading-snug">
                  {comp?.desc || ""}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education Timeline */}
      {eduList.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-slate-800">Education</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {eduList.map((edu, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm"
              >
                {edu?.period && (
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-100">
                    {edu.period}
                  </span>
                )}
                <h4 className="font-bold text-slate-800 mt-2">
                  {edu?.degree || "Degree"}
                </h4>
                <p className="text-slate-500 text-sm">
                  {edu?.institution || ""}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}