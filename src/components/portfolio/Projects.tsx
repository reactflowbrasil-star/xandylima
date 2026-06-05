import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Eye, FileText, X } from "lucide-react";
import { localProjects } from "./localProjects";
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

export type Project = {
  id: number;
  title: string;
  category: string;
  tag: "Branding" | "Editorial" | "Social Media" | "Identidade Visual";
  image: string | null;
  file?: string;
  fileType?: "image" | "pdf";
  description: string;
  stack: string[];
  kpi: string;
};

const featuredProjects: Project[] = [
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

const projects: Project[] = [...featuredProjects, ...localProjects];

const filters = ["Todos", "Branding", "Identidade Visual", "Editorial", "Social Media"] as const;

function ProjectCard({ project: p, idx, onOpen }: { project: Project; idx: number; onOpen: () => void }) {
  const ref = useRef<HTMLButtonElement>(null);
  const [hovering, setHovering] = useState(false);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const sx = useSpring(mx, { stiffness: 180, damping: 18, mass: 0.4 });
  const sy = useSpring(my, { stiffness: 180, damping: 18, mass: 0.4 });

  const rotateX = useTransform(sy, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-10, 10]);
  const imgX = useTransform(sx, [-0.5, 0.5], [-14, 14]);
  const imgY = useTransform(sy, [-0.5, 0.5], [-14, 14]);
  const glareX = useTransform(sx, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(sy, [-0.5, 0.5], ["0%", "100%"]);
  const glare = useTransform(
    [glareX, glareY] as const,
    ([x, y]) =>
      `radial-gradient(360px circle at ${x} ${y}, rgba(255,255,255,0.35), transparent 55%)`
  );

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  const reset = () => {
    mx.set(0);
    my.set(0);
    setHovering(false);
  };

  return (
    <motion.button
      ref={ref}
      layout
      onClick={onOpen}
      onMouseMove={handleMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={reset}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.92 }}
      transition={{ duration: 0.45, delay: Math.min(idx, 8) * 0.04 }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      whileHover={{ y: -6 }}
      className="card-project group relative h-full min-h-[430px] w-[82vw] max-w-[360px] shrink-0 snap-center text-left will-change-transform sm:w-[360px] lg:w-[390px]"
      aria-label={`Abrir projeto ${p.title}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        {p.image ? (
          <motion.img
            src={p.image}
            alt={p.title}
            loading="lazy"
            draggable={false}
            style={{ x: imgX, y: imgY, scale: hovering ? 1.12 : 1 }}
            transition={{ scale: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] } }}
            className="absolute -left-[6%] -top-[6%] h-[112%] w-[112%] object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-surface-elevated text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 text-primary">
              <FileText className="h-10 w-10" />
            </div>
            <span className="px-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Documento PDF
            </span>
          </div>
        )}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-90" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary/40 via-primary/0 to-primary/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-60 mix-blend-overlay"
          style={{ background: glare }}
        />

        <div className="absolute left-4 top-4 rounded-full glass px-3 py-1 text-[10px] font-semibold uppercase tracking-wider">
          {p.tag}
        </div>

        <div className="absolute right-4 top-4 flex h-10 w-10 -translate-y-2 items-center justify-center rounded-full bg-primary text-primary-foreground opacity-0 shadow-[0_8px_30px_oklch(0.68_0.235_38/0.55)] transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight className="h-5 w-5" />
        </div>

        <div className="absolute inset-x-4 bottom-4 flex translate-y-3 items-center justify-between gap-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <div className="inline-flex items-center gap-2 rounded-full bg-background/70 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-foreground backdrop-blur-md">
            <Eye className="h-3.5 w-3.5 text-primary" />
            Ver case
          </div>
          <div className="rounded-full bg-primary/15 px-3 py-1.5 text-[11px] font-semibold text-primary backdrop-blur-md">
            {p.kpi}
          </div>
        </div>
      </div>

      <div className="relative p-5" style={{ transform: "translateZ(20px)" }}>
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{p.category}</div>
        <h3 className="mt-1 font-display text-xl font-bold transition-colors duration-300 group-hover:text-primary">
          {p.title}
        </h3>
        <div className="mt-3 flex items-center gap-2 text-sm font-semibold text-primary">
          <span className="h-px w-6 bg-primary transition-all duration-500 group-hover:w-12" />
          {p.kpi}
        </div>
      </div>
    </motion.button>
  );
}

export function Projects() {
  const [active, setActive] = useState<(typeof filters)[number]>("Todos");
  const [modal, setModal] = useState<Project | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);

  const filtered = active === "Todos" ? projects : projects.filter((p) => p.tag === active);
  const carouselProjects = filtered.length > 3 ? [...filtered, ...filtered] : filtered;

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    el.scrollLeft = 0;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || filtered.length <= 3) return;

    let frame = 0;
    let last = performance.now();
    const speed = 0.035;

    const tick = (now: number) => {
      const delta = now - last;
      last = now;

      if (!pausedRef.current) {
        el.scrollLeft += delta * speed;
        const halfway = el.scrollWidth / 2;
        if (el.scrollLeft >= halfway) {
          el.scrollLeft -= halfway;
        }
      }

      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, filtered.length]);

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

        <motion.div
          ref={carouselRef}
          layout
          className="portfolio-carousel -mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-8 [perspective:1400px] md:-mx-10 md:px-10 lg:-mx-16 lg:px-16"
          onMouseEnter={() => {
            pausedRef.current = true;
          }}
          onMouseLeave={() => {
            pausedRef.current = false;
          }}
          onFocus={() => {
            pausedRef.current = true;
          }}
          onBlur={() => {
            pausedRef.current = false;
          }}
        >
          <AnimatePresence mode="popLayout">
            {carouselProjects.map((p, idx) => (
              <ProjectCard key={`${p.id}-${idx}`} project={p} idx={idx} onOpen={() => setModal(p)} />
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
              {modal.image ? (
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={modal.image} alt={modal.title} className="w-full h-full object-cover" />
                </div>
              ) : (
                <div className="flex aspect-[16/9] items-center justify-center bg-surface-elevated">
                  <div className="flex flex-col items-center gap-4 text-center">
                    <div className="flex h-24 w-24 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 text-primary">
                      <FileText className="h-12 w-12" />
                    </div>
                    <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                      Documento PDF
                    </span>
                  </div>
                </div>
              )}
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
                {modal.file && (
                  <a
                    href={modal.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 ml-3 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold transition hover:opacity-90"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                    Abrir arquivo
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
