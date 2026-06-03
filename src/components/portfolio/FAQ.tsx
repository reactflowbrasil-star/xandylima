import { useState } from "react";
import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  { q: "Quanto tempo leva um projeto típico?", a: "Depende do escopo — landing pages ficam prontas em 2 a 3 semanas, apps e SaaS variam de 6 a 16 semanas com entregas semanais." },
  { q: "Você faz redesign de produtos existentes?", a: "Sim. Faço auditoria de UX, mapeio fricções e proponho um roadmap incremental ou um redesign completo, sempre com métricas claras." },
  { q: "Trabalha remoto / em outros estados ou países?", a: "100% remoto. Atendo clientes em todo o Brasil e fora do país, com reuniões síncronas e documentação assíncrona." },
  { q: "Você cuida só do design ou também desenvolve?", a: "Cuido das duas pontas. Como Full-Stack Sênior, entrego do Figma ao deploy, ou trabalho integrado ao seu time técnico." },
  { q: "Como funciona o investimento?", a: "Por escopo fechado ou por sprint mensal (fractional). Após uma conversa rápida no WhatsApp, envio proposta detalhada em até 48h." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section-padding">
      <div className="container-max grid lg:grid-cols-[1fr_1.5fr] gap-16">
        <div>
          <span className="eyebrow">FAQ</span>
          <h2 className="mt-4 font-display font-bold text-4xl md:text-5xl leading-tight">
            Dúvidas <span className="text-gradient-primary">frequentes</span>.
          </h2>
          <p className="mt-6 text-muted-foreground">Se a sua pergunta não estiver aqui, chame no WhatsApp — respondo pessoalmente.</p>
        </div>

        <div className="divide-y divide-border border-y border-border">
          {faqs.map((f, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-6 py-6 text-left group"
              >
                <span className="font-display font-semibold text-lg md:text-xl group-hover:text-primary transition-colors">{f.q}</span>
                <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border transition-all ${open === i ? "rotate-45 bg-primary text-primary-foreground border-primary" : ""}`}>
                  <Plus className="w-4 h-4" />
                </span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-muted-foreground leading-relaxed max-w-2xl">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
