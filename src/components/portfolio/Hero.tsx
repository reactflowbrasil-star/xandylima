import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Code2,
  Layers3,
  MapPin,
  MessageCircle,
  Sparkles,
  Zap,
} from "lucide-react";
import heroBgAsset from "@/assets/hero-portrait-bg-v2.png.asset.json";

const heroBg = heroBgAsset.url;

const WHATSAPP =
  "https://wa.me/5562981321845?text=Ol%C3%A1%20Alexandre%2C%20vim%20pelo%20seu%20portf%C3%B3lio!";

const PHRASES = [
  "experiências digitais",
  "interfaces memoráveis",
  "produtos com alma",
  "apps que encantam",
  "agentes de IA humanos",
];

const HERO_STATS = [
  { value: "30+", label: "anos em tecnologia" },
  { value: "100+", label: "projetos entregues" },
  { value: "GO", label: "Goiânia · remoto" },
];

const SPECIALTIES = [
  { icon: Layers3, label: "UX/UI estratégico" },
  { icon: Code2, label: "Full-Stack sênior" },
  { icon: Zap, label: "IA aplicada" },
];

function Typewriter({
  phrases,
  typeSpeed = 65,
  deleteSpeed = 32,
  holdMs = 1800,
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
  const [phase, setPhase] = useState<"idle" | "typing" | "deleting">("idle");

  // Longest phrase reserves the line width so layout never shifts
  const longest = phrases.reduce((a, b) => (a.length >= b.length ? a : b));

  useEffect(() => {
    const t = setTimeout(() => setPhase("typing"), startDelay);
    return () => clearTimeout(t);
  }, [startDelay]);

  useEffect(() => {
    const current = phrases[index];
    let t: ReturnType<typeof setTimeout> | undefined;

    if (phase === "typing") {
      if (out.length < current.length) {
        const jitter = Math.random() * 40 - 10;
        t = setTimeout(() => setOut(current.slice(0, out.length + 1)), typeSpeed + jitter);
      } else {
        t = setTimeout(() => setPhase("deleting"), holdMs);
      }
    }

    if (phase === "deleting") {
      if (out.length > 0) {
        t = setTimeout(() => setOut(current.slice(0, out.length - 1)), deleteSpeed);
      } else {
        setIndex((i) => (i + 1) % phrases.length);
        setPhase("typing");
      }
    }

    return () => {
      if (t) clearTimeout(t);
    };
  }, [phase, out, index, phrases, typeSpeed, deleteSpeed, holdMs]);

  return (
    <span className="relative inline-block align-baseline">
      {/* invisible sizer keeps the line width stable to prevent layout shift */}
      <span aria-hidden className="invisible whitespace-pre">{longest}</span>
      <span className="absolute inset-0 flex items-baseline whitespace-pre">
        <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-[length:200%_100%] bg-clip-text text-transparent animate-[shimmer_4s_linear_infinite] drop-shadow-[0_0_28px_oklch(0.68_0.235_38/0.45)]">
          {out}
        </span>
        <span className="ml-1 inline-block h-[0.85em] w-[3px] rounded-sm bg-primary align-[-0.1em] shadow-[0_0_14px_oklch(0.68_0.235_38/0.9)] animate-pulse md:w-[4px]" />
      </span>
    </span>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden bg-background pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-32 lg:pt-36"
    >
      {/* Portrait background — locked, no transforms */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          draggable={false}
          className="absolute inset-0 h-full w-full select-none object-cover object-[72%_top] opacity-90 [transform:translateZ(0)] [backface-visibility:hidden] [will-change:auto]"
        />
      </div>

      {/* Cinematic overlays */}
      <div
        className="absolute inset-x-0 top-0 z-[1] h-[280px] sm:h-[360px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top right, oklch(0.68 0.235 38 / 0.32), transparent 58%), radial-gradient(ellipse at top left, oklch(0.68 0.235 38 / 0.12), transparent 48%)",
        }}
      />
      <div className="absolute inset-0 z-[2] pointer-events-none bg-gradient-to-r from-background via-background/82 to-background/10" />
      <div className="absolute inset-0 z-[3] pointer-events-none bg-gradient-to-b from-background/35 via-background/10 to-background" />
      <div className="absolute inset-y-0 left-0 z-[4] w-[88%] pointer-events-none bg-gradient-to-r from-background via-background/92 to-transparent md:w-[58%]" />
      <div className="absolute bottom-0 left-0 right-0 z-[5] h-36 sm:h-48 pointer-events-none bg-gradient-to-t from-background to-transparent" />

      {/* Ambient lights */}
      <div className="absolute -left-36 top-1/4 z-[6] h-[320px] w-[320px] sm:h-[520px] sm:w-[520px] rounded-full bg-primary/20 blur-[110px] sm:blur-[130px] animate-pulse-glow pointer-events-none" />
      <div className="absolute -right-24 bottom-10 z-[6] h-[220px] w-[220px] sm:h-[360px] sm:w-[360px] rounded-full bg-primary/12 blur-[90px] sm:blur-[110px] pointer-events-none" />

      <div className="container-max relative z-10 grid min-h-[calc(100vh-7rem)] sm:min-h-[calc(100vh-9rem)] w-full items-center gap-10 px-5 sm:px-6 md:px-10 lg:grid-cols-[1.08fr_0.92fr] lg:px-16">
        <div className="w-full max-w-full lg:max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-background/45 px-3 py-2 shadow-card backdrop-blur-xl sm:mb-7 sm:gap-3 sm:px-4 sm:py-2.5"
          >
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
            </span>
            <span className="truncate text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground/80 sm:text-[11px] sm:tracking-[0.22em]">
              Disponível para novos projetos
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08 }}
            className="font-display text-[clamp(2.1rem,9.2vw,3.3rem)] font-black leading-[0.98] tracking-[-0.05em] text-foreground [word-break:break-word] [overflow-wrap:anywhere] sm:text-6xl sm:leading-[0.95] sm:tracking-[-0.06em] md:text-7xl lg:text-[6.2rem] xl:text-[6.7rem]"
          >
            Criando
            <br />
            <Typewriter phrases={PHRASES} startDelay={520} typeSpeed={58} />
            <br />
            <span className="text-foreground/95">que conectam</span>
            <br />
            pessoas e tecnologia.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.25 }}
            className="mt-6 max-w-full text-[0.95rem] leading-relaxed text-muted-foreground sm:mt-8 sm:max-w-2xl sm:text-base md:text-xl"
          >
            Sou <span className="font-semibold text-foreground">Alexandre de Lima Cardoso</span> —
            Desenvolvedor Full-Stack Sênior e UX/UI Designer. Transformo ideias em landing pages,
            apps, interfaces, automações e experiências digitais com design premium, performance e IA.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.38 }}
            className="mt-7 flex w-full flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center"
          >
            <a href="#projetos" className="btn-primary group min-h-14 w-full justify-center px-6 text-sm sm:w-auto sm:px-8 sm:text-base">
              Ver meus projetos
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost group min-h-14 w-full justify-center px-6 text-sm sm:w-auto sm:px-8 sm:text-base"
            >
              <MessageCircle className="h-5 w-5" />
              Conversar agora
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.52 }}
            className="mt-8 grid w-full max-w-full grid-cols-3 overflow-hidden rounded-2xl border border-white/10 bg-background/35 backdrop-blur-xl sm:mt-10 sm:max-w-2xl sm:rounded-3xl"
          >
            {HERO_STATS.map((item, index) => (
              <div key={item.label} className={`p-3 sm:p-4 ${index > 0 ? "border-l border-white/10" : ""}`}>
                <div className="font-display text-xl font-black leading-tight text-foreground sm:text-2xl md:text-3xl">
                  {item.value}
                </div>
                <div className="mt-1 text-[9px] font-semibold uppercase tracking-[0.12em] leading-snug text-muted-foreground sm:text-[10px] sm:tracking-[0.16em] md:text-xs">
                  {item.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.aside
          initial={{ opacity: 0, x: 24, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.42 }}
          className="relative hidden min-h-[560px] lg:block"
        >
          <div className="absolute right-0 top-10 w-[330px] rounded-[2rem] border border-white/10 bg-background/35 p-5 shadow-elegant backdrop-blur-2xl">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Especialidade</div>
                <div className="font-display text-lg font-bold">Design · Código · IA</div>
              </div>
            </div>

            <div className="space-y-3">
              {SPECIALTIES.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-semibold text-foreground/90">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute bottom-16 right-20 rounded-3xl border border-white/10 bg-background/45 p-4 shadow-card backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                <MapPin className="h-4 w-4" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Atendimento</div>
                <div className="font-display font-bold text-foreground">Goiânia · Brasil</div>
              </div>
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
