import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

const timeline = [
  {
    year: "1999",
    label: "Amandemen Pertama",
    desc:
      "Pada masa sebelum reformasi, kekuasaan presiden dianggap terlalu besar dan sulit diawasi. Presiden dapat dipilih berkali-kali sehingga kekuasaan menjadi terlalu lama berada pada satu orang.",

    perubahanPenting: [
      "Presiden maksimal menjabat 2 periode",
      "DPR diperkuat dalam membuat undang-undang",
      "Presiden tidak dapat membubarkan DPR",
    ],

    dampak: [
      "Kekuasaan presiden mulai dibatasi",
      "DPR lebih kuat mengawasi pemerintah",
    ],

    sources: [
      {
        name: "Perubahan Pertama UUD 1945 – Wikisumber",
        url:
          "https://id.wikisource.org/wiki/Perubahan_Pertama_Undang-Undang_Dasar_Negara_Republik_Indonesia_Tahun_1945",
      },

      {
        name: "Penjelasan Amandemen Pertama – DetikEdu",
        url:
          "https://www.detik.com/edu/detikpedia/d-5723618/amandemen-uud-1945-kapan-jumlah-dan-hasil-amandemen",
      },
    ],
  },

  {
    year: "2000",
    label: "Amandemen Kedua",

    desc:
      "Masyarakat menginginkan perlindungan HAM yang lebih jelas serta pemerintahan daerah yang lebih baik.",

    perubahanPenting: [
      "Penambahan pasal HAM",
      "Otonomi daerah diperluas",
      "Pengaturan wilayah negara lebih jelas",
    ],

    dampak: [
      "Hak rakyat lebih terlindungi",
      "Daerah memiliki kewenangan lebih besar",
    ],

    sources: [
      {
        name: "Perubahan Kedua UUD 1945 – Wikisumber",
        url:
          "https://id.wikisource.org/wiki/Perubahan_Kedua_Undang-Undang_Dasar_Negara_Republik_Indonesia_Tahun_1945",
      },

      {
        name: "Penjelasan Amandemen Kedua – Kompas",
        url:
          "https://nasional.kompas.com/read/2022/02/13/00150011/amandemen-kedua-uud-1945--latar-belakang-dan-perubahannya",
      },
    ],
  },

  {
    year: "2001",
    label: "Amandemen Ketiga",

    desc:
      "Masyarakat ingin demokrasi lebih terbuka dan rakyat dapat memilih presiden secara langsung.",

    perubahanPenting: [
      "Presiden dipilih langsung oleh rakyat",
      "Dibentuk Dewan Perwakilan Daerah",
      "Dibentuk Mahkamah Konstitusi",
    ],

    dampak: [
      "Demokrasi semakin kuat",
      "Rakyat memiliki hak langsung memilih pemimpin",
    ],

    sources: [
      {
        name: "Perubahan Ketiga UUD 1945 – Wikisumber",
        url:
          "https://id.wikisource.org/wiki/Perubahan_Ketiga_Undang-Undang_Dasar_Negara_Republik_Indonesia_Tahun_1945",
      },

      {
        name: "Sejarah Amandemen Ketiga – Kompas",
        url:
          "https://www.kompas.com/tren/read/2021/09/14/163000765/sejarah-amendemen-uud-1945-dari-masa-ke-masa?page=all",
      },
    ],
  },

  {
    year: "2002",
    label: "Amandemen Keempat",

    desc:
      "Masih ada beberapa aturan ketatanegaraan yang belum lengkap sehingga perlu disempurnakan.",

    perubahanPenting: [
      "Pendidikan nasional diperkuat",
      "Perekonomian nasional diatur lebih jelas",
      "Dibentuk Komisi Yudisial",
    ],

    dampak: [
      "Sistem ketatanegaraan lebih lengkap",
      "Pengawasan terhadap lembaga hukum lebih baik",
    ],

    sources: [
      {
        name: "Perubahan Keempat UUD 1945 – Wikisumber",
        url:
          "https://id.wikisource.org/wiki/Perubahan_Keempat_Undang-Undang_Dasar_Negara_Republik_Indonesia_Tahun_1945",
      },

      {
        name: "Tujuan dan Perubahan Amandemen – Kompas Skola",
        url:
          "https://www.kompas.com/skola/read/2020/02/06/140000869/amandemen-uud-1945-tujuan-dan-perubahannya?page=all",
      },
    ],
  },
];

const tujuan = [
  {
    no: "01",
    title: "Membatasi Kekuasaan Presiden",
    desc: "Sebelum reformasi, presiden memiliki kekuasaan yang sangat besar dan bisa dipilih terus-menerus tanpa batas yang jelas. Setelah amandemen, kekuasaan presiden dibatasi agar tidak terjadi penyalahgunaan kekuasaan.",
  },
  {
    no: "02",
    title: "Memperkuat Demokrasi",
    desc: "Amandemen bertujuan membuat rakyat lebih berperan dalam pemerintahan melalui pemilu yang lebih bebas, presiden dipilih langsung oleh rakyat, dan kebebasan berpendapat lebih terbuka.",
  },
  {
    no: "03",
    title: "Melindungi Hak Asasi Manusia",
    desc: "Setelah reformasi, HAM lebih diperhatikan. Dalam UUD 1945 ditambahkan pasal-pasal tentang hak hidup, hak pendidikan, kebebasan beragama, dan kebebasan menyampaikan pendapat.",
  },
  {
    no: "04",
    title: "Menciptakan Pemerintahan yang Transparan",
    desc: "Pemerintah dituntut lebih terbuka kepada rakyat sehingga rakyat dapat mengawasi jalannya pemerintahan.",
  },
];

export function Amandemen() {
  return (
    <div className="relative py-8 px-4 sm:px-6 overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[500px] h-[400px] rounded-full bg-black/20 blur-[120px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0}
          variants={fadeUp}
        >
          <h2 className="text-4xl md:text-5xl font-display uppercase tracking-tight text-white">
            Amandemen
          </h2>
          <div className="mt-4 mx-auto w-16 h-[2px] bg-gradient-to-r from-transparent via-white/50 to-transparent" />
        </motion.div>

        {/* Timeline 2x2 dengan garis tengah */}
        <div className="relative mb-16">
          {/* Garis vertikal tengah */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-white/0 via-white/20 to-white/0 -translate-x-1/2" />

          <div className="grid grid-cols-2 gap-x-12 gap-y-8">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                className={`relative glass-panel rounded-2xl p-6 flex flex-col justify-between ${
                  i % 2 === 0 ? "mr-4" : "ml-4"
                }`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
                whileHover={{ y: -4 }}
              >
                <div>
                  {/* 1 dot per card di tengah */}
                  <div
                    className={`absolute top-1/2 ${
                      i % 2 === 0 ? "-right-[3rem]" : "hidden"
                    } -translate-y-1/2 w-3 h-3 rounded-full bg-white`}
                  />
                  
                  <span className="text-white/50 font-bold text-xs tracking-widest uppercase block mb-1">
                    {item.year}
                  </span>
                  
                  {/* Judul Amandemen */}
                  <h4 className="text-white font-bold text-lg mb-2">{item.label}</h4>
                  <p className="text-white/80 text-base leading-relaxed mb-4">{item.desc}</p>
                  
                  {/* Sub-bagian Perubahan Penting */}
                  <h5 className="text-white font-bold text-base mb-2">Perubahan Penting</h5>
                  <ul className="list-disc pl-5 text-white/80 text-sm leading-relaxed mb-4 space-y-1">
                    {item.perubahanPenting.map((point, pointIdx) => (
                      <li key={pointIdx}>{point}</li>
                    ))}
                  </ul>

                  {/* Sub-bagian Dampak */}
                  <h5 className="text-white font-bold text-base mb-2">Dampak</h5>
                  <ul className="list-disc pl-5 text-white/80 text-sm leading-relaxed space-y-1">
                    {item.dampak.map((point, pointIdx) => (
                      <li key={pointIdx}>{point}</li>
                    ))}
                  </ul>
                </div>

                {/* Bagian Sumber Link */}
                <div className="mt-6 pt-4 border-t border-white/10">
                  <span className="text-white font-bold text-xs uppercase block mb-2 tracking-wider">Sumber:</span>
                  <div className="flex flex-col space-y-1">
                    {item.sources.map((src, srcIdx) => (
                      <a
                        key={srcIdx}
                        href={src.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/40 hover:text-white text-xs transition-colors duration-200 underline line-clamp-1"
                      >
                        {src.name}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tujuan label */}
        <motion.div
          className="text-center mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={0}
          variants={fadeUp}
        >
          <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-6">
            Tujuan Utama Amandemen
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {tujuan.map((item, i) => (
            <motion.div
              key={item.no}
              className="glass-panel rounded-2xl p-7 group hover:bg-white/10 transition-all duration-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={i + 1}
              variants={fadeUp}
              whileHover={{ y: -4 }}
            >
              <span className="text-5xl font-display text-white/10 leading-none block mb-3">
                {item.no}
              </span>
              <h4 className="text-white font-bold text-base mb-3">
                {item.title}
              </h4>
              <p className="text-white/80 text-base leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

