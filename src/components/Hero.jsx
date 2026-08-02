export default function Hero({ personalInfo }) {
  const info = personalInfo || {};
  const resumes = info.resumes || {};

  return (
    <div className="bg-slate-900 text-white py-10 md:py-14 px-4 text-center relative overflow-hidden">
      <div className="max-w-3xl mx-auto space-y-3 relative z-10">
        {info.avatar && (
          <img
            src={info.avatar}
            alt={info.name || "Profile"}
            className="w-20 h-20 md:w-24 md:h-24 rounded-full mx-auto border-2 border-indigo-500/50 shadow-md object-cover"
          />
        )}

        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
          {info.name || "Saju Mulakkal Joseph"}
        </h1>

        <p className="text-sm md:text-base text-indigo-400 font-medium max-w-xl mx-auto">
          {info.tagline || "Application & Cloud Support Manager"}
        </p>

        <p className="text-slate-400 text-xs md:text-sm max-w-xl mx-auto">
          Based in {info.location || "Singapore"} &bull; 24+ Years Enterprise IT Experience
        </p>

        <div className="pt-2 flex flex-wrap justify-center gap-2 text-xs font-semibold">
          <a
            href="#contact"
            className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-md shadow-sm transition-colors"
          >
            Contact Me
          </a>

          {resumes.onePagePdf && (
            <a
              href={resumes.onePagePdf}
              target="_blank"
              rel="noreferrer"
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 px-4 py-2 rounded-md transition-colors"
            >
              One-Page CV
            </a>
          )}

          {resumes.detailedPdf && (
            <a
              href={resumes.detailedPdf}
              target="_blank"
              rel="noreferrer"
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 px-4 py-2 rounded-md transition-colors"
            >
              Detailed CV
            </a>
          )}
        </div>
      </div>
    </div>
  );
}