import Link from "next/link";

export const metadata = {
  title: "Sponsors & Partners | World Mosaic",
  description: "Sponsorship and partnership opportunities for World Mosaic International Cultural Festival.",
};

const tiers = [
  {
    name: "Title Partner",
    description: "Lead branding across the festival, main stage presence, and premium visibility.",
    benefits: [
      "Logo on main stage backdrop and entry arch",
      "Prominent placement on website and all collaterals",
      "Speaking opportunity at inauguration",
      "VIP lounge access for guests",
      "Social media and press mentions",
    ],
  },
  {
    name: "Presenting Partners",
    description: "Strong visibility across key zones and digital platforms.",
    benefits: [
      "Logo on selected stage and pavilion signage",
      "Website and brochure presence",
      "Complimentary VIP passes",
      "Social media mentions",
    ],
  },
  {
    name: "Supporting Partners",
    description: "Association with specific experiences (food, workshops, marketplace).",
    benefits: [
      "Logo on zone-specific signage",
      "Website listing",
      "Complimentary general passes",
    ],
  },
  {
    name: "Community & Cultural Partners",
    description: "Embassies, cultural institutes, educational institutions and diaspora groups.",
    benefits: [
      "Recognition as cultural collaborator",
      "Pavilion or programme association",
      "Shared promotional support",
    ],
  },
];

export default function SponsorsPage() {
  return (
    <div>
      <section className="bg-[var(--color-deep)] text-white py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-display text-3xl md:text-5xl font-bold">
            Sponsors & Partners
          </h1>
          <p className="mt-3 text-white/80">
            Support cultural exchange and be part of World Mosaic 2027
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-center text-[var(--color-deep)]/70 max-w-2xl mx-auto mb-12">
            Sponsorship and partnership opportunities are open. Title, Presenting,
            Supporting and Community partner tiers are available. All names below
            are proposed tiers for planning — confirmed partners will be listed here
            after agreements.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-14">
            {tiers.map((tier) => (
              <div key={tier.name} className="card-mosaic p-6">
                <h3 className="font-display text-xl font-semibold text-[var(--color-deep)]">
                  {tier.name}
                </h3>
                <p className="mt-2 text-sm text-[var(--color-deep)]/70">
                  {tier.description}
                </p>
                <ul className="mt-4 space-y-1.5 text-sm text-[var(--color-deep)]/80">
                  {tier.benefits.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="text-[var(--color-secondary)]">•</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="card-mosaic p-8 text-center bg-[var(--color-sand)]/40">
            <h2 className="font-display text-2xl font-bold text-[var(--color-deep)]">
              Become a Partner
            </h2>
            <p className="mt-3 text-[var(--color-deep)]/70 max-w-lg mx-auto">
              Interested in sponsoring or collaborating? Reach out to the organising
              team with your organisation details and preferred association area.
            </p>
            <Link href="/contact" className="btn-primary mt-6 inline-flex">
              Contact the Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
