import { motion } from "framer-motion";

const trajectoryPhoto =
  "https://growmoneydigital.com.br/alexandre/file_00000000a0fc71f5adc7c442349fb114.png";

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
