import { motion } from "framer-motion";

const trajectoryPhoto =
  "data:image/webp;base64,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";

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
    <section id="experiencia" className="section-padding relative overflow-hidden bg-surface/40">
      <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-primary/10 blur-[140px]" />

      <div className="container-max relative z-10 grid gap-14 lg:grid-cols-[0.95fr_1.25fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <span className="eyebrow">Trajetória</span>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">
            Experiência <span className="text-gradient-primary">profissional</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Mais de três décadas estudando tecnologia, com passagens por agências de propaganda,
            estúdios criativos e projetos próprios em UX, mobile e automação.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className="mt-8 overflow-hidden rounded-[2rem] border border-white/10 bg-background/35 p-2 shadow-elegant backdrop-blur-xl"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.55rem] bg-background">
              <img
                src={trajectoryPhoto}
                alt="Retrato conceitual de Alexandre Lima para representar trajetória profissional"
                className="h-full w-full object-cover object-center grayscale"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="inline-flex rounded-full border border-white/10 bg-background/55 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-primary backdrop-blur-xl">
                  Estratégia em movimento
                </div>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-foreground/78">
                  Design, código e IA como peças de uma mesma jogada: precisão, visão e execução.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="relative border-l border-border pl-8">
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
              <div className="text-xs font-mono tracking-widest text-primary">{it.year}</div>
              <h3 className="mt-2 font-display text-2xl font-bold">{it.company}</h3>
              <div className="mt-1 text-sm text-muted-foreground">{it.role}</div>
              <p className="mt-4 leading-relaxed text-muted-foreground">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
