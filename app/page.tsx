export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Nav */}
      <nav className="bg-green-900 text-white px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-black text-sm">
            DLS
          </div>
          <div>
            <div className="font-bold text-sm leading-tight">DLS Lawn Services</div>
            <div className="text-green-300 text-xs">Fresno, CA</div>
          </div>
        </div>
        <a
          href="tel:5592602945"
          className="bg-green-500 hover:bg-green-400 text-white font-bold px-4 py-2 rounded-lg text-sm transition-colors"
        >
          (559) 260-2945
        </a>
      </nav>

      {/* Hero */}
      <section className="bg-green-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-green-500 text-white text-sm font-bold px-4 py-1 rounded-full mb-6">
            FRESNO&apos;S MOST RELIABLE LAWN CARE — 5 STARS
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Fresno Lawn Care{" "}
            <span className="text-green-300">You Can Count On.</span>
          </h1>
          <p className="text-lg md:text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Silvino and Miguel at DLS Lawn Services deliver beautiful, consistently maintained yards
            at prices Fresno families can afford. Reliable, friendly, and always on time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:5592602945"
              className="bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors"
            >
              Call (559) 260-2945
            </a>
            <a
              href="#services"
              className="border-2 border-green-300 text-green-300 hover:bg-green-300 hover:text-green-900 font-bold px-8 py-4 rounded-xl text-lg transition-colors"
            >
              Our Services
            </a>
          </div>
        </div>
      </section>

      {/* Hours Banner */}
      <section className="bg-green-600 text-white py-4 px-6">
        <div className="max-w-4xl mx-auto flex flex-wrap gap-6 justify-center items-center text-sm font-medium">
          <div>Mon to Fri: 6:00am to 9:00pm</div>
          <div className="hidden sm:block w-px h-4 bg-green-400" />
          <div>Saturday: 6:00am to 8:30pm</div>
          <div className="hidden sm:block w-px h-4 bg-green-400" />
          <div>Sunday: 6:00am to 9:00pm</div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-6 bg-green-50">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <div className="text-4xl font-black text-green-700">5.0</div>
            <div className="text-slate-600 text-sm mt-1">Google Stars</div>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <div className="text-4xl font-black text-green-700">7</div>
            <div className="text-slate-600 text-sm mt-1">Days a Week</div>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <div className="text-4xl font-black text-green-700">100%</div>
            <div className="text-slate-600 text-sm mt-1">5-Star Reviews</div>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <div className="text-4xl font-black text-green-700">Fair</div>
            <div className="text-slate-600 text-sm mt-1">Affordable Prices</div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-3">
              Lawn Care Services in <span className="text-green-700">Fresno</span>
            </h2>
            <p className="text-slate-600 text-lg">
              From regular maintenance to full cleanups — we handle it all
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Weekly Lawn Maintenance",
                desc: "Regular weekly lawn care including mowing, trimming, and edging. Silvino and Miguel take pride in consistent, high-quality results every single visit.",
              },
              {
                title: "Lawn Cleanup",
                desc: "One-time or seasonal deep cleanups for overgrown yards. The team transforms neglected lawns to pristine condition quickly and at reasonable prices.",
              },
              {
                title: "Landscaping",
                desc: "General landscaping services to dramatically improve the appearance of front and back yards. Before-and-after results speak for themselves.",
              },
              {
                title: "Front and Back Yard Care",
                desc: "Complete service for both front and back yards in one visit. Attention to detail throughout the entire property — nothing gets missed.",
              },
              {
                title: "Grass Mowing",
                desc: "Precise, clean mowing that keeps your lawn looking sharp. Silvino shows up on time and leaves your grass looking like it should.",
              },
              {
                title: "Trimming and Edging",
                desc: "The finishing touches that make a yard look truly cared-for. Clean edges, neat trimming — the details that separate professional from amateur.",
              },
            ].map((s) => (
              <div key={s.title} className="p-6 bg-green-50 rounded-xl border-l-4 border-green-600">
                <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 px-6 bg-green-900 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black mb-2">What Fresno Families Say</h2>
            <div className="text-green-300">Every single review is 5 stars</div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-green-800 rounded-xl p-6">
              <div className="text-yellow-400 text-xl font-bold mb-3">5 Stars</div>
              <p className="text-green-100 leading-relaxed italic text-sm">
                &ldquo;Silvino is super friendly, professional, and very reliable — shows up on time,
                communicates well, and takes real pride in his work. Our yard has never looked better.&rdquo;
              </p>
              <div className="mt-4 text-green-400 text-xs">— Regular DLS customer, Fresno</div>
            </div>
            <div className="bg-green-800 rounded-xl p-6">
              <div className="text-yellow-400 text-xl font-bold mb-3">5 Stars</div>
              <p className="text-green-100 leading-relaxed italic text-sm">
                &ldquo;My husband is a recent amputee and our lawns had grown out of control. DLS cleaned
                both front and back at a very reasonable price. We signed up for weekly maintenance
                right after — they were that good.&rdquo;
              </p>
              <div className="mt-4 text-green-400 text-xs">— Fresno family, now a weekly client</div>
            </div>
            <div className="bg-green-800 rounded-xl p-6">
              <div className="text-yellow-400 text-xl font-bold mb-3">5 Stars</div>
              <p className="text-green-100 leading-relaxed italic text-sm">
                &ldquo;They did a really good job, were very professional, and I would definitely call
                them again. Simple as that. DLS Lawn Services delivers exactly what they promise.&rdquo;
              </p>
              <div className="mt-4 text-green-400 text-xs">— Fresno homeowner</div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-black mb-4">
                Meet <span className="text-green-700">Silvino and Miguel</span> — Fresno&apos;s Lawn Care Team
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                DLS Lawn Services is run by Silvino and his teammate Miguel — a two-person team that
                punches well above its weight. Silvino personally responds to every Google review,
                posts before-and-after photos of their work, and operates 7 days a week to serve Fresno families.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                The business is growing because customers keep coming back. Weekly maintenance clients
                are being added regularly — and Silvino&apos;s personal touch makes every yard feel like it&apos;s
                the only one on his schedule.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                No email needed — just call. Silvino picks up.
              </p>
              <a
                href="tel:5592602945"
                className="inline-block bg-green-700 hover:bg-green-800 text-white font-bold px-6 py-3 rounded-lg transition-colors"
              >
                Call (559) 260-2945
              </a>
            </div>
            <div className="bg-green-900 rounded-2xl p-8 text-white">
              <h3 className="font-bold text-lg mb-4 text-green-300">Service Area</h3>
              <div className="space-y-2 text-green-100 text-sm">
                <div>Fresno, CA</div>
                <div>1448 E Gettysburg Ave area</div>
                <div>Surrounding Fresno neighborhoods</div>
              </div>
              <div className="mt-6 pt-6 border-t border-green-700">
                <h3 className="font-bold text-lg mb-3 text-green-300">Hours</h3>
                <div className="space-y-1 text-green-100 text-sm">
                  <div>Mon to Fri: 6:00am to 9:00pm</div>
                  <div>Saturday: 6:00am to 8:30pm</div>
                  <div>Sunday: 6:00am to 9:00pm</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-600 py-16 px-6 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Ready for a Beautiful Yard?
          </h2>
          <p className="text-green-100 text-lg mb-8">
            Fresno&apos;s most reliable lawn care team is one call away. Silvino answers.
          </p>
          <a
            href="tel:5592602945"
            className="inline-block bg-white text-green-700 font-black text-xl px-10 py-5 rounded-xl hover:bg-green-50 transition-colors"
          >
            (559) 260-2945
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-green-400 py-8 px-6 text-center text-sm">
        <div className="max-w-4xl mx-auto">
          <div className="font-bold text-white text-lg mb-1">DLS Lawn Services</div>
          <div>1448 E Gettysburg Ave, Fresno, CA 93704</div>
          <div className="mt-2">
            <a href="tel:5592602945" className="text-green-300 hover:text-green-200">
              (559) 260-2945
            </a>
          </div>
          <div className="mt-4 text-xs text-green-700">
            &copy; 2026 DLS Lawn Services. Fresno, CA. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
