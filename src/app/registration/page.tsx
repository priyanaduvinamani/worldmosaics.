"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2, Loader2 } from "lucide-react";

type FormData = {
  fullName: string;
  email: string;
  mobile: string;
  guestCategory: string;
  visitDate: string;
  attendees: string;
  accessibility: string;
  consent: boolean;
};

const categories = [
  { value: "general", label: "General Visitor" },
  { value: "student", label: "Student" },
  { value: "vip", label: "VIP / Invited Guest" },
  { value: "performer", label: "Performer / Artist" },
  { value: "exhibitor", label: "Exhibitor / Stall" },
];

export default function RegistrationPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<FormData>({
    fullName: "",
    email: "",
    mobile: "",
    guestCategory: "general",
    visitDate: "both",
    attendees: "1",
    accessibility: "",
    consent: false,
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  function update(field: keyof FormData, value: string | boolean) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  function validate() {
    const e: Partial<Record<keyof FormData, string>> = {};
    if (!form.fullName.trim()) e.fullName = "Full name is required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Valid email is required";
    if (!form.mobile.trim() || form.mobile.replace(/\D/g, "").length < 8)
      e.mobile = "Valid mobile number is required";
    if (!form.guestCategory) e.guestCategory = "Please select a category";
    if (!form.visitDate) e.visitDate = "Please select visit date";
    if (!form.attendees || Number(form.attendees) < 1)
      e.attendees = "At least 1 attendee required";
    if (!form.consent) e.consent = "You must accept the terms to continue";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);

    const ticketId =
      "WM-" +
      Date.now().toString(36).toUpperCase() +
      "-" +
      Math.random().toString(36).substring(2, 6).toUpperCase();

    const registration = {
      ...form,
      ticketId,
      registeredAt: new Date().toISOString(),
      status: "confirmed",
    };
    localStorage.setItem("wm_last_registration", JSON.stringify(registration));
    const existing = JSON.parse(localStorage.getItem("wm_registrations") || "[]");
    existing.push(registration);
    localStorage.setItem("wm_registrations", JSON.stringify(existing));

    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    router.push(`/ticket?id=${ticketId}`);
  }

  return (
    <div>
      <section className="bg-[var(--color-deep)] text-white py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="font-display text-3xl md:text-5xl font-bold">
            Register for World Mosaic
          </h1>
          <p className="mt-3 text-white/80">
            23–24 January 2027 · Yashobhoomi, Dwarka, New Delhi
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-2xl mx-auto px-4">
          <form onSubmit={handleSubmit} className="card-mosaic p-6 md:p-8 space-y-5">
            <div>
              <label className="block text-sm font-medium text-[var(--color-deep)] mb-1.5">
                Full Name *
              </label>
              <input
                type="text"
                value={form.fullName}
                onChange={(e) => update("fullName", e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-sand)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]"
                placeholder="Your full name"
              />
              {errors.fullName && <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>}
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-[var(--color-deep)] mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-sand)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]"
                  placeholder="you@example.com"
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--color-deep)] mb-1.5">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  value={form.mobile}
                  onChange={(e) => update("mobile", e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-sand)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]"
                  placeholder="+91 98765 43210"
                />
                {errors.mobile && <p className="mt-1 text-sm text-red-600">{errors.mobile}</p>}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-[var(--color-deep)] mb-1.5">
                  Guest Category *
                </label>
                <select
                  value={form.guestCategory}
                  onChange={(e) => update("guestCategory", e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-sand)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]"
                >
                  {categories.map((c) => (
                    <option key={c.value} value={c.value}>{c.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--color-deep)] mb-1.5">
                  Visit Date *
                </label>
                <select
                  value={form.visitDate}
                  onChange={(e) => update("visitDate", e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-sand)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]"
                >
                  <option value="23">23 January 2027 only</option>
                  <option value="24">24 January 2027 only</option>
                  <option value="both">Both days</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--color-deep)] mb-1.5">
                Number of Attendees *
              </label>
              <input
                type="number"
                min={1}
                max={10}
                value={form.attendees}
                onChange={(e) => update("attendees", e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-sand)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]"
              />
              {errors.attendees && <p className="mt-1 text-sm text-red-600">{errors.attendees}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--color-deep)] mb-1.5">
                Accessibility or Assistance Request (optional)
              </label>
              <input
                type="text"
                value={form.accessibility}
                onChange={(e) => update("accessibility", e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-sand)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]"
                placeholder="Any support needed at the venue"
              />
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="consent"
                checked={form.consent}
                onChange={(e) => update("consent", e.target.checked)}
                className="mt-1"
              />
              <label htmlFor="consent" className="text-sm text-[var(--color-deep)]/80">
                I acknowledge the privacy policy and event terms. I understand this is a student project prototype and that dates, venue and capacity remain subject to confirmation. *
              </label>
            </div>
            {errors.consent && <p className="text-sm text-red-600">{errors.consent}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin mr-2" />
                  Processing...
                </>
              ) : (
                <>
                  <CheckCircle2 className="w-5 h-5 mr-2" />
                  Complete Registration
                </>
              )}
            </button>

            <p className="text-xs text-center text-[var(--color-deep)]/50">
              You will receive a unique ticket ID and QR code for check-in demonstration.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}
