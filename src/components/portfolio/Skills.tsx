import { motion } from "framer-motion";
import { Palette, Smartphone, Brain, Workflow, Code2, Layers, Figma, Database } from "lucide-react";

const skills = [
  { icon: Palette, name: "UX/UI Design", desc: "Pesquisa, wireframe, prototipação e design systems escaláveis." },
  { icon: Figma, name: "Figma · Webflow", desc: "Componentização, auto-layout e entrega pixel-perfect." },
  { icon: Smartphone, name: "Android Nativo", desc: "Kotlin, Jetpack Compose, Material You e arquitetura limpa." },
  { icon: Brain, name: "IA & LLMs", desc: "Agentes humanizados, RAG, prompt engineering e fine-tuning." },
  { icon: Workflow, name: "Automação", desc: "n8n, Make, integrações com WhatsApp, CRMs e ERPs." },
  { icon: Code2, name: "Front-End", desc: "React, Next, Tailwind, GSAP, animações performáticas." },
  { icon: Database, name: "Back-End", desc: "Node, APIs REST/GraphQL, Postgres, Supabase, autenticação." },
  { icon: Layers, name: "Design Ops", desc: "Tokens, bibliotecas, hand-off e governança de design." },
];

export function Skills() {
  return (
    <section className="section-padding">
      <div className="container-max">
        <div className="max-w-2xl">
          <span className="eyebrow">Competências</span>
          <h2 className="mt-4 font-display font-bold text-4xl md:text-5xl leading-tight">
            Stack completo, <span className="text-gradient-primary">do pixel ao deploy</span>.
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group relative rounded-2xl border border-border bg-surface p-6 hover:border-primary/50 transition-all hover:-translate-y-1"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/10 transition-all" />
              <s.icon className="w-7 h-7 text-primary mb-4" />
              <h3 className="font-display font-bold text-lg">{s.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
