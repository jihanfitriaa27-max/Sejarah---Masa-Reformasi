import { motion } from "framer-motion";
import SpotlightCard from "./SpotlightCard"; // Mengimpor komponen spotlight agar siap pakai

export function Kesimpulan() {
  return (
    <div className="relative py-8 px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-black/20 blur-[120px]" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-display uppercase tracking-tight text-white mb-8">
            Era Reformasi Indonesia
          </h2>

          {/* Mengubah div biasa menjadi SpotlightCard dengan warna sorot putih seragam */}
          <SpotlightCard className="rounded-2xl px-8 py-10" spotlightColor="rgba(255, 255, 255, 0.12)">
            <p className="text-white/80 text-base md:text-lg leading-relaxed">
              Era Reformasi Indonesia membawa perubahan besar dalam sistem pemerintahan Indonesia
              melalui amandemen UUD 1945. Salah satu perubahan terpenting adalah{" "}
              <span className="text-white font-semibold">
                pembatasan masa jabatan presiden menjadi maksimal dua periode
              </span>{" "}
              agar demokrasi berjalan lebih baik dan kekuasaan tidak disalahgunakan.
            </p>
          </SpotlightCard>

          <div className="mt-12 flex items-center justify-center gap-3">
            <div className="w-12 h-px bg-white/20" />
            <span className="text-white/30 text-xs tracking-widest uppercase">1998 – 2002</span>
            <div className="w-12 h-px bg-white/20" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}