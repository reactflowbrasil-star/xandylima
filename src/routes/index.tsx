import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { Marquee } from "@/components/portfolio/Marquee";
import { About } from "@/components/portfolio/About";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Skills } from "@/components/portfolio/Skills";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { FAQ } from "@/components/portfolio/FAQ";
import { CTA } from "@/components/portfolio/CTA";
import { Footer } from "@/components/portfolio/Footer";
import { FloatingWhatsApp } from "@/components/portfolio/FloatingWhatsApp";
import { IntroVideo } from "@/components/portfolio/IntroVideo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alexandre de Lima Cardoso · UX/UI Designer & Full-Stack Sênior" },
      { name: "description", content: "Portfólio de Alexandre de Lima Cardoso — UX/UI Designer e Desenvolvedor Full-Stack Sênior especializado em interfaces, apps Android e agentes de IA humanizados." },
      { property: "og:title", content: "Alexandre de Lima Cardoso · Portfólio" },
      { property: "og:description", content: "Criando experiências digitais que conectam pessoas e tecnologia. UX/UI, Mobile e IA." },
      { property: "og:type", content: "website" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Alexandre de Lima Cardoso",
          jobTitle: "UX/UI Designer & Full-Stack Senior Developer",
          address: { "@type": "PostalAddress", addressLocality: "Goiânia", addressRegion: "GO", addressCountry: "BR" },
          telephone: "+5562981321845",
          sameAs: ["https://instagram.com/react.fly"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
