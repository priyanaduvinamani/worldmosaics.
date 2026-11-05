export const metadata = {
  title: "Country Pavilions | World Mosaic",
  description: "13 proposed country pavilions at World Mosaic International Cultural Festival.",
};

const pavilions = [
  { country: "India", focus: "Textiles, classical and folk arts, crafts and regional food", host: true },
  { country: "Japan", focus: "Origami, calligraphy, tea culture and traditional arts" },
  { country: "South Korea", focus: "Korean music, food, traditional clothing and popular culture" },
  { country: "China", focus: "Calligraphy, paper crafts, heritage and traditional art" },
  { country: "Thailand", focus: "Cuisine, crafts and traditional dance" },
  { country: "Indonesia", focus: "Batik, island traditions, music and crafts" },
  { country: "France", focus: "Art, pastries, fashion and café culture" },
  { country: "Italy", focus: "Cuisine, art, architecture and lifestyle" },
  { country: "Spain", focus: "Flamenco, music and traditions" },
  { country: "Mexico", focus: "Food, music, colourful art and crafts" },
  { country: "Brazil", focus: "Samba, carnival arts, music and costumes" },
  { country: "Kenya", focus: "Textiles, crafts, music and dance" },
  { country: "Egypt", focus: "Ancient heritage, history and traditional crafts" },
];

export default function PavilionsPage() {
  return (
    <div>
      <section className="bg-[var(--color-deep)] text-white py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-display text-3xl md:text-5xl font-bold">
            Country Pavilions
          </h1>
          <p className="mt-3 text-white/80">
            13 proposed pavilions including India as the host country. Participation is planned through embassies, cultural institutes and diaspora groups.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {pavilions.map((p) => (
              <div
                key={p.country}
                className={`card-mosaic p-6 ${p.host ? "ring-2 ring-[var(--color-accent)]" : ""}`}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-display text-xl font-semibold text-[var(--color-deep)]">
                    {p.country}
                  </h3>
                  {p.host && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--color-accent)] text-[var(--color-deep)] font-medium">
                      Host
                    </span>
                  )}
                </div>
                <p className="text-sm text-[var(--color-deep)]/70 leading-relaxed">
                  {p.focus}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-[var(--color-deep)]/50 max-w-2xl mx-auto">
            All country names and pavilion themes are proposed for planning purposes.
            Final participation and content will be confirmed with country representatives
            to ensure accurate and respectful cultural presentation.
          </p>
        </div>
      </section>
    </div>
  );
}
