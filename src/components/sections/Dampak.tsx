import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut" as const,
    },
  }),
};

const dampak = [
  {
    icon: "🔄",
    title: "Pergantian Pemimpin Lebih Demokratis",
    desc: "Dengan adanya batas jabatan, kepemimpinan negara dapat berganti secara teratur melalui pemilu.",
  },
  {
    icon: "⚖️",
    title: "Mencegah Kekuasaan Terlalu Lama",
    desc: "Pembatasan jabatan membantu mencegah presiden berkuasa terlalu lama yang dapat menyebabkan penyalahgunaan kekuasaan.",
  },
  {
    icon: "📢",
    title: "Pemerintahan Lebih Terbuka",
    desc: "Karena kekuasaan dibatasi, pemerintah menjadi lebih diawasi oleh rakyat dan lembaga negara lainnya.",
  },
];

const bigNumbers = [
  { number: "2", label: "Periode Maksimal" },
  { number: "5", label: "Tahun per Periode" },
  { number: "10", label: "Total Tahun Maksimal Menjabat" },
];

export function Dampak() {
  return (
    <div className="relative py-8 px-4 sm:px-6 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-black/20 blur-[120px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0}
          variants={fadeUp}
        >
          <h2 className="text-4xl md:text-5xl font-display uppercase tracking-tight text-white">
            Dampak
          </h2>

          <div className="mt-4 mx-auto w-16 h-[2px] bg-gradient-to-r from-transparent via-white/50 to-transparent" />
        </motion.div>

        {/* Sub-judul: Pembatasan Masa Jabatan */}
        <motion.div
          className="text-center mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={0}
          variants={fadeUp}
        >
          <h3 className="text-sm font-bold text-white uppercase tracking-widest">
            Pembatasan Masa Jabatan
          </h3>
        </motion.div>

        {/* Box Besar Gabungan Dampak */}
        <motion.div 
          className="glass-panel rounded-2xl p-8 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={1}
          variants={fadeUp}
        >
          {/* Grid internal dengan pembatas garis dan set seimbang di kiri kanan (px-4 md:px-6) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-y-0 md:divide-x md:divide-white/10 text-center">
            {dampak.map((item, i) => (
              <div 
                key={item.title} 
                className="group flex flex-col items-center justify-start px-4 md:px-6 transition-all duration-300"
              >
                <span className="text-3xl block mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </span>

                <h4 className="text-white font-bold text-sm mb-3 uppercase tracking-wide max-w-[200px]">
                  {item.title}
                </h4>

                <p className="text-white/80 text-base leading-relaxed max-w-[260px] md:max-w-none">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Big Numbers */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 mb-16">
          {bigNumbers.map((item, i) => (
            <motion.div
              key={item.label}
              className="text-center glass-panel rounded-2xl py-10 px-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={i + 1}
              variants={fadeUp}
              whileHover={{ scale: 1.04 }}
            >
              <span
                className="block font-display text-white leading-none"
                style={{
                  fontSize: "clamp(3.5rem, 10vw, 6rem)",
                  textShadow: "0 0 40px rgba(255,255,255,0.2)",
                }}
              >
                {item.number}
              </span>

              <span className="block text-white/50 text-xs md:text-sm uppercase tracking-widest mt-3 font-medium">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* List Perubahan Lain */}
          <motion.div
            className="glass-panel rounded-2xl p-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={1}
            variants={fadeUp}
          >
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-6">
              Perubahan Penting Lain
            </h3>

            <div className="overflow-hidden">
              <div className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth">
                {[
                  {
                    title: "Presiden dipilih langsung oleh rakyat",
                    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=1200&auto=format&fit=crop",
                  },
                  {
                    title: "Dibentuk Mahkamah Konstitusi (MK)",
                    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop",
                  },
                  {
                    title: "Dibentuk Komisi Yudisial (KY)",
                    image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1200&auto=format&fit=crop",
                  },
                  {
                    title: "Otonomi daerah diperluas",
                    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
                  },
                  {
                    title: "Kebebasan pers meningkat",
                    image: "https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=1200&auto=format&fit=crop",
                  },
                ].map((item, i) => (
                  <div key={i} className="min-w-full snap-center px-2">
                    <div className="glass-panel rounded-2xl overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-40 object-cover"
                      />
                      <div className="p-5 text-white text-sm">
                        {item.title}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Video Section */}
          <motion.div
            className="glass-panel rounded-2xl overflow-hidden flex flex-col"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={2}
            variants={fadeUp}
          >
            <div className="px-8 pt-8 pb-4">
              <h3 className="text-sm font-bold text-white/60 uppercase tracking-widest">
                Sejarah Era Reformasi Indonesia
              </h3>
            </div>

            <div className="relative flex-1 min-h-[220px] bg-black/30">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/OD2Sy-ExXEk"
                title="Video Dokumenter Era Reformasi"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}