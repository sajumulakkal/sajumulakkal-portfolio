export default function Experience({ experience }) {
  // Guard against undefined or non-array props
  const list = Array.isArray(experience) ? experience : [];

  if (list.length === 0) return null;

  return (
    <div className="space-y-6">
      <div className="border-b border-slate-200 pb-3">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
          Professional Experience
        </h2>
        <p className="text-slate-500 text-sm mt-1">
          24+ years across investment banking, application operations, quality engineering, and IT leadership.
        </p>
      </div>

      <div className="space-y-6 relative before:absolute before:inset-0 before:left-3 md:before:left-4 before:w-0.5 before:bg-slate-200">
        {list.map((item, idx) => (
          <div key={idx} className="relative pl-8 md:pl-10 group">
            {/* Timeline Marker */}
            <div className="absolute left-1 md:left-2 top-1.5 w-4 h-4 rounded-full border-2 border-indigo-600 bg-white group-hover:bg-indigo-600 transition-colors"></div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 mb-2">
                <h3 className="text-xl font-bold text-slate-800">
                  {item?.role || "Role"}
                </h3>
                {item?.period && (
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100 w-fit">
                    {item.period}
                  </span>
                )}
              </div>

              <p className="text-indigo-600 font-semibold text-sm mb-3">
                {item?.organization || ""}{" "}
                {item?.location && (
                  <>
                    &bull; <span className="text-slate-500">{item.location}</span>
                  </>
                )}
              </p>

              {Array.isArray(item?.highlights) && item.highlights.length > 0 && (
                <ul className="space-y-1.5 text-slate-600 text-sm list-disc list-inside">
                  {item.highlights.map((point, pIdx) => (
                    <li key={pIdx} className="leading-relaxed">
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}