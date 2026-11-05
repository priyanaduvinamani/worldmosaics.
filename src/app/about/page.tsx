import Link from "next/link";
import { Globe, Heart, Users, Award, Target } from "lucide-react";

export const metadata = {
  title: "About | World Mosaic",
  description: "About World Mosaic – International Cultural Festival at Yashobhoomi, New Delhi.",
};

export default function AboutPage() {
  return (
    <div>
      <section className="bg-[var(--color-deep)] text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold">
            About World Mosaic
          </h1>
          <p className="mt-4 text-xl text-white/80">
            A Journey Around the World
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="prose prose-lg max-w-none text-[var(--color-deep)]/80 space-y-6">
            <p className="text-xl leading-relaxed">
              World Mosaic is a proposed large-scale international cultural
              festival that brings together 10–15 countries on one platform.
              Through country pavilions, international and Indian performances,
              global food, art, crafts, fashion and interactive workshops,
              visitors will experience different cultures in one venue.
            </p>
            <p className="leading-relaxed">
              The festival will operate as an international cultural village and
              exhibition-style event. Visitors will move through country-themed
              pavilions and discover each country’s food, traditional clothing,
              art, music, crafts and heritage. A central performance arena will
              host cultural showcases by Indian and international performers.
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 gap-6">
            {[
              {
                icon: Target,
                title: "Promote Cultural Exchange",
                text: "Build understanding between participating countries through authentic cultural experiences.",
              },
              {
                icon: Users,
                title: "Platform for Artists",
                text: "Provide a stage for Indian and international artists, performers and craftspeople.",
              },
              {
                icon: Globe,
                title: "Global Experiences",
                text: "Introduce visitors to global food, art, music, clothing and traditions.",
              },
              {
                icon: Award,
                title: "Learning & Interaction",
                text: "Create educational and interactive opportunities for students, families and visitors.",
              },
            ].map((item) => (
              <div key={item.title} className="card-mosaic p-6">
                <item.icon className="w-8 h-8 text-[var(--color-secondary)] mb-3" />
                <h3 className="font-display text-xl font-semibold text-[var(--color-deep)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--color-deep)]/70">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 card-mosaic p-6 md:p-8 bg-[var(--color-sand)]/50">
            <h2 className="font-display text-2xl font-bold text-[var(--color-deep)] mb-4">
              Event Snapshot
            </h2>
            <dl className="grid sm:grid-cols-2 gap-4 text-sm">
              <div>
                <dt className="text-[var(--color-deep)]/50">Dates</dt>
                <dd className="font-medium text-[var(--color-deep)]">23–24 January 2027</dd>
              </div>
              <div>
                <dt className="text-[var(--color-deep)]/50">Timings</dt>
                <dd className="font-medium text-[var(--color-deep)]">10:00 AM – 9:00 PM</dd>
              </div>
              <div>
                <dt className="text-[var(--color-deep)]/50">Venue</dt>
                <dd className="font-medium text-[var(--color-deep)]">Yashobhoomi, Dwarka, New Delhi</dd>
              </div>
              <div>
                <dt className="text-[var(--color-deep)]/50">Theme</dt>
                <dd className="font-medium text-[var(--color-deep)]">A Journey Around the World</dd>
              </div>
              <div>
                <dt className="text-[var(--color-deep)]/50">Pavilions</dt>
                <dd className="font-medium text-[var(--color-deep)]">13 proposed (including India)</dd>
              </div>
              <div>
                <dt className="text-[var(--color-deep)]/50">Expected attendance</dt>
                <dd className="font-medium text-[var(--color-deep)]">3,000–5,000 visitors per day (estimate)</dd>
              </div>
            </dl>
          </div>

          <div className="mt-12 text-center">
            <Link href="/registration" className="btn-primary">
              Register for the Festival
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
