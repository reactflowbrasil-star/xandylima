import { motion } from "framer-motion";
import { Quote, Instagram } from "lucide-react";

const items = [
  { name: "Mariana Costa", role: "Head of Product · NeoBank", text: "O Alexandre não entrega só design — entrega clareza estratégica. Em 6 semanas reescrevemos a jornada inteira do app." },
  { name: "Rafael Tavares", role: "CEO · Pulse Analytics", text: "Profissionalismo sênior do briefing ao deploy. O design system que ele criou virou base de todos os nossos novos produtos." },
  { name: "Juliana Reis", role: "Founder · Aria Chat", text: "A combinação de UX + IA humanizada que o Alexandre constrói é simplesmente outro nível. Conversão real, não vaidade." },
];

export function Testimonials() {
  return (
    <section className="section-padding bg-surface/40">
      <div className="container-max">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div className="max-w-2xl">
            <span className="eyebrow">Prova social</span>
            <h2 className="mt-4 font-display font-bold text-4xl md:text-5xl leading-tight">
              O que clientes <span className="text-gradient-primary">dizem</span>.
            </h2>
          </div>
          <a
            href="https://instagram.com/react.fly"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            <Instagram className="w-4 h-4" />
            @react.fly
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {items.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl bg-surface-elevated border border-border p-7 flex flex-col"
            >
              <Quote className="w-8 h-8 text-primary mb-5" />
              <blockquote className="text-foreground leading-relaxed flex-1">"{t.text}"</blockquote>
              <figcaption className="mt-6 pt-5 border-t border-border">
                <div className="font-display font-bold">{t.name}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{t.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
