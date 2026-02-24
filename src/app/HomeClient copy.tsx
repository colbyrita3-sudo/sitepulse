"use client";

import { useMemo, useState } from "react";
import Card from "@/components/Card";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Why", href: "#why" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];
const areasLinks = [
  { label: "Orlando Web Design", href: "/orlando-web-design" },
  { label: "Apopka Web Design", href: "/apopka-web-design" },
  { label: "Florida Web Design", href: "/florida-web-design" },
  { label: "SEO Orlando", href: "/seo-orlando" },
];

/** Simple inline icons (no installs needed) */
function Icon({
  name,
}: {
  name:
    | "search"
    | "users"
    | "sparkle"
    | "mail"
    | "crown"
    | "dollar"
    | "paint"
    | "rocket"
    | "calendar";
}) {
  const common = "h-6 w-6";
  switch (name) {
    case "search":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z" stroke="currentColor" strokeWidth="2" />
          <path d="M16.3 16.3 21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "users":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M16 11a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z" stroke="currentColor" strokeWidth="2" />
          <path d="M4 21a8 8 0 0 1 16 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "sparkle":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 2l1.6 5.2L19 9l-5.4 1.8L12 16l-1.6-5.2L5 9l5.4-1.8L12 2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M19.5 14l.9 2.7L23 18l-2.6 1.3-.9 2.7-.9-2.7L16 18l2.6-1.3.9-2.7Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "mail":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4 7h16v10H4V7Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <path d="m4 8 8 6 8-6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        </svg>
      );
    case "crown":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M5 18h14l1-10-4 3-4-6-4 6-4-3 1 10Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path d="M5 18v2h14v-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "dollar":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 2v20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path
            d="M17 7.5c0-2-2.2-3.5-5-3.5s-5 1.5-5 3.5S9.2 11 12 11s5 1.5 5 3.5S14.8 18 12 18s-5-1.5-5-3.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "paint":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 22c4.4 0 8-3.6 8-8 0-6-6-12-12-12S2 6 2 12c0 4.4 3.6 8 8 8Z" stroke="currentColor" strokeWidth="2" />
          <path d="M16.5 11.5h.01" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          <path d="M13.5 8.5h.01" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          <path d="M9.5 8.5h.01" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        </svg>
      );
    case "rocket":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M14 10 9 15l-5 1 1-5 5-5c4-4 10-3 14-1-2 4-3 10-5 14l-5-5Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path d="M15 9l5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "calendar":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M7 3v3M17 3v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M4 8h16v13H4V8Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <path d="M8 12h4M8 16h7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
  }
}

function GlowSection({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <section id={id} className="relative mx-auto max-w-6xl px-4 py-12">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-64 w-[680px] -translate-x-1/2 rounded-full bg-[color:var(--accent)]/10 blur-3xl" />
        <div className="absolute left-8 top-24 h-40 w-40 rounded-full bg-[color:var(--accent)]/8 blur-2xl" />
        <div className="absolute right-10 top-40 h-44 w-44 rounded-full bg-[color:var(--accent)]/6 blur-2xl" />
      </div>
      {children}
    </section>
  );
}

export default function HomeClient() {
  const [menuOpen, setMenuOpen] = useState(false);

  const whyCards = useMemo(
    () => [
      { icon: <Icon name="search" />, title: "Google Visibility", text: "When people search for your service, you want to show up. A website gives you a real chance to rank and get picked." },
      { icon: <Icon name="users" />, title: "More Customers", text: "Your site works 24/7—building trust, answering questions, and turning visitors into leads while you’re busy." },
      { icon: <Icon name="sparkle" />, title: "Professional First Impression", text: "Most people decide fast. A clean, modern website makes you look legit, trustworthy, and worth contacting." },
      { icon: <Icon name="mail" />, title: "Easy Contact & Inquiries", text: "Stop losing leads in DMs. Forms and buttons capture every inquiry so you can follow up and close more deals." },
      { icon: <Icon name="crown" />, title: "Elevate Your Brand", text: "Your own domain, your own look, your own space. A premium site separates you from average competitors." },
      { icon: <Icon name="dollar" />, title: "A Real Investment", text: "A good website can pay for itself quickly. It’s a long-term asset that keeps bringing customers back." },
    ],
    []
  );

  const services = useMemo(
    () => [
      { icon: <Icon name="paint" />, title: "Premium Design", desc: "A modern look built for your niche—so customers trust you instantly and you stand out." },
      { icon: <Icon name="rocket" />, title: "Speed + SEO Setup", desc: "Fast load times, clean structure, and SEO foundations to help you rank and convert." },
      { icon: <Icon name="calendar" />, title: "Lead & Booking Setup", desc: "Buttons + forms set up the right way, so people can contact you in seconds without friction." },
    ],
    []
  );

  const pricing = [
    {
      name: "Starter",
      price: "$249",
      monthly: "$49/mo",
      note: "Best for simple local sites",
      features: ["1-page site", "Mobile-friendly", "Contact form", "Basic SEO setup", "Fast launch"],
      monthlyIncludes: "Hosting, security updates, backups, uptime monitoring, and small content edits.",
    },
    {
      name: "Growth",
      price: "$499",
      monthly: "$99/mo",
      note: "Best value for most businesses",
      features: ["Up to 4 pages", "Mobile-friendly", "Lead form + CTA buttons", "SEO foundations", "Speed optimized"],
      highlight: true,
      monthlyIncludes:
        "Everything in Starter + ongoing SEO updates (titles/meta, headings, keyword adjustments) + monthly performance check + priority support.",
    },
    {
      name: "Pro",
      price: "$999",
      monthly: "$99/mo",
      note: "For premium branding + scale",
      features: ["Up to 7 pages", "Advanced design", "Conversion-focused layout", "On-page SEO", "Priority updates"],
      monthlyIncludes:
        "Everything in Growth + ongoing SEO updates + 2 small updates per month (text/images/sections) + quarterly conversion improvements + Google Business Profile optimization (profile cleanup + service/categories + keyword help).",
    },
  ];

  const faqs = [
    {
      q: "What does the monthly payment include?",
      a: "Starter ($49/mo) covers hosting, security updates, backups, uptime monitoring, and small content edits. Growth + Pro ($99/mo) includes everything in Starter PLUS ongoing SEO updates (titles/meta/headings/keyword adjustments), a regular performance check, and faster support. Pro also includes 2 small updates per month and quarterly conversion improvements.",
    },
    { q: "How fast can you build my website?", a: "Most sites are done within 7–10 days depending on how fast you send your business info, photos, and any special requests." },
    { q: "Do I need a domain and hosting first?", a: "No. I can build it first and then help you connect your domain when you’re ready. If you already have one, that’s great too." },
    { q: "Can you update the site later?", a: "Yes. Starter includes small edits. Growth/Pro include ongoing SEO updates and faster support. Bigger changes (new pages/features) can be quoted based on scope." },
    { q: "Can I cancel the monthly plan?", a: "Yes. You can cancel anytime. If you cancel, hosting/maintenance stops and you’d need your own hosting plan moving forward." },
    { q: "What do you need from me to start?", a: "Business name, what services you offer, your service area, any photos you have, and how you want customers to contact you. That’s it." },
  ];

  function handleNavClick(href: string) {
  setMenuOpen(false);

  // If it's an on-page section, smooth scroll
  if (href.startsWith("#")) {
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 0);
    return;
  }

  // Otherwise, go to the page
  window.location.href = href;
}

  return (
    <main id="home" className="min-h-screen">
      <div className="h-10" />

      {/* NAV */}
      <div className="sticky top-4 z-50 mx-auto w-full max-w-6xl px-4">
        <div className="rounded-full border border-white/10 bg-black/30 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.55)]">
          <div className="flex items-center justify-between px-5 py-3">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] font-semibold">
                SP
              </div>
              <div className="hidden sm:block text-sm font-semibold text-white/80">SitePulse</div>
            </div>

           <nav className="hidden md:flex items-center gap-7 text-sm text-white/70">
  {navLinks.map((l) => (
    <a key={l.href} href={l.href} className="hover:text-white transition">
      {l.label}
    </a>
  ))}

    {/* Areas dropdown (fixed hover gap) */}
  <div className="relative group">
    <button
      type="button"
      className="inline-flex items-center gap-2 hover:text-white transition"
      aria-label="Open Areas menu"
    >
      Areas
      <span className="text-white/50 group-hover:text-white/80 transition">▾</span>
    </button>

    {/* The pt-2 creates a "hover bridge" so the menu doesn't disappear */}
    <div
      className="absolute right-0 top-full pt-2 invisible opacity-0 pointer-events-none group-hover:visible group-hover:opacity-100 group-hover:pointer-events-auto transition"
    >
      <div className="w-60 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.55)] p-2">
        {areasLinks.map((a) => (
          <a
            key={a.href}
            href={a.href}
            className="block rounded-xl px-3 py-2 text-sm text-white/75 hover:text-white hover:bg-white/[0.06] transition"
          >
            {a.label}
          </a>
        ))}
      </div>
    </div>
  </div>
</nav>

            <div className="flex items-center gap-2">
              <a
                href="/form"
                className="hidden sm:inline-flex rounded-full bg-[color:var(--accent)] px-5 py-2 text-sm font-semibold text-black hover:brightness-110 transition"
              >
                Start Your Website
              </a>

              <button
                onClick={() => setMenuOpen((v) => !v)}
                className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/[0.03] text-white/80 hover:bg-white/[0.06] transition"
                aria-label="Open menu"
              >
                {menuOpen ? "✕" : "☰"}
              </button>
            </div>
          </div>
        </div>

        {menuOpen && (
          <div className="mt-3 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.55)] p-3 md:hidden">
            <div className="grid gap-2">
              {navLinks.map((l) => (
                <button
                  key={l.href}
                  onClick={() => handleNavClick(l.href)}
                  className="text-left rounded-xl px-4 py-3 text-sm font-semibold text-white/80 hover:bg-white/[0.06] transition"
                >
                  {l.label}
                </button>
              ))}
              <div className="mt-2 rounded-xl border border-white/10 bg-white/[0.03] p-2">
  <div className="px-2 pb-2 text-xs font-semibold text-white/50">Areas</div>
  {areasLinks.map((a) => (
    <button
      key={a.href}
      onClick={() => handleNavClick(a.href)}
      className="w-full text-left rounded-xl px-3 py-2 text-sm font-semibold text-white/80 hover:bg-white/[0.06] transition"
    >
      {a.label}
    </button>
  ))}
</div>
              <a
                href="/form"
                className="mt-1 rounded-xl bg-[color:var(--accent)] px-4 py-3 text-sm font-semibold text-black hover:brightness-110 transition text-center"
                onClick={() => setMenuOpen(false)}
              >
                Start Your Website
              </a>
            </div>
          </div>
        )}
      </div>

      {/* HERO */}
      <GlowSection id="home">
        <div className="text-center">
          <h1 className="mx-auto max-w-4xl text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
            A Website That Makes You Look <span className="text-[color:var(--accent)] glow">Premium</span>.
            <br />
            Built Fast. Built Right.
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm md:text-base text-white/60">
            I’m Colby. I build modern websites for service businesses—so you stand out, look legit, and get more leads.
          </p>

         <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
  <a
    href="/form"
    className="w-full sm:w-auto rounded-full bg-[color:var(--accent)] px-8 py-3 font-semibold text-black hover:brightness-110 transition"
  >
    Get Started
  </a>

  <a
    href="#why"
    className="w-full sm:w-auto rounded-full border border-white/15 bg-white/[0.03] px-8 py-3 font-semibold text-white/85 hover:bg-white/[0.06] transition"
  >
    Why It Matters
  </a>

 <a
  href="sms:4072528476?&body=Hey%20Colby%2C%20I%20saw%20SitePulse%20and%20I%20need%20a%20website%20for%20my%20business.%20Can%20you%20help%3F"
  className="w-full sm:w-auto rounded-full bg-[color:var(--accent)] px-8 py-3 font-semibold text-black hover:brightness-110 transition"
>
  Text Now
</a>
</div>
          {/* PROOF STRIP (trust + conversion) */}
          <div className="mx-auto mt-8 max-w-4xl">
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur">
                <div className="text-sm font-semibold text-white/85">Built to Convert</div>
                <div className="mt-1 text-xs text-white/55">
                  Clear CTAs, clean layout, and fast contact flow.
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur">
                <div className="text-sm font-semibold text-white/85">SEO-Ready Structure</div>
                <div className="mt-1 text-xs text-white/55">
                  Titles, headings, service areas, and niche targeting.
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur">
                <div className="text-sm font-semibold text-white/85">Fast Turnaround</div>
                <div className="mt-1 text-xs text-white/55">
                  Launch-ready sites built quickly and professionally.
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-10 max-w-2xl">
            <div className="mx-auto h-10 w-px bg-[color:var(--accent)]/60" />
            <p className="mt-4 text-sm italic text-white/55">“You focus on running your business. I’ll handle the website and make it look top-tier.”</p>
            <p className="mt-4 text-4xl font-semibold text-[color:var(--accent)]">— Colby</p>
          </div>
        </div>
      </GlowSection>

      {/* ABOUT */}
      <GlowSection id="about">
        <Card className="p-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-center">
            About <span className="text-[color:var(--accent)] glow">SitePulse</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-white/60">
            I’m Colby. I build clean, modern websites for local service businesses. The goal is simple: make you look premium online and make it easy for customers to contact you.
          </p>
        </Card>
      </GlowSection>

      {/* WHY */}
      <GlowSection id="why">
        <div className="text-center">
          <h2 className="text-3xl md:text-6xl font-semibold tracking-tight">
            Why Business Owners <span className="text-[color:var(--accent)] glow">Win</span> With a Website
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-white/60">
            It’s not just “having a site.” It’s about getting found, earning trust, and turning visitors into paying customers.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {whyCards.map((c) => (
            <Card key={c.title} className="p-6">
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[color:var(--accent)] text-black">{c.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold">{c.title}</h3>
                  <p className="mt-2 text-sm text-white/60">{c.text}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </GlowSection>

      {/* SERVICES */}
      <GlowSection id="services">
        <div className="text-center">
          <h2 className="text-3xl md:text-6xl font-semibold tracking-tight">
            Everything You <span className="text-[color:var(--accent)] glow">Need</span>, All in{" "}
            <span className="text-[color:var(--accent)] glow">One</span> Place
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-white/60">
            From design → launch → updates, I handle the full website process so you can stay focused on your business.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {services.map((s) => (
            <Card key={s.title} className="p-6">
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[color:var(--accent)] text-black">{s.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-white/60">{s.desc}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </GlowSection>
      {/* SERVICE AREAS + NICHES (SEO BOOST) */}
      <GlowSection id="areas">
        <div className="text-center">
          <h2 className="text-3xl md:text-6xl font-semibold tracking-tight">
            Serving <span className="text-[color:var(--accent)] glow">Orlando</span> & All of{" "}
            <span className="text-[color:var(--accent)] glow">Central Florida</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-white/60">
            I build modern websites for local service businesses across Orlando, Apopka, Longwood, Winter Park,
            Lake Mary, Sanford, Oviedo, and surrounding areas.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <Card className="p-6">
            <h3 className="text-lg font-semibold">Service Areas</h3>
            <p className="mt-2 text-sm text-white/60">
              Orlando • Apopka • Longwood • Altamonte Springs • Winter Park • Maitland • Lake Mary • Sanford • Oviedo •
              Casselberry • Winter Springs • Ocoee • Clermont • Winter Garden • Kissimmee
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
  <a
    href="/orlando-web-design"
    className="rounded-full border border-white/12 bg-white/[0.03] px-3 py-1 text-xs font-semibold text-white/75 hover:bg-white/[0.06] hover:text-white transition"
  >
    Orlando Web Design →
  </a>
  <a
    href="/apopka-web-design"
    className="rounded-full border border-white/12 bg-white/[0.03] px-3 py-1 text-xs font-semibold text-white/75 hover:bg-white/[0.06] hover:text-white transition"
  >
    Apopka Web Design →
  </a>
  <a
    href="/florida-web-design"
    className="rounded-full border border-white/12 bg-white/[0.03] px-3 py-1 text-xs font-semibold text-white/75 hover:bg-white/[0.06] hover:text-white transition"
  >
    Florida Web Design →
  </a>
  <a
    href="/seo-orlando"
    className="rounded-full border border-white/12 bg-white/[0.03] px-3 py-1 text-xs font-semibold text-white/75 hover:bg-white/[0.06] hover:text-white transition"
  >
    SEO Orlando →
  </a>
</div>
            <div className="mt-5">
              <a
                href="/form"
                className="inline-flex rounded-full bg-[color:var(--accent)] px-6 py-3 text-sm font-semibold text-black hover:brightness-110 transition"
              >
                Get a Quote →
              </a>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold">Niches I Build For</h3>
            <p className="mt-2 text-sm text-white/60">
              Mobile Detailing • Pressure Washing • Junk Removal • Roofing • Plumbing • HVAC • Landscaping • Electricians
              • Painters • Flooring • Party Rentals • Locksmiths • Cleaning Services • Moving Companies • Auto Shops
            </p>
            <p className="mt-4 text-sm text-white/60">
              If your customers search for you on Google, you need a site that looks premium and converts.
            </p>
          </Card>
        </div>

        {/* Internal links (future ranking pages) */}
        <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <h3 className="text-base font-semibold text-white/85">Looking for a specific area?</h3>
          <p className="mt-2 text-sm text-white/60">
            We’ll be adding dedicated pages like <span className="text-white/80">Orlando Web Design</span>,{" "}
            <span className="text-white/80">Apopka Web Design</span>, and{" "}
            <span className="text-white/80">Florida Web Design</span> to help you rank faster.
          </p>
        </div>
      </GlowSection>
            {/* PORTFOLIO / RECENT WORK */}
      <GlowSection id="work">
        <div className="text-center">
          <h2 className="text-3xl md:text-6xl font-semibold tracking-tight">
            Recent <span className="text-[color:var(--accent)] glow">Work</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-white/60">
            A quick look at the style of premium, conversion-focused websites I build for local service businesses.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {/* Featured build (premium frame + click-to-open) */}
          <Card className="overflow-hidden p-0">
            {/* "Browser frame" header */}
            <div className="flex items-center justify-between gap-3 border-b border-white/10 bg-white/[0.03] px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              </div>
              <div className="hidden sm:block w-full max-w-[360px] rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/55">
                sitepulsebycolby.com / preview
              </div>
              <div className="text-xs font-semibold text-white/50">Portfolio</div>
            </div>

            {/* Image area (click opens image in new tab) */}
            <a
              href="/portfolio/allstars-demo.png"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden"
              aria-label="Open portfolio preview image"
              title="Open image"
            >
              {/* Glow behind image */}
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-6 h-40 w-[520px] -translate-x-1/2 rounded-full bg-[color:var(--accent)]/12 blur-3xl" />
              </div>

              <img
                src="/portfolio/allstars-demo.png"
                alt="Portfolio preview — mobile detailing homepage"
                className="h-[260px] w-full object-cover transition duration-500 group-hover:scale-[1.03] sm:h-[340px]"
              />

              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

              {/* Small “click to open” hint */}
              <div className="absolute right-4 top-4 rounded-full border border-white/12 bg-black/45 px-3 py-1 text-xs font-semibold text-white/80 backdrop-blur">
                Click to open
              </div>

              {/* Badge + text */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex flex-wrap items-center gap-2">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/45 px-3 py-1 text-xs font-semibold text-white/85 backdrop-blur">
                    Demo Build • Mobile Detailing
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/35 px-3 py-1 text-xs font-semibold text-white/70 backdrop-blur">
                    Conversion-first layout
                  </div>
                </div>

                <h3 className="mt-3 text-xl font-semibold">Premium “Get a Quote” lead layout</h3>
                <p className="mt-2 text-sm text-white/70">
                  Hero + trust elements + clear CTAs, designed to drive texts/calls and quote requests.
                </p>
              </div>
            </a>

            {/* Tags + note + next slot */}
            <div className="p-6">
              <div className="flex flex-wrap gap-2">
                {[
                  "Mobile-first layout",
                  "Sticky CTA buttons",
                  "Clear package sections",
                  "Fast load structure",
                  "Conversion-focused design",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-semibold text-white/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-white/60">
                <span className="font-semibold text-white/80">Note:</span> Portfolio examples are shown for design style
                and layout quality. Your website is built and branded for{" "}
                <span className="text-white/80">your</span> business.
              </div>

              {/* Next demo slot (public-friendly) */}
              <div className="mt-6 rounded-3xl border border-white/10 bg-black/25 p-5">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="text-sm font-semibold text-white/85">Next Demo Slot</div>
                    <div className="mt-1 text-xs text-white/55">New project preview coming soon.</div>
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-semibold text-white/60">
                    Coming soon
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {["Home Services", "Contractors", "Local SEO"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-semibold text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>
          <div className="grid gap-5">
            <Card className="p-6">
              <h3 className="text-lg font-semibold">Built for local service businesses</h3>
              <p className="mt-2 text-sm text-white/60">
                The best websites are simple: clear services, strong trust, and a fast way to contact you.
              </p>
              <ul className="mt-4 grid gap-2 text-sm text-white/70">
                <li className="flex gap-2">
                  <span className="text-[color:var(--accent)]">✓</span> Clear calls-to-action (Book / Text / Quote)
                </li>
                <li className="flex gap-2">
                  <span className="text-[color:var(--accent)]">✓</span> Clean section flow (Why / Services / Pricing / FAQ)
                </li>
                <li className="flex gap-2">
                  <span className="text-[color:var(--accent)]">✓</span> Designed to look premium on mobile
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold">SEO-ready structure</h3>
              <p className="mt-2 text-sm text-white/60">
                Google needs clear location + service context. That’s why your site includes service-area and niche
                targeting built in.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["Orlando", "Apopka", "Central Florida", "Home Services", "Contractors", "Local SEO"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-semibold text-white/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6">
                <a
                  href="/form"
                  className="inline-flex rounded-full bg-[color:var(--accent)] px-6 py-3 text-sm font-semibold text-black hover:brightness-110 transition"
                >
                  Start Your Website →
                </a>
              </div>
            </Card>
          </div>
        </div>
      </GlowSection>
      {/* PRICING */}
      <GlowSection id="pricing">
        <div className="text-center">
          <h2 className="text-3xl md:text-6xl font-semibold tracking-tight">
            Simple <span className="text-[color:var(--accent)] glow">Pricing</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-white/60">
            One-time build + a low monthly to keep everything hosted, secure, and maintained.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {pricing.map((p) => (
            <Card key={p.name} className={["p-6", p.highlight ? "border-white/25 bg-white/[0.06]" : ""].join(" ")}>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{p.name}</h3>
                {p.highlight && (
                  <span className="rounded-full bg-[color:var(--accent)] px-3 py-1 text-xs font-semibold text-black">Best Value</span>
                )}
              </div>

              <div className="mt-4">
                <div className="text-4xl font-semibold">
                  <span className={p.highlight ? "text-[color:var(--accent)] glow" : ""}>{p.price}</span>
                  <span className="text-white/50 text-base font-semibold"> + {p.monthly}</span>
                </div>
                <div className="mt-2 text-sm text-white/60">{p.note}</div>
              </div>

              <ul className="mt-5 grid gap-2 text-sm text-white/70">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-[2px] text-[color:var(--accent)]">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 rounded-xl border border-white/12 bg-white/[0.03] p-3 text-xs text-white/65">
                <span className="text-white/80 font-semibold">Monthly includes: </span>
                {p.monthlyIncludes}
              </div>

             <a
  href={`/form?plan=${encodeURIComponent(p.name)}`}
  className={[
    "mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold transition",
    p.highlight
      ? "bg-[color:var(--accent)] text-black hover:brightness-110"
      : "border border-white/15 bg-white/[0.03] text-white/85 hover:bg-white/[0.06]",
  ].join(" ")}
>
  Choose {p.name}
</a>
            </Card>
          ))}
        </div>
      </GlowSection>

      {/* FAQ */}
      <GlowSection id="faq">
        <div className="text-center">
          <h2 className="text-3xl md:text-6xl font-semibold tracking-tight">
            Quick <span className="text-[color:var(--accent)] glow">Questions</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-white/60">Here are the most common things people ask before getting started.</p>
        </div>

        <div className="mt-10 mx-auto max-w-3xl grid gap-4">
          {faqs.map((item) => (
            <details key={item.q} className="group rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-5 transition hover:border-white/20">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left">
                <span className="font-semibold text-white/85">{item.q}</span>
                <span className="text-[color:var(--accent)] transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm text-white/60">{item.a}</p>
            </details>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a href="/form" className="rounded-full bg-[color:var(--accent)] px-8 py-3 font-semibold text-black hover:brightness-110 transition">
            Start My Website →
          </a>
        </div>
      </GlowSection>

      {/* CONTACT */}
      <GlowSection id="contact">
        <Card className="p-8 text-center">
          <h2 className="text-3xl font-semibold">
            Ready to get your site <span className="text-[color:var(--accent)] glow">done</span>?
          </h2>
          <p className="mt-3 text-white/60">Fill out the quick form and I’ll reach out with next steps.</p>
          <div className="mt-6 flex justify-center">
            <a className="rounded-full bg-[color:var(--accent)] px-8 py-3 font-semibold text-black hover:brightness-110 transition" href="/form">
              Start Now
            </a>
          </div>
        </Card>

        <footer className="mt-10 border-t border-white/10 bg-black/20">
          <div className="mx-auto max-w-6xl px-4 py-10">
            <div className="grid gap-8 md:grid-cols-3">
              {/* Brand */}
              <div>
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] font-semibold">
                    SP
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white/85">SitePulse</div>
                    <div className="text-xs text-white/55">Web Design + SEO by Colby</div>
                  </div>
                </div>

                <p className="mt-4 text-sm text-white/60">
                  Premium-looking websites built to convert visitors into calls, texts, and leads.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <a
                    href="sms:4072528476"
                    className="rounded-full border border-white/12 bg-white/[0.03] px-3 py-2 text-xs font-semibold text-white/75 hover:bg-white/[0.06] hover:text-white transition"
                  >
                    Text: 407-252-8476
                  </a>
                  <a
                    href="/form"
                    className="rounded-full bg-[color:var(--accent)] px-3 py-2 text-xs font-semibold text-black hover:brightness-110 transition"
                  >
                    Start Now →
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <div className="text-sm font-semibold text-white/85">Quick Links</div>
                <div className="mt-3 grid gap-2 text-sm">
                  <a className="text-white/65 hover:text-white transition" href="/orlando-web-design">
                    Orlando Web Design
                  </a>
                  <a className="text-white/65 hover:text-white transition" href="/apopka-web-design">
                    Apopka Web Design
                  </a>
                  <a className="text-white/65 hover:text-white transition" href="/seo-orlando">
                    SEO Orlando
                  </a>
                  <a className="text-white/65 hover:text-white transition" href="/florida-web-design">
                    Florida Web Design
                  </a>
                </div>
              </div>

              {/* Service Area */}
              <div>
                <div className="text-sm font-semibold text-white/85">Service Area</div>
                <p className="mt-3 text-sm text-white/60">
                  Orlando • Apopka • Longwood • Winter Park • Maitland • Lake Mary • Sanford • Oviedo • Central Florida
                </p>

                <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-white/60">
                  Want a website that looks premium and gets leads? Fill out the form and I’ll reach out.
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/45 md:flex-row md:items-center md:justify-between">
              <div>© {new Date().getFullYear()} SitePulse. All rights reserved.</div>
              <div className="flex flex-wrap gap-3">
                <a href="/#pricing" className="hover:text-white transition">Pricing</a>
                <a href="/#faq" className="hover:text-white transition">FAQ</a>
                <a href="/form" className="hover:text-white transition">Start</a>
              </div>
            </div>
          </div>
        </footer>
      </GlowSection>
            {/* MOBILE STICKY CTA BAR */}
      <div className="fixed inset-x-0 bottom-3 z-[60] px-4 md:hidden">
        <div className="mx-auto max-w-6xl rounded-2xl border border-white/10 bg-black/50 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.55)] p-2">
          <div className="grid grid-cols-2 gap-2">
            <a
              href="sms:4072528476?&body=Hey%20Colby%2C%20I%20saw%20SitePulse%20and%20I%20need%20a%20website%20for%20my%20business.%20Can%20you%20help%3F"
              className="inline-flex items-center justify-center rounded-xl border border-white/12 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-white/85 hover:bg-white/[0.06] transition"
            >
              Text Now
            </a>

            <a
              href="/form"
              className="inline-flex items-center justify-center rounded-xl bg-[color:var(--accent)] px-4 py-3 text-sm font-semibold text-black hover:brightness-110 transition"
            >
              Start Now
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}