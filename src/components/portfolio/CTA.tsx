import { MessageCircle, Mail, MapPin, Phone, AtSign as Instagram, ArrowRight } from "lucide-react";

const WHATSAPP = "https://wa.me/5562981321845?text=Ol%C3%A1%20Alexandre%2C%20quero%20conversar%20sobre%20um%20projeto.";

export function CTA() {
  return (
    <section id="contato" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background to-surface" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-primary/15 blur-[150px] -z-10" />

      <div className="container-max">
        <div className="text-center max-w-3xl mx-auto">
          <span className="eyebrow">Vamos conversar</span>
          <h2 className="mt-5 font-display font-bold text-4xl md:text-6xl leading-[1.05] tracking-tight">
            Pronto para <span className="text-gradient-primary">elevar</span> seu produto digital?
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Conte rapidamente sobre seu projeto. Respondo em até 24h, geralmente no mesmo dia.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-primary group">
              <MessageCircle className="w-4 h-4" />
              Falar no WhatsApp agora
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="mailto:contato@alexandrelima.dev" className="btn-ghost">
              <Mail className="w-4 h-4" />
              Enviar e-mail
            </a>
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-4">
          {[
            { icon: Phone, label: "WhatsApp", value: "(62) 98132-1845", href: WHATSAPP },
            { icon: MapPin, label: "Localização", value: "Goiânia · GO · Brasil", href: "#" },
            { icon: Instagram, label: "Instagram", value: "@react.fly", href: "https://instagram.com/react.fly" },
          ].map((c, i) => (
            <a
              key={i}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-border bg-surface p-6 hover:border-primary transition-all hover:-translate-y-1 group"
            >
              <c.icon className="w-6 h-6 text-primary mb-4" />
              <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
              <div className="mt-1 font-display font-semibold text-lg group-hover:text-primary transition-colors">{c.value}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
