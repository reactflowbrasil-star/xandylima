import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import triboCamisetas from "@/assets/tribo-camisetas.jpg.asset.json";
import triboBranding from "@/assets/tribo-branding.jpg.asset.json";
import missGoias from "@/assets/miss-goias.jpg.asset.json";
import vetnutriLogo from "@/assets/vetnutri-logo-dark.jpg.asset.json";
import vetnutriLight from "@/assets/vetnutri-logo-light.jpg.asset.json";
import vetnutriLanyard from "@/assets/vetnutri-lanyard.jpg.asset.json";
import xtremeLogo from "@/assets/xtreme-logo.jpg.asset.json";
import xtremeCamisetas from "@/assets/xtreme-camisetas.jpg.asset.json";
import xtremeCap from "@/assets/xtreme-cap.jpg.asset.json";
import xtremePresentation from "@/assets/xtreme-presentation.png.asset.json";

type Project = {
  id: number;
  title: string;
  category: string;
  tag: "Branding" | "Editorial" | "Social Media" | "Identidade Visual";
  image: string;
  description: string;
  stack: string[];
  kpi: string;
};

const projects: Project[] = [
  { id: 1, title: "Tribo Produções", category: "Branding · Vestuário", tag: "Branding", image: triboCamisetas.url, description: "Identidade visual e linha de camisetas para a Tribo Produções, com mascote tiki autoral e tipografia condensada de alto impacto.", stack: ["Illustrator", "Photoshop", "Mockups"], kpi: "Marca 100% autoral" },
  { id: 2, title: "Tribo · Papelaria", category: "Identidade Visual completa", tag: "Identidade Visual", image: triboBranding.url, description: "Sistema de identidade da Tribo Produções aplicado em papelaria, cartões, envelopes e mídia física com acabamento premium.", stack: ["Branding", "Print", "Mockups"], kpi: "Kit completo entregue" },
  { id: 3, title: "Miss Goiás Magazine", category: "Editorial · Revista", tag: "Editorial", image: missGoias.url, description: "Capa e teaser de lançamento da Revista Miss Goiás, com direção de arte editorial e tipografia clássica em serifa.", stack: ["InDesign", "Photoshop", "Direção de Arte"], kpi: "Edição publicada" },
  { id: 4, title: "Vet Nutri · Logo", category: "Identidade · Veterinária", tag: "Identidade Visual", image: vetnutriLogo.url, description: "Criação do logotipo da Vet Nutri com símbolo monograma em degradê azul e roxo, transmitindo modernidade e cuidado.", stack: ["Illustrator", "Branding"], kpi: "Marca aprovada" },
  { id: 5, title: "Vet Nutri · Social", category: "Social Media · Carla Maion", tag: "Social Media", image: vetnutriLight.url, description: "Linha de posts e identidade aplicada para redes sociais da Dra. Carla Maion, com versão light da marca Vet Nutri.", stack: ["Photoshop", "Social Kit"], kpi: "Padrão visual consolidado" },
  { id: 6, title: "Vet Nutri · Brinde", category: "Aplicação de marca", tag: "Branding", image: vetnutriLanyard.url, description: "Aplicação da marca Vet Nutri em cordão/lanyard para eventos e clínica, com versão monocromática branca.", stack: ["Mockups", "Branding"], kpi: "Material entregue" },
  { id: 7, title: "Xtreme Shoes · Logo", category: "Branding · E-commerce esportivo", tag: "Branding", image: xtremePresentation.url, description: "Identidade visual completa para a loja online Xtreme Shoes, com símbolo circular dinâmico em laranja e cinza.", stack: ["Illustrator", "Branding", "Logo Design"], kpi: "Marca completa" },
  { id: 8, title: "Xtreme · Vestuário", category: "Aplicação em camisetas", tag: "Identidade Visual", image: xtremeCamisetas.url, description: "Aplicação da marca Xtreme Shoes em peças de vestuário corporativo, exploração da versão horizontal e símbolo.", stack: ["Mockups", "Photoshop"], kpi: "Uniforme aprovado" },
  { id: 9, title: "Xtreme · Boné", category: "Brinde corporativo", tag: "Branding", image: xtremeCap.url, description: "Aplicação bordada do símbolo Xtreme Shoes em boné snapback, mantendo a leitura mesmo em tom-sobre-tom.", stack: ["Mockup", "Branding"], kpi: "Lote produzido" },
  { id: 10, title: "Xtreme · Banner", category: "Comunicação visual", tag: "Social Media", image: xtremeLogo.url, description: "Peça de comunicação do símbolo Xtreme Shoes com produto fotografado, usada como cover e mídia paga.", stack: ["Photoshop", "Direção de Arte"], kpi: "Campanha rodando" },
];

const filters = ["Todos", "Branding", "Identidade Visual", "Editorial", "Social Media"] as const;

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
