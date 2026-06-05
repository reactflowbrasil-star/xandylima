import { motion } from "framer-motion";
import { Heart, Code2, Users, Brain } from "lucide-react";
import aboutPhotoAsset from "@/assets/alexandre-about.png.asset.json";

const aboutPhoto = aboutPhotoAsset.url;

const stats = [
  { icon: Code2, value: "30+", label: "Anos estudando tecnologia" },
  { icon: Users, value: "100+", label: "Projetos entregues" },
  { icon: Heart, value: "4", label: "Filhos · família primeiro" },
  { icon: Brain, value: "IA", label: "Agentes humanizados" },
];

export function About() {
  return (
    <section id="sobre" className="section-padding relative">
      <div className="container-max grid lg:grid-cols-[1fr_1.3fr] gap-16">
        <div>
          <span className="eyebrow">Sobre mim</span>
          <h2 className="mt-4 font-display font-bold text-4xl md:text-5xl leading-tight">
            Soluções centradas no <span className="text-gradient-primary">usuário</span>, construídas com técnica e alma.
          </h2>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-6 text-muted-foreground leading-relaxed text-lg"
        >
          <p>
            Sou <span className="text-foreground font-medium">Alexandre de Lima Cardoso</span>, de Goiânia–GO. Há mais de três décadas mergulhado em tecnologia, atuo como UX/UI Designer e Desenvolvedor Full-Stack Sênior, com forte foco em interfaces intuitivas, aplicativos Android e agentes de IA conversacional.
          </p>
          <p>
            Acredito que produto bom é aquele que <span className="text-foreground">resolve um problema real sem o usuário perceber o esforço por trás</span>. Combino pesquisa, design system, código e automação para entregar experiências que conectam — e convertem.
          </p>
          <p>
            Fora das telas, sou pai de quatro filhos — minha maior escola de empatia, paciência e propósito.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-6">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-border bg-surface p-5"
              >
                <s.icon className="w-5 h-5 text-primary mb-3" />
                <div className="font-display font-bold text-2xl text-foreground">{s.value}</div>
                <div className="text-xs uppercase tracking-wider mt-1">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
