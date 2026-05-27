import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/sections/Hero";
import { ReviewSidebar } from "./components/sections/ReviewSidebar";
import { Footer } from "./components/layout/Footer";
import { Preloader } from "./components/Preloader";
import { LatarBelakang } from "./components/sections/LatarBelakang";
import { Amandemen } from "./components/sections/Amandemen";
import { Dampak } from "./components/sections/Dampak";
import { Kesimpulan } from "./components/sections/Kesimpulan";

export type PageId =
  | "beranda"
  | "latar-belakang"
  | "amandemen"
  | "dampak"
  | "kesimpulan";

const pageVariants: Variants = {
  initial: {
    opacity: 0,
    y: 24,
  },

  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },

  exit: {
    opacity: 0,
    y: -16,
    transition: {
      duration: 0.3,
      ease: [0.42, 0, 1, 1],
    },
  },
};

const heroBg =
  "radial-gradient(ellipse at 50% 0%, #6b0f0f 0%, #3d0808 40%, #1a0304 80%, #0a0101 100%)";

function App() {
  const [loading, setLoading] = useState(true);
  const [activePage, setActivePage] = useState<PageId>("beranda");

  const ready = !loading;

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* ====== FIXED NAVBAR ====== */}
      <div className="fixed top-0 left-0 right-0 z-50 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: -80 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          <Navbar
            activePage={activePage}
            onNavigate={setActivePage}
          />
        </motion.div>
      </div>

      {/* ====== PAGES ====== */}
      <AnimatePresence mode="wait">

        {/* ── BERANDA ── */}
        {activePage === "beranda" && (
          <motion.div
            key="beranda"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0"
            style={{
              backgroundImage: "url('/Presiden.png')",
              backgroundSize: "cover",
              backgroundPosition: "center right",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#1a0304]/60 z-[1]" />

            {/* Gradient kiri */}
            <div className="absolute inset-y-0 left-0 w-[55%] bg-gradient-to-r from-[#1a0304]/95 via-[#1a0304]/60 to-transparent pointer-events-none z-[2]" />

            {/* Ambient glow */}
            <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-red-700/15 blur-[120px] pointer-events-none z-[3] animate-hero-glow" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 h-full flex flex-col pt-20 lg:pt-24">
              <main className="grow grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center relative">

                {/* HERO */}
                <motion.div
                  className="lg:col-span-5 flex flex-col justify-center z-20 order-2 lg:order-1"
                  initial={{ opacity: 0, x: -100 }}
                  animate={ready ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.9,
                    delay: 0.3,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                >
                  <Hero />
                </motion.div>

                <div className="lg:col-span-4 order-1 lg:order-2" />

                {/* SIDEBAR */}
                <motion.div
                  className="lg:col-span-3 flex flex-col justify-center z-20 order-3"
                  initial={{ opacity: 0, x: 100 }}
                  animate={ready ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.9,
                    delay: 0.5,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                >
                  <ReviewSidebar />
                </motion.div>
              </main>

              {/* FOOTER */}
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={ready ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.8,
                  delay: 0.7,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                <Footer />
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* ── LATAR BELAKANG ── */}
        {activePage === "latar-belakang" && (
          <motion.div
            key="latar-belakang"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 overflow-y-auto pt-20 lg:pt-24"
            style={{ background: heroBg }}
          >
            <LatarBelakang />
          </motion.div>
        )}

        {/* ── AMANDEMEN ── */}
        {activePage === "amandemen" && (
          <motion.div
            key="amandemen"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 overflow-y-auto pt-20 lg:pt-24"
            style={{ background: heroBg }}
          >
            <Amandemen />
          </motion.div>
        )}

        {/* ── DAMPAK ── */}
        {activePage === "dampak" && (
          <motion.div
            key="dampak"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 overflow-y-auto pt-20 lg:pt-24"
            style={{ background: heroBg }}
          >
            <Dampak />
          </motion.div>
        )}

        {/* ── KESIMPULAN ── */}
        {activePage === "kesimpulan" && (
          <motion.div
            key="kesimpulan"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 overflow-y-auto pt-20 lg:pt-24"
            style={{ background: heroBg }}
          >
            <Kesimpulan />
          </motion.div>
        )}

      </AnimatePresence>
    </>
  );
}

export default App;