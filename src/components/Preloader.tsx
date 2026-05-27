import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(true);

  const rawValue = useMotionValue(0);
  const smooth = useSpring(rawValue, { stiffness: 50, damping: 18, mass: 0.8 });

  // Angka display dari spring
  const [displayNum, setDisplayNum] = useState(0);

  // Width loading bar dari spring (0 → "100%")
  const barWidth = useTransform(smooth, [0, 100], ["0%", "100%"]);

  const handleComplete = useCallback(() => {
    setTimeout(() => setShow(false), 400);
    setTimeout(onComplete, 1200);
  }, [onComplete]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          handleComplete();
          return 100;
        }
        return prev + 1;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [handleComplete]);

  useEffect(() => {
    rawValue.set(progress);
  }, [progress, rawValue]);

  useEffect(() => {
    const unsubscribe = smooth.on("change", (v) => {
      setDisplayNum(Math.round(v));
    });
    return unsubscribe;
  }, [smooth]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{
            background:
              "radial-gradient(ellipse at 50% 40%, #6b0f0f 0%, #3d0808 40%, #1a0304 80%, #0a0101 100%)",
          }}
        >
          {/* Angka */}
          <span
            className="text-white font-bold tabular-nums select-none"
            style={{
              fontSize: "clamp(3.5rem, 10vw, 7rem)",
              lineHeight: 1,
              letterSpacing: "-0.03em",
              textShadow: "0 0 40px rgba(205,22,28,0.45)",
            }}
          >
            {displayNum}
          </span>

          {/* Loading bar — digerakkan spring yang sama */}
          <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/10">
            <motion.div
              className="h-full rounded-full"
              style={{
                width: barWidth,
                background: "linear-gradient(90deg, #8b0000, #cd161c, #ff4444)",
                boxShadow: "0 0 10px rgba(205,22,28,0.7)",
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
