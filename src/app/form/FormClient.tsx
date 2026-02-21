"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

// ✅ PUT YOUR REAL FORMSPREE URL HERE (the one that worked before)
// Example: https://formspree.io/f/abcdwxyz
const FORMSPREE_ACTION = "https://formspree.io/f/mbdazrqq";

export default function FormClient() {
  const searchParams = useSearchParams();
  const planFromUrl = useMemo(() => searchParams.get("plan") || "", [searchParams]);

  // Steps: 1 = Your Information, 2 = Project Details
  const [step, setStep] = useState<1 | 2>(1);

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  // Plan
  const [plan, setPlan] = useState("");

  // Step 1 fields (Your Information)
  const [fullName, setFullName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [instagram, setInstagram] = useState("");

  // Step 2 fields (Project Details)
  const [serviceArea, setServiceArea] = useState("");
  const [currentWebsite, setCurrentWebsite] = useState("");
  const [preferredContact, setPreferredContact] = useState<"Text" | "Call" | "Email">("Text");
  const [notes, setNotes] = useState("");

  // ✅ Auto-select plan from URL (?plan=Growth)
  useEffect(() => {
    if (planFromUrl) setPlan(planFromUrl);
  }, [planFromUrl]);

  function goNext() {
    // minimal validation for step 1
    if (!email.trim()) {
      alert("Please enter your email.");
      return;
    }
    setStep(2);
  }

  function goBack() {
    setStep(1);
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);

      const res = await fetch(FORMSPREE_ACTION, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");

        // Reset fields (keep plan so it stays selected)
        setStep(1);
        setFullName("");
        setBusinessName("");
        setBusinessType("");
        setPhone("");
        setEmail("");
        setInstagram("");
        setServiceArea("");
        setCurrentWebsite("");
        setPreferredContact("Text");
        setNotes("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="min-h-screen px-4 py-14">
      <div className="mx-auto w-full max-w-3xl">
        {/* Card container */}
        <div className="rounded-3xl border border-white/10 bg-black/30 shadow-[0_20px_60px_rgba(0,0,0,0.55)] backdrop-blur-xl">
          {/* Top header */}
          <div className="border-b border-white/10 px-6 py-6 sm:px-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                  Start Your Website
                </h1>
                <p className="mt-2 text-sm text-white/60">
                  Quick form → I’ll reach out with next steps.
                </p>
              </div>

              {/* Step indicator */}
              <div className="shrink-0 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-semibold text-white/70">
                Step {step} of 2
              </div>
            </div>

            {/* Progress bar */}
            <div className="mt-5 h-2 w-full rounded-full bg-white/5">
              <div
                className="h-2 rounded-full bg-[color:var(--accent)] transition-all"
                style={{ width: step === 1 ? "50%" : "100%" }}
              />
            </div>
          </div>

          <form onSubmit={onSubmit} className="px-6 py-7 sm:px-8">
            {/* STEP 1 */}
            {step === 1 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-[color:var(--accent)]/15 text-[color:var(--accent)]">
                    {/* person icon */}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M4 21a8 8 0 0 1 16 0"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  <h2 className="text-xl font-semibold text-white">Your Information</h2>
                </div>

                {/* Full Name */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-white/80">Full Name</label>
                  <input
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    name="full_name"
                    type="text"
                    placeholder=""
                    className="w-full rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-white placeholder:text-white/35 outline-none focus:border-[color:var(--accent)]/50"
                  />
                </div>

                {/* Business/Brand Name */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-white/80">Business/Brand Name</label>
                  <input
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    name="business_name"
                    type="text"
                    placeholder=""
                    className="w-full rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-white placeholder:text-white/35 outline-none focus:border-[color:var(--accent)]/50"
                  />
                </div>

                {/* Business Type */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-white/80">
                    What type of business/service do you offer?
                  </label>
                  <input
                    value={businessType}
                    onChange={(e) => setBusinessType(e.target.value)}
                    name="business_type"
                    type="text"
                    placeholder="e.g. Restaurant, Car Dealership, Music Artist, Salon, Real Estate, etc."
                    className="w-full rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-white placeholder:text-white/35 outline-none focus:border-[color:var(--accent)]/50"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-white/80">Phone Number</label>
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    name="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    className="w-full rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-white placeholder:text-white/35 outline-none focus:border-[color:var(--accent)]/50"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-white/80">Email Address *</label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    type="email"
                    required
                    placeholder=""
                    className="w-full rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-white placeholder:text-white/35 outline-none focus:border-[color:var(--accent)]/50"
                  />
                </div>

                {/* Instagram */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-white/80">
                    Instagram Username <span className="text-white/40">(optional)</span>
                  </label>
                  <input
                    value={instagram}
                    onChange={(e) => setInstagram(e.target.value)}
                    name="instagram"
                    type="text"
                    placeholder="@yourusername"
                    className="w-full rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-white placeholder:text-white/35 outline-none focus:border-[color:var(--accent)]/50"
                  />
                </div>

                {/* Next */}
                <div className="flex items-center justify-end pt-2">
                  <button
                    type="button"
                    onClick={goNext}
                    className="inline-flex items-center gap-2 rounded-2xl bg-[color:var(--accent)] px-6 py-3 text-sm font-semibold text-black hover:brightness-110 transition"
                  >
                    Next Step
                    <span aria-hidden="true">→</span>
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <div className="space-y-6">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-xl bg-[color:var(--accent)]/15 text-[color:var(--accent)]">
                      {/* spark icon */}
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path
                          d="M12 2l1.6 5.2L19 9l-5.4 1.8L12 16l-1.6-5.2L5 9l5.4-1.8L12 2Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <h2 className="text-xl font-semibold text-white">Project Details</h2>
                  </div>

                  <button
                    type="button"
                    onClick={goBack}
                    className="rounded-xl border border-white/12 bg-white/[0.03] px-3 py-2 text-xs font-semibold text-white/75 hover:bg-white/[0.06] transition"
                  >
                    ← Back
                  </button>
                </div>

                {/* Plan options */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-white/80">Selected Plan</label>
                  <select
                    value={plan}
                    onChange={(e) => setPlan(e.target.value)}
                    name="plan"
                    className="w-full rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-white outline-none focus:border-[color:var(--accent)]/50"
                  >
                    <option value="">Not sure yet</option>
                    <option value="Starter">Starter</option>
                    <option value="Growth">Growth</option>
                    <option value="Pro">Pro</option>
                  </select>

                  <p className="mt-2 text-xs text-white/45">
                    If you clicked a plan from pricing, it auto-fills here.
                  </p>
                </div>

                {/* Service area + Current website */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-white/80">Service Area</label>
                    <input
                      value={serviceArea}
                      onChange={(e) => setServiceArea(e.target.value)}
                      name="service_area"
                      type="text"
                      placeholder="Orlando, Apopka, Central FL..."
                      className="w-full rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-white placeholder:text-white/35 outline-none focus:border-[color:var(--accent)]/50"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-white/80">Current Website (if any)</label>
                    <input
                      value={currentWebsite}
                      onChange={(e) => setCurrentWebsite(e.target.value)}
                      name="current_website"
                      type="url"
                      placeholder="https://yourbusiness.com"
                      className="w-full rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-white placeholder:text-white/35 outline-none focus:border-[color:var(--accent)]/50"
                    />
                  </div>
                </div>

                {/* Preferred contact */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-white/80">Preferred Contact</label>
                  <select
                    value={preferredContact}
                    onChange={(e) => setPreferredContact(e.target.value as "Text" | "Call" | "Email")}
                    name="preferred_contact"
                    className="w-full rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-white outline-none focus:border-[color:var(--accent)]/50"
                  >
                    <option value="Text">Text</option>
                    <option value="Call">Call</option>
                    <option value="Email">Email</option>
                  </select>
                </div>

                {/* Notes */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-white/80">
                    Anything you want included? (pages, services, booking, colors, etc.)
                  </label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    name="notes"
                    rows={6}
                    placeholder="Example: I want a homepage, services, reviews, and a contact form. I want to rank for ‘mobile detailing Orlando’..."
                    className="w-full resize-y rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-white placeholder:text-white/35 outline-none focus:border-[color:var(--accent)]/50"
                  />
                </div>

                {/* Hidden metadata */}
                <input type="hidden" name="source" value="sitepulse-form" />
                <input type="hidden" name="utm_plan" value={plan} />

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full rounded-2xl bg-[color:var(--accent)] px-6 py-3 font-semibold text-black hover:brightness-110 transition disabled:opacity-60"
                >
                  {status === "sending" ? "Sending..." : "Submit"}
                </button>

                {status === "success" && (
                  <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-sm text-emerald-200">
                    ✅ Sent! I’ll reach out soon.
                  </div>
                )}

                {status === "error" && (
                  <div className="rounded-2xl border border-red-400/20 bg-red-400/10 p-4 text-sm text-red-200">
                    ❌ Something went wrong. Double-check your Formspree URL and try again.
                  </div>
                )}

                <p className="text-xs text-white/40">
                  By submitting, you agree to be contacted about your website project.
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </main>
  );
}