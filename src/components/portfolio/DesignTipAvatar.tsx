import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const BASE_PHOTO_URL = "https://growmoneydigital.com.br/alexandre/FOTO_BASE.png";

const tips = [
  "Mostre uma promessa clara: sua marca deve dizer rapido o que resolve e para quem.",
  "Use a mesma voz em todos os canais para criar memoria e reconhecimento.",
  "Transforme provas reais em conteudo: resultados, bastidores e depoimentos vendem confianca.",
  "Escolha uma cor de destaque e use com disciplina para guiar a acao principal.",
  "Uma marca cresce mais rapido quando repete uma ideia forte de formas diferentes.",
  "Revise sua bio, capa e primeira dobra: elas precisam explicar valor em poucos segundos.",
  "Antes de postar mais, organize a mensagem central que voce quer fixar na mente do cliente.",
  "Um bom posicionamento troca frases genericas por uma diferenca facil de lembrar.",
];

const FIRST_APPEAR_DELAY = 2_000;
const APPEAR_INTERVAL = 5 * 60 * 1_000;
const VISIBLE_TIME = 12_000;

export function DesignTipAvatar() {
  const [visible, setVisible] = useState(false);
  const [tipIndex, setTipIndex] = useState(0);
  const timers = useRef<number[]>([]);

  useEffect(() => {
    const clearTimers = () => {
      timers.current.forEach((timer) => window.clearTimeout(timer));
      timers.current = [];
    };

    const showTip = () => {
      setVisible(true);

      timers.current.push(
        window.setTimeout(() => {
          setVisible(false);
          setTipIndex((current) => {
            const next = Math.floor(Math.random() * tips.length);
            return next === current ? (next + 1) % tips.length : next;
          });
        }, VISIBLE_TIME)
      );

      timers.current.push(window.setTimeout(showTip, APPEAR_INTERVAL));
    };

    timers.current.push(window.setTimeout(showTip, FIRST_APPEAR_DELAY));
    return clearTimers;
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <>
          <motion.div
            aria-hidden
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="pointer-events-none fixed inset-0 z-40 bg-black"
          />

          <motion.aside
            aria-live="polite"
            initial={{ x: "-50%" }}
            animate={{ x: "-50%" }}
            exit={{ x: "-50%" }}
            className="pointer-events-none fixed bottom-0 left-1/2 z-50 flex max-w-[calc(100vw-2rem)] flex-col items-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.35, delay: 0.12 }}
              className="relative mb-2 max-w-[290px] rounded-2xl border border-primary/40 bg-primary px-4 py-3 text-center text-sm font-semibold leading-snug text-primary-foreground shadow-[0_16px_40px_-14px_oklch(0.68_0.235_38/0.9)]"
            >
              <span className="absolute -bottom-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 border-b border-r border-primary/40 bg-primary" />
              <span className="relative block text-[10px] font-bold uppercase tracking-wider text-white">
                Dicas do dia!
              </span>
              <span className="relative mt-1 block">{tips[tipIndex]}</span>
            </motion.div>

            <motion.img
              src={BASE_PHOTO_URL}
              alt="Alexandre Lima"
              initial={{ opacity: 0, y: 120 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 120 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="h-24 w-auto object-contain drop-shadow-[0_12px_28px_oklch(0_0_0/0.55)] sm:h-32"
              loading="lazy"
              decoding="async"
            />
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
