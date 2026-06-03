import { motion } from "framer-motion";

const items = [
  {
    year: "2018",
    company: "Inédita Propaganda",
    role: "UX/UI Designer & Front-End Sênior",
    desc: "Liderou o redesign de plataformas digitais de clientes nacionais, implementando design system e processos de prototipação rápida.",
  },
  {
    year: "2017",
    company: "Iltda Comunicação",
    role: "Designer & Desenvolvedor Web",
    desc: "Responsável por interfaces de campanhas digitais, automação de fluxos e integração com sistemas de marketing.",
  },
  {
    year: "2017",
    company: "Eckzem Studio",
    role: "UI Designer & Motion",
    desc: "Criação de identidades visuais digitais, micro-interações e cases para marcas regionais e nacionais.",
  },
];

export function Experience() {
  return (
    <section id="experiencia" className="section-padding bg-surface/40 relative">
      <div className="container-max grid lg:grid-cols-[1fr_1.5fr] gap-16">
        <div>
          <span className="eyebrow">Trajetória</span>
          <h2 className="mt-4 font-display font-bold text-4xl md:text-5xl leading-tight">
            Experiência <span className="text-gradient-primary">profissional</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Mais de três décadas estudando tecnologia, com passagens por agências de propaganda, estúdios criativos e projetos próprios em UX, mobile e automação.
          </p>
        </div>

        <div className="relative pl-8 border-l border-border">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative pb-12 last:pb-0"
            >
              <div className="absolute -left-[37px] top-1 h-4 w-4 rounded-full bg-primary ring-4 ring-background" />
              <div className="text-xs font-mono text-primary tracking-widest">{it.year}</div>
              <h3 className="mt-2 font-display font-bold text-2xl">{it.company}</h3>
              <div className="text-sm text-muted-foreground mt-1">{it.role}</div>
              <p className="mt-4 text-muted-foreground leading-relaxed">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
