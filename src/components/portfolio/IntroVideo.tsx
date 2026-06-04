import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import introAsset from "@/assets/intro.mp4.asset.json";

const STORAGE_KEY = "intro-played-v1";

export function IntroVideo() {
  const [show, setShow] = useState(false);
  const [mounted, setMounted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setMounted(true);
    if (typeof window === "undefined") return;
    const played = sessionStorage.getItem(STORAGE_KEY);
    if (!played) {
      setShow(true);
      document.body.style.overflow = "hidden";
    }
  }, []);

  const finish = () => {
    sessionStorage.setItem(STORAGE_KEY, "1");
    document.body.style.overflow = "";
    setShow(false);
  };

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
        >
          <video
            ref={videoRef}
            src={introAsset.url}
            autoPlay
            muted
            playsInline
            onEnded={finish}
            className="w-full h-full object-cover"
          />
          <button
            onClick={finish}
            className="absolute bottom-6 right-6 px-4 py-2 rounded-full glass text-xs uppercase tracking-wider hover:text-primary transition"
          >
            Pular intro
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
