import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#sobre", label: "Sobre" },
  { href: "#projetos", label: "Projetos" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#contato", label: "Contato" },
];

const LOGO_URL = "https://growmoneydigital.com.br/alexandre/logo.png";
const WHATSAPP = "https://wa.me/5562981321845?text=Ol%C3%A1%20Alexandre%2C%20vim%20pelo%20seu%20portf%C3%B3lio!";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`container-max mx-3 sm:mx-5 md:mx-8 lg:mx-auto flex items-center justify-between rounded-full transition-all duration-500 ${
          scrolled
            ? "glass px-4 py-2.5 shadow-elegant md:px-6"
            : "px-1.5 py-2 md:px-3 md:py-3"
        }`}
      >
        <a
          href="#home"
          className="group flex min-w-0 items-center"
          aria-label="Alexandre Lima - início"
        >
          <img
            src={LOGO_URL}
            alt="Alexandre Lima"
            className={`w-auto object-contain transition-all duration-500 ${
              scrolled
                ? "h-11 max-w-[300px] sm:h-12 sm:max-w-[390px] md:h-14 md:max-w-[480px] lg:h-16 lg:max-w-[580px]"
                : "h-16 max-w-[360px] sm:h-20 sm:max-w-[500px] md:h-24 md:max-w-[650px] lg:h-28 lg:max-w-[780px] xl:h-32 xl:max-w-[880px]"
            }`}
            loading="eager"
            decoding="async"
          />
        </a>

        <nav className="hidden xl:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex btn-primary !py-2.5 !px-5 text-xs"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
          <button
            onClick={() => setOpen((s) => !s)}
            className="xl:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background/35 backdrop-blur-xl"
            aria-label="Menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="xl:hidden mx-6 mt-3 glass rounded-2xl p-4 animate-fade-in">
          <nav className="flex flex-col">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 px-2 text-sm border-b border-border last:border-0"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-4 w-full"
            >
              <MessageCircle className="w-4 h-4" />
              Falar no WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
