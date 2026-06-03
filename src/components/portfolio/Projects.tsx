import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";

type Project = {
  id: number;
  title: string;
  category: string;
  tag: "UX/UI" | "Web" | "Mobile" | "IA" | "Automação";
  image: string;
  description: string;
  stack: string[];
  kpi: string;
};

const projects: Project[] = [
  { id: 1, title: "NeoBank Mobile", category: "Fintech · App", tag: "Mobile", image: p1, description: "Redesign completo de aplicativo bancário com foco em onboarding sem fricção e personalização por IA.", stack: ["Figma", "Android", "Kotlin", "Jetpack"], kpi: "+42% retenção D30" },
  { id: 2, title: "Pulse Analytics", category: "SaaS · Dashboard", tag: "Web", image: p2, description: "Painel de BI com design system próprio, dark-first e visualizações de dados em tempo real.", stack: ["React", "Tailwind", "Recharts", "Webflow"], kpi: "−63% tempo de leitura" },
  { id: 3, title: "Aria Chat", category: "Agente de IA humanizado", tag: "IA", image: p3, description: "Assistente conversacional treinado em base proprietária com memória de longo prazo e tom de marca.", stack: ["LLM", "RAG", "n8n", "Node"], kpi: "+3.1× conversão" },
  { id: 4, title: "FitTrack Android", category: "App nativo Android", tag: "Mobile", image: p4, description: "App de treinos com Material You, animações fluídas e sincronização offline-first.", stack: ["Kotlin", "Jetpack Compose", "Room"], kpi: "4.8★ na Play Store" },
  { id: 5, title: "FlowOps", category: "Automação ponta-a-ponta", tag: "Automação", image: p5, description: "Orquestração de workflows entre CRM, financeiro e WhatsApp para uma rede de clínicas.", stack: ["n8n", "Make", "Postgres", "Twilio"], kpi: "200h/mês economizadas" },
  { id: 6, title: "Bloom Commerce", category: "E-commerce · Webflow", tag: "Web", image: p6, description: "Loja headless construída no Webflow com checkout customizado e CMS pluggável.", stack: ["Webflow", "Shopify", "GSAP"], kpi: "+58% ticket médio" },
];

const filters = ["Todos", "UX/UI", "Web", "Mobile", "IA", "Automação"] as const;

export function Projects() {
  const [active, setActive] = useState<(typeof filters)[number]>("Todos");
  const [modal, setModal] = useState<Project | null>(null);

  const filtered = active === "Todos" ? projects : projects.filter((p) => p.tag === active || (active === "UX/UI" && (p.tag === "Web" || p.tag === "Mobile")));

  return (
    <section id="projetos" className="section-padding relative">
      <div className="absolute top-40 right-0 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[120px] -z-10" />

      <div className="container-max">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="eyebrow">Portfolio · Cases reais</span>
            <h2 className="mt-4 font-display font-bold text-4xl md:text-5xl leading-tight max-w-2xl">
              Projetos selecionados em <span className="text-gradient-primary">estilo Webflow</span>.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide uppercase transition-all border ${
                  active === f
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, idx) => (
              <motion.button
                layout
                key={p.id}
                onClick={() => setModal(p)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`card-project text-left group ${idx % 5 === 0 ? "lg:row-span-2" : ""}`}
              >
                <div className={`relative overflow-hidden ${idx % 5 === 0 ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
                  <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80" />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full glass text-[10px] uppercase tracking-wider font-semibold">
                    {p.tag}
                  </div>
                  <div className="absolute top-4 right-4 h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all -translate-y-2 group-hover:translate-y-0">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
                <div className="p-5">
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{p.category}</div>
                  <h3 className="mt-1 font-display font-bold text-xl">{p.title}</h3>
                  <div className="mt-3 text-sm text-primary font-semibold">{p.kpi}</div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {modal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModal(null)}
            className="fixed inset-0 z-[100] bg-background/85 backdrop-blur-md p-4 md:p-8 overflow-y-auto flex items-start md:items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-surface-elevated rounded-3xl overflow-hidden border border-border"
            >
              <button
                onClick={() => setModal(null)}
                className="absolute top-4 right-4 z-10 h-10 w-10 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="aspect-[16/9] overflow-hidden">
                <img src={modal.image} alt={modal.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-8 md:p-10">
                <div className="text-xs text-primary uppercase tracking-[0.25em] font-semibold">{modal.tag} · {modal.category}</div>
                <h3 className="mt-3 font-display font-bold text-3xl md:text-4xl">{modal.title}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">{modal.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {modal.stack.map((s) => (
                    <span key={s} className="px-3 py-1.5 rounded-full bg-secondary border border-border text-xs font-medium">{s}</span>
                  ))}
                </div>
                <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-semibold">
                  Resultado: {modal.kpi}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
