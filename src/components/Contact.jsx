export default function Contact({ contact, socials }) {
  // Safe object fallbacks to prevent runtime crashes
  const info = contact || {};
  const links = socials || {};

  return (
    <div className="space-y-6">
      <div className="border-b border-slate-200 pb-3">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">Get in Touch</h2>
        <p className="text-slate-500 text-sm mt-1">
          Feel free to reach out for consultations or technical queries.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Direct Contact Cards */}
        <div className="space-y-4">
          {info.address && (
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
              <div className="p-3 bg-indigo-50 text-indigo-600 rounded-lg font-bold text-xl">📍</div>
              <div>
                <h4 className="font-bold text-slate-800 text-sm">Location</h4>
                <p className="text-slate-600 text-sm">{info.address}</p>
              </div>
            </div>
          )}

          {info.email && (
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
              <div className="p-3 bg-indigo-50 text-indigo-600 rounded-lg font-bold text-xl">✉️</div>
              <div>
                <h4 className="font-bold text-slate-800 text-sm">Email</h4>
                <a href={`mailto:${info.email}`} className="text-indigo-600 text-sm hover:underline">
                  {info.email}
                </a>
              </div>
            </div>
          )}

          {(links.whatsapp || info.phone) && (
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
              <div className="p-3 bg-emerald-50 text-emerald-600 rounded-lg font-bold text-xl">💬</div>
              <div>
                <h4 className="font-bold text-slate-800 text-sm">WhatsApp</h4>
                <a
                  href={links.whatsapp || `https://wa.me/${info.phone?.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-emerald-600 text-sm font-semibold hover:underline"
                >
                  Message via WhatsApp {info.phone ? `(${info.phone})` : ''}
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Contact Form */}
        <form
          action="https://formspree.io/f/xbjnqvyq"
          method="POST"
          className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4"
        >
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-indigo-600"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Your Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-indigo-600"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Message</label>
            <textarea
              name="message"
              rows="4"
              required
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-indigo-600"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 rounded-lg transition-colors text-sm"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}