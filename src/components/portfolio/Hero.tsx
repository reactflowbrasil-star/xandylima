import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";

const heroBg = "data:image/webp;base64,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";

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
    <section id="home" className="relative isolate min-h-screen flex items-center overflow-hidden bg-background pt-28 pb-16">
      {/* Full hero background matching the supplied reference */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-right-top opacity-100"
        />
      </div>

      {/* Readability overlays */}
      <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-r from-background/90 via-background/56 md:via-background/42 to-transparent" />
      <div className="absolute inset-0 z-[2] pointer-events-none bg-gradient-to-b from-transparent via-transparent to-background" />
      <div className="absolute inset-x-0 bottom-0 z-[3] h-48 pointer-events-none bg-gradient-to-t from-background to-transparent" />

      <div className="absolute top-1/4 -left-32 z-[4] w-[500px] h-[500px] rounded-full bg-primary/16 blur-[120px] animate-pulse-glow pointer-events-none" />
      <div className="absolute bottom-0 right-0 z-[4] w-[400px] h-[400px] rounded-full bg-primary/10 blur-[100px] pointer-events-none" />

      <div className="container-max relative z-10 w-full px-6 md:px-10 lg:px-16 grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center">

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
            <Typewriter phrases={PHRASES} startDelay={600} typeSpeed={65} /><br />
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

        {/* Floating badges over the portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="relative hidden lg:block h-[480px]"
        >
          <div className="absolute top-8 right-0 glass rounded-2xl p-4 flex items-center gap-3 animate-float">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Especialidade</div>
              <div className="text-sm font-semibold">UX/UI · Mobile · IA</div>
            </div>
          </div>
          <div className="absolute bottom-8 right-6 glass rounded-2xl p-3 px-4">
            <div className="text-xs text-muted-foreground">Webflow Certified</div>
            <div className="text-sm font-display font-bold text-primary">Senior Designer</div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
