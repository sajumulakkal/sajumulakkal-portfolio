import { useState } from 'react';

export default function Certifications({ certifications }) {
  const [activeTab, setActiveTab] = useState('all');

  // Guard checks and safe fallbacks
  const certs = certifications || {};
  const badgeProfiles = certs.externalBadgeProfiles || {};
  
  const professionalCerts = certs.professionalCertificates || [];
  const specializations = certs.specializations || [];
  const institutional = certs.institutionalAndItil || [];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
            Certifications & Verified Badges
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            Verified credentials across AI, GCP, AWS, Data Science, Cybersecurity, and ITIL.
          </p>
        </div>

        {/* Public Badge Links */}
        <div className="flex flex-wrap gap-2">
          {badgeProfiles.credly && (
            <a
              href={badgeProfiles.credly}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-amber-50 text-amber-700 border border-amber-200 hover:bg-amber-100 text-xs font-semibold transition-colors"
            >
              Credly Badges
            </a>
          )}
          {badgeProfiles.googleQwiklabs && (
            <a
              href={badgeProfiles.googleQwiklabs}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 text-xs font-semibold transition-colors"
            >
              Google Cloud Profile
            </a>
          )}
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-slate-200 overflow-x-auto pb-2">
        {[
          { id: 'all', label: 'All Credentials' },
          { id: 'professional', label: `Professional (${professionalCerts.length})` },
          { id: 'specializations', label: `Specializations (${specializations.length})` },
          { id: 'itil', label: `ITIL & Institutional (${institutional.length})` },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-sm font-medium rounded-lg whitespace-nowrap transition-all ${
              activeTab === tab.id
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {(activeTab === 'all' || activeTab === 'professional') &&
          professionalCerts.map((cert, idx) => (
            <a
              key={`prof-${idx}`}
              href={cert?.url || "#"}
              target="_blank"
              rel="noreferrer"
              className="group p-5 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-300 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="inline-block px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase rounded bg-indigo-50 text-indigo-700 border border-indigo-100 mb-2">
                  Professional
                </span>
                <h4 className="font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors text-sm">
                  {cert?.title || "Certificate"}
                </h4>
              </div>
              <div className="mt-4 pt-2 border-t border-slate-100 flex justify-between items-center text-xs text-slate-500">
                <span>Verify Credential</span>
                <span className="font-medium text-indigo-600">&rarr;</span>
              </div>
            </a>
          ))}

        {(activeTab === 'all' || activeTab === 'specializations') &&
          specializations.map((spec, idx) => (
            <a
              key={`spec-${idx}`}
              href={spec?.url || "#"}
              target="_blank"
              rel="noreferrer"
              className="group p-5 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="inline-block px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase rounded bg-emerald-50 text-emerald-700 border border-emerald-100 mb-2">
                  Specialization
                </span>
                <h4 className="font-semibold text-slate-800 group-hover:text-emerald-700 transition-colors text-sm">
                  {spec?.title || "Specialization"}
                </h4>
              </div>
              <div className="mt-4 pt-2 border-t border-slate-100 flex justify-between items-center text-xs text-slate-500">
                <span>Verify Credential</span>
                <span className="font-medium text-emerald-600">&rarr;</span>
              </div>
            </a>
          ))}

        {(activeTab === 'all' || activeTab === 'itil') &&
          institutional.map((item, idx) => (
            <a
              key={`inst-${idx}`}
              href={item?.url || "#"}
              target="_blank"
              rel="noreferrer"
              className="group p-5 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-purple-300 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="inline-block px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase rounded bg-purple-50 text-purple-700 border border-purple-100 mb-2">
                  Institutional / ITIL
                </span>
                <h4 className="font-semibold text-slate-800 group-hover:text-purple-700 transition-colors text-sm">
                  {item?.title || "Credential"}
                </h4>
              </div>
              <div className="mt-4 pt-2 border-t border-slate-100 flex justify-between items-center text-xs text-slate-500">
                <span>Verify Credential</span>
                <span className="font-medium text-purple-600">&rarr;</span>
              </div>
            </a>
          ))}
      </div>
    </div>
  );
}