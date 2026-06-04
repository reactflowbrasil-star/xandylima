import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import portraitAsset from "@/assets/alexandre-portrait.png.asset.json";
import heroBgAsset from "@/assets/hero-portrait-bg.png.asset.json";

const portrait = portraitAsset.url;
const heroBg = heroBgAsset.url;

const WHATSAPP = "https://wa.me/5562981321845?text=Ol%C3%A1%20Alexandre%2C%20vim%20pelo%20seu%20portf%C3%B3lio!";

const PHRASES = [
  "experiências digitais",
  "interfaces memoráveis",
  "produtos com alma",
  "apps que encantam",
  "agentes de IA humanos",
];

function Typewriter({
  phrases,
  typeSpeed = 70,
  deleteSpeed = 35,
  holdMs = 1600,
  startDelay = 500,
}: {
  phrases: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  holdMs?: number;
  startDelay?: number;
}) {
  const [index, setIndex] = useState(0);
  const [out, setOut] = useState("");
  const [phase, setPhase] = useState<"idle" | "typing" | "holding" | "deleting">("idle");

  useEffect(() => {
    const t = setTimeout(() => setPhase("typing"), startDelay);
    return () => clearTimeout(t);
  }, [startDelay]);

  useEffect(() => {
    const current = phrases[index];
    let t: ReturnType<typeof setTimeout>;
    if (phase === "typing") {
      if (out.length < current.length) {
        t = setTimeout(() => setOut(current.slice(0, out.length + 1)), typeSpeed);
      } else {
        t = setTimeout(() => setPhase("deleting"), holdMs);
      }
    } else if (phase === "deleting") {
      if (out.length > 0) {
        t = setTimeout(() => setOut(current.slice(0, out.length - 1)), deleteSpeed);
      } else {
        setIndex((i) => (i + 1) % phrases.length);
        setPhase("typing");
      }
    }
    return () => clearTimeout(t!);
  }, [phase, out, index, phrases, typeSpeed, deleteSpeed, holdMs]);

  return (
    <span className="text-gradient-primary inline-block min-h-[1.1em]">
      {out || "\u00A0"}
      <span
        className="inline-block w-[3px] md:w-[4px] h-[0.85em] align-[-0.1em] ml-1 bg-primary animate-pulse"
        aria-hidden
      />
    </span>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16">
      {/* Right-side portrait background */}
      <div
        className="absolute inset-y-0 right-0 w-full md:w-[65%] lg:w-[55%] -z-10 bg-no-repeat bg-cover bg-right opacity-90"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Left-to-right fade so text stays readable */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/85 md:via-background/70 to-transparent" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-transparent to-background/40" />

      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px] animate-pulse-glow -z-10" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[100px] -z-10" />

      <div className="container-max w-full px-6 md:px-10 lg:px-16 grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="text-xs font-medium tracking-wide">Disponível para novos projetos</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight"
          >
            Criando<br />
            <Typewriter text="experiências digitais" delay={600} speed={65} /><br />
            que conectam pessoas e tecnologia.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            Sou <span className="text-foreground font-medium">Alexandre de Lima Cardoso</span> — Desenvolvedor Full-Stack Sênior especialista em UX/UI Design, aplicativos Android e agentes de IA humanizados. +30 anos transformando ideias em produtos digitais que importam.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a href="#projetos" className="btn-primary group">
              Ver meus projetos
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-ghost group">
              <MessageCircle className="w-4 h-4" />
              Conversar agora
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-12 flex items-center gap-8 text-xs text-muted-foreground"
          >
            <div>
              <div className="font-display font-bold text-2xl text-foreground">30+</div>
              <div className="uppercase tracking-wider mt-1">anos em tech</div>
            </div>
            <div className="w-px h-10 bg-border" />
            <div>
              <div className="font-display font-bold text-2xl text-foreground">100+</div>
              <div className="uppercase tracking-wider mt-1">projetos entregues</div>
            </div>
            <div className="w-px h-10 bg-border hidden sm:block" />
            <div className="hidden sm:block">
              <div className="font-display font-bold text-2xl text-foreground">Goiânia</div>
              <div className="uppercase tracking-wider mt-1">GO · Remoto</div>
            </div>
          </motion.div>
        </div>

        {/* Portrait card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative mx-auto lg:ml-auto w-full max-w-md"
        >
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-primary/40 via-primary/10 to-transparent blur-2xl" />
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-border grain">
            <img
              src={portrait}
              alt="Retrato de Alexandre de Lima Cardoso"
              width={1024}
              height={1280}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 glass rounded-2xl p-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Especialidade</div>
                <div className="text-sm font-semibold">UX/UI · Mobile · IA</div>
              </div>
            </div>
          </div>
          <div className="absolute -top-6 -right-2 lg:-right-6 glass rounded-2xl p-3 px-4 animate-float">
            <div className="text-xs text-muted-foreground">Webflow Certified</div>
            <div className="text-sm font-display font-bold text-primary">Senior Designer</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
