const items = [
  "UX / UI Design",
  "Webflow",
  "Figma",
  "Android · Kotlin",
  "React & Next",
  "IA & LLMs",
  "n8n · Automação",
  "Design Systems",
  "Tailwind CSS",
  "Prototipação",
];

export function Marquee() {
  return (
    <div className="border-y border-border bg-surface/40 py-6 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((it, i) => (
          <div key={i} className="flex items-center gap-12 px-6">
            <span className="font-display text-2xl md:text-3xl font-bold text-muted-foreground/40 hover:text-primary transition-colors">
              {it}
            </span>
            <span className="text-primary text-2xl">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
