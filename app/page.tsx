"use client";

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 2.98 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21 16.92z"/>
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/>
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
    </svg>
  );
}

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  );
}

const services = [
  {
    title: "Weekly Lawn Maintenance",
    desc: "Consistent weekly service: mowing, trimming, edging. Silvino takes pride in results that look the same great every visit.",
  },
  {
    title: "Lawn Cleanup",
    desc: "Overgrown yard? DLS transforms it in one visit at a reasonable price. One-time or seasonal — your call.",
  },
  {
    title: "Landscaping",
    desc: "Improve the look of your front and back yard with general landscaping. Before-and-after results that speak for themselves.",
  },
  {
    title: "Front and Back Yard Care",
    desc: "Full property service in a single visit. Silvino and Miguel handle the whole yard so nothing gets neglected.",
  },
  {
    title: "Grass Mowing",
    desc: "Precise, clean cuts every time. Silvino shows up on schedule and leaves your lawn looking exactly like it should.",
  },
  {
    title: "Trimming and Edging",
    desc: "The details that turn a mowed lawn into a polished yard. Clean edges, tidy borders — the professional finish.",
  },
];

export default function Home() {
  return (
    <main style={{ background: "var(--bg)", color: "var(--text-primary)", minHeight: "100dvh" }}>

      {/* Nav */}
      <nav
        style={{ background: "var(--bg)", borderBottom: "1px solid var(--border-subtle)" }}
        className="sticky top-0 z-50 px-6 py-3.5 flex items-center justify-between"
      >
        <div className="flex items-center gap-2.5">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{ background: "var(--accent)", color: "white" }}
            aria-hidden="true"
          >
            <LeafIcon />
          </div>
          <div>
            <div className="font-bold text-sm leading-tight" style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>
              DLS Lawn Services
            </div>
            <div className="text-xs" style={{ color: "var(--text-muted)" }}>Fresno, CA</div>
          </div>
        </div>
        <a
          href="tel:5592602945"
          className="flex items-center gap-2 font-semibold px-4 py-2 rounded text-sm text-white active:scale-97"
          style={{
            background: "var(--accent)",
            transition: "background 160ms ease-out, transform 160ms ease-out",
          }}
          onMouseEnter={e => (e.currentTarget.style.background = "var(--accent-hover)")}
          onMouseLeave={e => (e.currentTarget.style.background = "var(--accent)")}
          aria-label="Call DLS Lawn Services at (559) 260-2945"
        >
          <PhoneIcon />
          (559) 260-2945
        </a>
      </nav>

      {/* Hero — left-aligned with warm story angle */}
      <section className="px-6 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="max-w-5xl mx-auto">
          <div
            className="animate-fade-in inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-8"
            style={{ background: "var(--accent-dim)", color: "var(--accent)" }}
          >
            <span className="flex" style={{ color: "var(--accent)" }}>
              {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
            </span>
            5-Star Fresno Lawn Care · 7 Days a Week
          </div>

          <h1
            className="animate-fade-up delay-1 text-5xl md:text-7xl font-bold leading-none mb-6"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}
          >
            Fresno lawn care<br />
            <span style={{ color: "var(--accent)" }}>you can count on.</span>
          </h1>

          <p
            className="animate-fade-up delay-2 text-lg leading-relaxed mb-10 max-w-xl"
            style={{ color: "var(--text-secondary)" }}
          >
            Silvino and Miguel at DLS Lawn Services show up on time, communicate well, and leave
            your yard looking exactly like it should. Every week. Every visit.
          </p>

          <div className="animate-fade-up delay-3 flex flex-wrap gap-3">
            <a
              href="tel:5592602945"
              className="flex items-center gap-2 font-semibold px-6 py-3.5 rounded text-base text-white active:scale-97"
              style={{
                background: "var(--accent)",
                transition: "background 160ms ease-out, transform 160ms ease-out",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "var(--accent-hover)")}
              onMouseLeave={e => (e.currentTarget.style.background = "var(--accent)")}
            >
              <PhoneIcon />
              Call (559) 260-2945
            </a>
            <a
              href="#services"
              className="font-medium px-6 py-3.5 rounded text-base active:scale-97"
              style={{
                border: "1px solid var(--border)",
                color: "var(--text-secondary)",
                transition: "border-color 160ms ease-out, color 160ms ease-out, transform 160ms ease-out",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "var(--accent)";
                e.currentTarget.style.color = "var(--accent)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.color = "var(--text-secondary)";
              }}
            >
              What we do
            </a>
          </div>
        </div>
      </section>

      {/* Hours strip */}
      <div style={{ background: "var(--bg-raised)", borderTop: "1px solid var(--border-subtle)", borderBottom: "1px solid var(--border-subtle)" }}>
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm items-center">
            <div className="flex items-center gap-1.5 font-semibold" style={{ color: "var(--accent)" }}>
              <SunIcon />
              Open every day
            </div>
            <span style={{ color: "var(--text-secondary)" }}>Mon – Fri: 6:00am – 9:00pm</span>
            <span style={{ color: "var(--text-secondary)" }}>Saturday: 6:00am – 8:30pm</span>
            <span style={{ color: "var(--text-secondary)" }}>Sunday: 6:00am – 9:00pm</span>
          </div>
        </div>
      </div>

      {/* Services */}
      <section id="services" className="px-6 py-20 md:py-28">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-[1fr_1fr] gap-4 mb-6">
            <h2
              className="text-3xl md:text-5xl font-bold leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Everything your yard needs.
            </h2>
            <p className="text-base leading-relaxed self-end" style={{ color: "var(--text-secondary)" }}>
              From weekly maintenance to one-time cleanups — Silvino and Miguel handle it all.
              Fresno residential, 7 days a week.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-12">
            {services.map((s, i) => (
              <div
                key={s.title}
                className={`rounded-xl p-5 animate-fade-up delay-${i + 1}`}
                style={{ background: "var(--bg-surface)", border: "1px solid var(--border-subtle)" }}
              >
                <h3 className="font-bold text-base mb-2" style={{ fontFamily: "var(--font-display)" }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story reviews — community angle */}
      <section
        style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--border-subtle)" }}
        className="px-6 py-20"
      >
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-bold mb-12"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Stories from Fresno.
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "Silvino is super friendly, professional, and very reliable — shows up on time, communicates well, and takes real pride in his work. Our yard has never looked better.",
                credit: "Regular weekly client, Fresno",
                stars: 5,
              },
              {
                quote: "My husband is a recent amputee and our lawns had grown out of control. DLS cleaned both front and back at a very reasonable price. We signed up for weekly service right after — they were that good.",
                credit: "Fresno family, now a weekly client",
                stars: 5,
                featured: true,
              },
              {
                quote: "They did a really good job, were very professional, and I would definitely call them again. DLS delivers exactly what they promise.",
                credit: "Fresno homeowner",
                stars: 5,
              },
            ].map((r, i) => (
              <div
                key={i}
                className={`rounded-xl p-6 ${r.featured ? "md:col-span-1 ring-2" : ""}`}
                style={{
                  background: r.featured ? "var(--accent)" : "var(--bg)",
                  border: r.featured ? "none" : "1px solid var(--border-subtle)",
                  ...(r.featured ? {} : {}),
                }}
              >
                <div className="flex mb-4" style={{ color: r.featured ? "rgba(255,255,255,0.8)" : "var(--accent)" }}>
                  {[...Array(r.stars)].map((_, j) => <StarIcon key={j} />)}
                </div>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{
                    color: r.featured ? "rgba(255,255,255,0.9)" : "var(--text-secondary)",
                    fontStyle: "italic",
                  }}
                >
                  &ldquo;{r.quote}&rdquo;
                </p>
                <div
                  className="text-xs"
                  style={{ color: r.featured ? "rgba(255,255,255,0.6)" : "var(--text-muted)" }}
                >
                  — {r.credit}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs" style={{ color: "var(--text-muted)" }}>
            Silvino personally responds to every Google review. Every single one.
          </p>
        </div>
      </section>

      {/* About Silvino */}
      <section className="px-6 py-20 md:py-28">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2
              className="text-3xl md:text-5xl font-bold leading-tight mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Silvino &amp; Miguel.<br />
              <span style={{ color: "var(--accent)" }}>Your Fresno<br />lawn team.</span>
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
              DLS Lawn Services runs on something most businesses have lost: Silvino cares. He responds
              to every review. He posts before-and-after photos. He shows up at 6am and keeps going
              to 9pm because his customers deserve consistency.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
              Working alongside Miguel, DLS is growing because clients come back and bring their
              neighbors. New weekly maintenance customers added regularly — that&apos;s earned, not advertised.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>
              No email needed. Just call. Silvino picks up.
            </p>
            <a
              href="tel:5592602945"
              className="inline-flex items-center gap-2 font-semibold px-6 py-3.5 rounded text-base text-white active:scale-97"
              style={{
                background: "var(--accent)",
                transition: "background 160ms ease-out, transform 160ms ease-out",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "var(--accent-hover)")}
              onMouseLeave={e => (e.currentTarget.style.background = "var(--accent)")}
            >
              <PhoneIcon />
              Call Silvino — (559) 260-2945
            </a>
          </div>

          <div
            className="rounded-2xl p-8 h-fit"
            style={{ background: "var(--bg-surface)", border: "1px solid var(--border-subtle)" }}
          >
            <h3 className="font-bold text-lg mb-6" style={{ fontFamily: "var(--font-display)" }}>At a glance</h3>
            <div className="space-y-4 text-sm">
              {[
                { label: "Team", value: "Silvino + Miguel" },
                { label: "Rating", value: "5.0 — all Google reviews" },
                { label: "Location", value: "1448 E Gettysburg Ave, Fresno 93704" },
                { label: "Mon–Fri", value: "6:00am – 9:00pm" },
                { label: "Saturday", value: "6:00am – 8:30pm" },
                { label: "Sunday", value: "6:00am – 9:00pm" },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between gap-4">
                  <span style={{ color: "var(--text-muted)" }}>{label}</span>
                  <span className="font-medium text-right">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--accent)" }} className="px-6 py-16">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-display)" }}>
              Ready for a beautiful yard?
            </h2>
            <p className="text-white/80 text-lg">One call. Silvino answers. Work done right.</p>
          </div>
          <a
            href="tel:5592602945"
            className="shrink-0 inline-flex items-center gap-2 font-bold text-lg px-8 py-4 rounded-lg active:scale-97"
            style={{
              background: "white",
              color: "var(--accent)",
              transition: "opacity 160ms ease-out, transform 160ms ease-out",
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.9")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >
            <PhoneIcon />
            (559) 260-2945
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--border-subtle)", color: "var(--text-muted)" }}
        className="px-6 py-10"
      >
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between gap-6 text-sm">
          <div>
            <div className="font-bold mb-1" style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)" }}>DLS Lawn Services</div>
            <div>1448 E Gettysburg Ave, Fresno, CA 93704</div>
            <a href="tel:5592602945" className="mt-1 block" style={{ color: "var(--accent)" }}>(559) 260-2945</a>
          </div>
          <div className="text-xs self-end">&copy; 2026 DLS Lawn Services. Fresno, CA.</div>
        </div>
      </footer>
    </main>
  );
}
