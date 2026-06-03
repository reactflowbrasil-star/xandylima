import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/5562981321845?text=Ol%C3%A1%20Alexandre%2C%20vim%20pelo%20portf%C3%B3lio!"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-4 rounded-full bg-gradient-to-r from-primary to-primary-glow text-primary-foreground shadow-[0_10px_40px_-5px_rgba(255,77,0,0.6)] font-semibold text-sm hover:scale-105 transition-transform"
    >
      <span className="relative flex">
        <span className="absolute inline-flex h-full w-full rounded-full bg-white/40 opacity-75 animate-ping" />
        <MessageCircle className="w-5 h-5 relative" />
      </span>
      <span className="hidden sm:inline">Conversar agora</span>
    </a>
  );
}
