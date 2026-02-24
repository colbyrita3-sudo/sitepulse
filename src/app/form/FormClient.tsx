"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Card from "@/components/Card";

const PLAN_OPTIONS = [
  { value: "Free Audit", label: "Free Audit (Website + SEO Quick Plan)" },
  { value: "Starter", label: "Starter ($249 + $49/mo)" },
  { value: "Growth", label: "Growth ($499 + $99/mo)" },
  { value: "Pro", label: "Pro ($999 + $99/mo)" },
] as const;

type PlanValue = (typeof PLAN_OPTIONS)[number]["value"];

export default function FormClient() {
  const searchParams = useSearchParams();

  // ✅ IMPORTANT: paste your REAL Formspree form endpoint here
  // It looks like: https://formspree.io/f/xxxxxxx
  const FORMSPREE_ACTION = "https://formspree.io/f/mbdazrqq";

  const [plan, setPlan] = useState<PlanValue>("Free Audit");

  // Fields
  const [fullName, setFullName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [industry, setIndustry] = useState("");
  const [serviceArea, setServiceArea] = useState("");
  const [goal, setGoal] = useState("");
  const [notes, setNotes] = useState("");
  const [preferredContact, setPreferredContact] = useState<"Text" | "Call" | "Email">("Text");

  // Pull ?plan= from URL and auto-select
  useEffect(() => {
    const fromUrl = searchParams.get("plan")?.trim();
    if (!fromUrl) return;

    // match case-insensitive
    const match = PLAN_OPTIONS.find(
      (p) => p.value.toLowerCase() === fromUrl.toLowerCase()
    );
    if (match) setPlan(match.value);
  }, [searchParams]);

  const heading = useMemo(() => {
    if (plan === "Free Audit") return "Get a Free Website Audit";
    return "Start Your Website";
  }, [plan]);

  const subheading = useMemo(() => {
    if (plan === "Free Audit") {
      return "Fill this out and I’ll send a quick plan: what to fix, what to add, and how to get more calls/leads from your site.";
    }
    return "Fill this out and I’ll reach out with next steps, pricing, and timeline.";
  }, [plan]);

  return (
    <main className="min-h-screen">
      <section className="relative mx-auto max-w-3xl px-4 py-12">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-64 w-[680px] -translate-x-1/2 rounded-full bg-[color:var(--accent)]/10 blur-3xl" />
          <div className="absolute left-8 top-24 h-40 w-40 rounded-full bg-[color:var(--accent)]/8 blur-2xl" />
          <div className="absolute right-10 top-40 h-44 w-44 rounded-full bg-[color:var(--accent)]/6 blur-2xl" />
        </div>

        <div className="text-center">
          <h1 className="mx-auto max-w-2xl text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
            {heading} <span className="text-[color:var(--accent)] glow">→</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm md:text-base text-white/60">
            {subheading}
          </p>
        </div>

        <Card className="mt-10 p-6 md:p-8">
          {/* ✅ If you forget to paste your Formspree action, this warning helps you */}
          {FORMSPREE_ACTION.includes("PASTE_YOUR_FORMSPREE") && (
            <div className="mb-5 rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-white/80">
              <div className="font-semibold">Action URL missing</div>
              <div className="mt-1 text-white/70">
                Open <span className="font-semibold">src/app/form/FormClient.tsx</span> and replace{" "}
                <span className="font-semibold">FORMSPREE_ACTION</span> with your real Formspree endpoint.
              </div>
            </div>
          )}

          <form action={FORMSPREE_ACTION} method="POST" className="grid gap-5">
            {/* Hidden fields for clarity in your inbox */}
            <input type="hidden" name="selected_plan" value={plan} />
            <input type="hidden" name="preferred_contact" value={preferredContact} />
            <input type="hidden" name="source_url" value={typeof window !== "undefined" ? window.location.href : ""} />

            {/* Plan */}
            <div>
              <label className="text-sm font-semibold text-white/85">Selected option</label>
              <select
                name="plan"
                value={plan}
                onChange={(e) => setPlan(e.target.value as PlanValue)}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white/85 outline-none focus:border-white/25"
              >
                {PLAN_OPTIONS.map((p) => (
                  <option key={p.value} value={p.value}>
                    {p.label}
                  </option>
                ))}
              </select>
              {plan === "Free Audit" && (
                <p className="mt-2 text-xs text-white/55">
                  You’ll get a quick plan: improvements, recommended pages, SEO checklist, and next steps.
                </p>
              )}
            </div>

            {/* Contact */}
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="text-sm font-semibold text-white/85">Your name</label>
                <input
                  name="full_name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  placeholder="John Smith"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white/85 placeholder:text-white/35 outline-none focus:border-white/25"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-white/85">Business name</label>
                <input
                  name="business_name"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  required
                  placeholder="ABC Pressure Washing"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white/85 placeholder:text-white/35 outline-none focus:border-white/25"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-white/85">Phone</label>
                <input
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  placeholder="(407) 252-8476"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white/85 placeholder:text-white/35 outline-none focus:border-white/25"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-white/85">Email</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="you@email.com"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white/85 placeholder:text-white/35 outline-none focus:border-white/25"
                />
              </div>
            </div>

            {/* Preferred contact */}
            <div>
              <label className="text-sm font-semibold text-white/85">Best way to reach you</label>
              <div className="mt-2 grid gap-2 sm:grid-cols-3">
                {(["Text", "Call", "Email"] as const).map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setPreferredContact(opt)}
                    className={[
                      "rounded-2xl border px-4 py-3 text-sm font-semibold transition",
                      preferredContact === opt
                        ? "border-white/25 bg-white/[0.06] text-white"
                        : "border-white/10 bg-white/[0.03] text-white/75 hover:bg-white/[0.06] hover:text-white",
                    ].join(" ")}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Business details */}
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="text-sm font-semibold text-white/85">Industry / niche</label>
                <input
                  name="industry"
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  required
                  placeholder="Mobile detailing / roofing / cleaning / etc."
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white/85 placeholder:text-white/35 outline-none focus:border-white/25"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-white/85">Service area</label>
                <input
                  name="service_area"
                  value={serviceArea}
                  onChange={(e) => setServiceArea(e.target.value)}
                  required
                  placeholder="Orlando, Apopka, Longwood, etc."
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white/85 placeholder:text-white/35 outline-none focus:border-white/25"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-semibold text-white/85">
                What do you want your website to do for you?
              </label>
              <textarea
                name="website_goal"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                required
                rows={4}
                placeholder="More calls? More quote requests? Rank in Orlando? Replace an old site? Tell me what matters most."
                className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white/85 placeholder:text-white/35 outline-none focus:border-white/25"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-white/85">Website link (optional)</label>
              <input
                name="current_website"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                placeholder="https://yourwebsite.com"
                className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white/85 placeholder:text-white/35 outline-none focus:border-white/25"
              />
              <p className="mt-2 text-xs text-white/55">
                If you don’t have a site yet, leave this blank.
              </p>
            </div>

            <div>
              <label className="text-sm font-semibold text-white/85">Anything else?</label>
              <textarea
                name="notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={4}
                placeholder="Any pages you want, competitors you like, colors, logos, photos, booking tools, etc."
                className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white/85 placeholder:text-white/35 outline-none focus:border-white/25"
              />
            </div>

            <button
              type="submit"
              className="mt-2 inline-flex w-full items-center justify-center rounded-2xl bg-[color:var(--accent)] px-6 py-4 text-sm font-semibold text-black hover:brightness-110 transition"
            >
              {plan === "Free Audit" ? "Request My Free Audit →" : "Submit →"}
            </button>

            <p className="text-center text-xs text-white/45">
              By submitting, you agree SitePulse may contact you about your request.
            </p>
          </form>
        </Card>

        <div className="mt-8 text-center">
          <a
            href="/"
            className="text-sm font-semibold text-white/70 hover:text-white transition"
          >
            ← Back to Home
          </a>
        </div>
      </section>
    </main>
  );
}