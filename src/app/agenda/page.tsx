export const metadata = { title: "Programme | World Mosaic" };

const days = [
  {
    day: "Day 1 – 23 January 2027",
    title: "Discover the World",
    items: [
      { time: "10:00–11:00", title: "Entry, passport collection and pavilions open" },
      { time: "11:00–12:00", title: "Inauguration and Parade of Nations" },
      { time: "12:00–13:00", title: "International dance performances" },
      { time: "13:00–14:00", title: "Global Food Street" },
      { time: "14:00–15:00", title: "Art and craft demonstrations" },
      { time: "15:00–16:00", title: "International Fashion Walk" },
      { time: "16:00–17:00", title: "Workshops and traditional games" },
      { time: "17:00–18:00", title: "International cultural performances" },
      { time: "18:00–19:00", title: "World Dance Showcase" },
      { time: "19:00–20:00", title: "International music performances" },
      { time: "20:00–21:00", title: "Grand Opening Cultural Show" },
    ],
  },
  {
    day: "Day 2 – 24 January 2027",
    title: "Celebrate the World",
    items: [
      { time: "10:00–11:00", title: "Pavilions open and visitor activities" },
      { time: "11:00–12:00", title: "Children’s cultural activities" },
      { time: "12:00–13:00", title: "Global music performances" },
      { time: "13:00–14:00", title: "Food demonstrations" },
      { time: "14:00–15:00", title: "Art gallery and workshops" },
      { time: "15:00–16:00", title: "Cultural storytelling" },
      { time: "16:00–17:00", title: "Fashion and costume showcase" },
      { time: "17:00–18:00", title: "World Dance Showcase" },
      { time: "18:00–19:00", title: "International and Indian fusion" },
      { time: "19:00–20:00", title: "Global Music Night" },
      { time: "20:00–21:00", title: "Awards, grand finale and closing" },
    ],
  },
];

export default function AgendaPage() {
  return (
    <div>
      <section className="bg-[var(--color-deep)] text-white py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-display text-3xl md:text-5xl font-bold">Programme</h1>
          <p className="mt-3 text-white/80">
            Two-day run sheet · 10:00 AM – 9:00 PM · All pavilions and food stalls remain open during public hours
          </p>
        </div>
      </section>
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 space-y-14">
          {days.map((d) => (
            <div key={d.day}>
              <h2 className="font-display text-2xl font-bold text-[var(--color-deep)] mb-1">
                {d.day}
              </h2>
              <p className="text-[var(--color-secondary)] font-medium mb-6">{d.title}</p>
              <div className="space-y-2">
                {d.items.map((item) => (
                  <div
                    key={item.time + item.title}
                    className="card-mosaic flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-4"
                  >
                    <div className="font-mono text-sm font-semibold text-[var(--color-secondary)] w-28 shrink-0">
                      {item.time}
                    </div>
                    <div className="font-medium text-[var(--color-deep)]">{item.title}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <p className="text-center text-sm text-[var(--color-deep)]/50">
            Performer names and exact performance slots will be added after confirmations.
            This is a planning run sheet for the student project prototype.
          </p>
        </div>
      </section>
    </div>
  );
}
