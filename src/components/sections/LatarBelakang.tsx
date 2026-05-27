import { motion } from "framer-motion";
import SpotlightCard from "./SpotlightCard";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.5,
      ease: "easeOut" as const,
    },
  }),
};

export function LatarBelakang() {
  return (
    <div className="relative px-4 sm:px-6 py-12">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-black/20 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* ── Bagian 1: muat 1 layar ── */}
        <div className="min-h-[calc(100vh-5rem)] flex flex-col justify-center gap-6 py-2">

          {/* Judul */}
          <motion.div
            className="text-center mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
          >
            <h2 className="text-4xl md:text-5xl font-display uppercase tracking-tight text-white">
              Latar Belakang
            </h2>

            <div className="mt-3 mx-auto w-16 h-[2px] bg-gradient-to-r from-transparent via-white/50 to-transparent" />
          </motion.div>

          {/* Pengertian (Grid 7 Kolom: Teks 4 Kolom, Foto 3 Kolom Sedang) */}
          <div className="grid grid-cols-1 md:grid-cols-7 gap-6 items-stretch">
            {/* Box Teks Pengertian */}
            <motion.div
              className="md:col-span-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeUp}
            >
              <SpotlightCard className="h-full" spotlightColor="rgba(255, 255, 255, 0.12)">
                <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-6">
                  Pengertian Amandemen UUD 1945
                </h3>

                <p className="text-white/80 text-base leading-relaxed text-justify">
                  Amandemen UUD 1945 adalah proses perubahan, perbaikan, atau penyempurnaan terhadap isi Undang-Undang Dasar 1945 yang dilakukan pada masa reformasi tanpa mengganti dasar negara Indonesia, yaitu Pancasila and bentuk Negara Kesatuan Republik Indonesia (NKRI).
                  Amandemen dilakukan karena masyarakat menilai bahwa isi UUD 1945 sebelum reformasi memiliki beberapa kelemahan, terutama dalam pengaturan kekuasaan presiden. Pada masa sebelum reformasi, presiden memiliki kekuasaan yang sangat besar dan pengawasan terhadap government masih lemah. Selain itu, banyak aturan dalam UUD 1945 yang dianggap terlalu singkat dan belum menjelaskan secara rinci tentang demokrasi, hak asasi manusia, dan pembagian kekuasaan antar lembaga negara.
                  Oleh karena itu, setelah jatuhnya pemerintahan Soeharto pada tahun 1998, dilakukan reformasi besar dalam sistem ketatanegaraan Indonesia melalui amandemen UUD 1945.
                </p>
              </SpotlightCard>
            </motion.div>

            {/* Box Foto Reformasi (Card Sedang, Spotlight Putih, Gambar Full) */}
            <motion.div
              className="md:col-span-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1.5}
              variants={fadeUp}
            >
              <SpotlightCard 
                className="w-full h-full min-h-[300px] !p-0 flex items-center justify-center bg-zinc-900 overflow-hidden" 
                spotlightColor="rgba(255, 255, 255, 0.15)"
              >
                <img 
                  src="/reformasi.png" 
                  alt="Aksi Mahasiswa Reformasi 1998" 
                  className="w-full h-full object-cover rounded-3xl"
                />
              </SpotlightCard>
            </motion.div>
          </div>

          {/* Latar Belakang */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            variants={fadeUp}
          >
            <SpotlightCard spotlightColor="rgba(255, 255, 255, 0.12)">
              <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-6">
                Latar Belakang
              </h3>

              <div className="space-y-4">
                <p className="text-white/80 text-base leading-relaxed text-justify">
                  Era Reformasi Indonesia dimulai setelah berakhirnya pemerintahan Soeharto pada tahun 1998 akibat berbagai permasalahan yang terjadi pada masa sebelumnya, seperti krisis ekonomi 1997–1998, meningkatnya pengangguran, naiknya harga kebutuhan pokok, serta menurunnya kepercayaan masyarakat terhadap pemerintah. Selain itu, masyarakat menilai sistem pemerintahan saat itu kurang demokratis karena kekuasaan presiden terlalu besar dan pengawasan terhadap pemerintah masih lemah. UUD 1945 sebelum amandemen juga dianggap memiliki kelemahan karena beberapa pasalnya masih bersifat umum, sehingga pembagian kekuasaan antar lembaga negara belum jelas. Akibatnya, presiden dapat dipilih berkali-kali, yang terlihat pada masa pemerintahan Soeharto selama sekitar 32 tahun. Kondisi tersebut juga disertai munculnya praktik KKN, terbatasnya kebebasan pers, dan lemahnya perlindungan HAM.
                </p>

                <p className="text-white/80 text-base leading-relaxed text-justify">
                  Untuk mengatasi permasalahan tersebut, dilakukan Amandemen UUD 1945 sebagai upaya penyempurnaan UUD 1945 tanpa mengubah dasar negara Indonesia. Amandemen bertujuan menciptakan sistem pemerintahan yang lebih demokratis, membatasi kekuasaan presiden, memperkuat lembaga negara, serta melindungi HAM. Amandemen dilakukan sebanyak empat kali pada tahun 1999–2002 and menghasilkan berbagai perubahan penting, salah satunya pembatasan masa jabatan presiden menjadi maksimal dua periode untuk mencegah kekuasaan yang terlalu lama dan memperkuat demokrasi di Indonesia.
                </p>
              </div>
            </SpotlightCard>
          </motion.div>
        </div>

        {/* ── Bagian 2: Perbandingan ── */}
        <div className="pt-16 pb-16">

          <motion.div
            className="text-center mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
          >
            <h3 className="text-4xl md:text-5xl font-display uppercase tracking-tight text-white">
              Perbandingan
            </h3>

            <div className="mt-3 mx-auto w-16 h-[2px] bg-gradient-to-r from-transparent via-white/50 to-transparent" />
          </motion.div>

          {/* items-stretch memaksa baris grid menyamakan tinggi elemen anak */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">

            {/* Sebelum */}
            <motion.div
              className="flex"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeUp}
            >
              {/* flex flex-col h-full memaksa isi spotlight card memanjang kebawah mengikuti tinggi pasangannya */}
              <SpotlightCard className="flex flex-col h-full w-full" spotlightColor="rgba(239, 68, 68, 0.15)">
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-3 h-3 rounded-full bg-white inline-block" />

                  <h4 className="text-white font-bold uppercase tracking-widest text-sm">
                    Sebelum Reformasi
                  </h4>
                </div>

                {/* text-base leading-relaxed disamakan ukurannya agar simetris */}
                <p className="text-white/80 text-base leading-relaxed mb-5 flex-grow">
                  Presiden dapat dipilih berkali-kali tanpa batas yang tegas.
                  Akibatnya, Soeharto memimpin Indonesia selama sekitar 32 tahun.
                </p>

                <ul className="space-y-2 mt-auto">
                  {[
                    "Kekuasaan terlalu terpusat",
                    "Kurangnya pergantian pemimpin",
                    "Munculnya praktik KKN",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-white/80 text-sm"
                    >
                      <span className="text-white/40 font-bold mt-0.5">✕</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </motion.div>

            {/* Sesudah */}
            <motion.div
              className="flex"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              variants={fadeUp}
            >
              <SpotlightCard className="flex flex-col h-full w-full" spotlightColor="rgba(34, 197, 94, 0.15)">
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-3 h-3 rounded-full bg-white inline-block" />

                  <h4 className="text-white font-bold uppercase tracking-widest text-sm">
                    Setelah Reformasi
                  </h4>
                </div>

                <p className="text-white/80 text-base leading-relaxed mb-5 flex-grow">
                  Pasal 7 UUD 1945 menyatakan bahwa presiden dan wakil presiden
                  memegang jabatan selama 5 tahun dan sesudahnya dapat dipilih
                  kembali hanya untuk satu kali masa jabatan.
                </p>

                <ul className="space-y-2 mt-auto">
                  {[
                    "Masa jabatan dibatasi 2 periode",
                    "Pemilu lebih demokratis",
                    "Kekuasaan lebih terdistribusi",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-white/80 text-sm"
                    >
                      <span className="text-white font-bold mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}