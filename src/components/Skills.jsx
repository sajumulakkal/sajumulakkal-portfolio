export default function Skills({ skills }) {
  // Fallback if skills object is undefined
  const safeSkills = skills || {};

  const skillCategories = [
    { title: "Relational SQL Databases", items: safeSkills.sqlDatabases || [] },
    { title: "NoSQL & Search Engines", items: safeSkills.noSqlDatabases || [] },
    { title: "Cloud Platforms", items: safeSkills.cloudPlatforms || [] },
    { title: "Scripting & Languages", items: safeSkills.scriptingAndLanguages || [] },
    { title: "Blockchain & Web3", items: safeSkills.blockchainAndWeb3 || [] },
    { title: "Web Platforms & Servers", items: safeSkills.webPlatforms || [] },
  ];

  return (
    <div className="space-y-6">
      <div className="border-b border-slate-200 pb-3">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
          Technical Competencies
        </h2>
        <p className="text-slate-500 text-sm mt-1">
          Core technical skills proficiency across platforms and paradigms.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {skillCategories.map((category, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4"
          >
            <h3 className="text-lg font-bold text-slate-800 border-b border-slate-100 pb-2">
              {category.title}
            </h3>
            <div className="space-y-3">
              {category.items.map((item, iIdx) => (
                <div key={iIdx} className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold text-slate-700">
                    <span>{item?.name || item}</span>
                    <span className="text-indigo-600">{item?.level || ''}</span>
                  </div>
                  {item?.level && (
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-indigo-600 h-full rounded-full transition-all duration-500"
                        style={{ width: item.level }}
                      ></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}