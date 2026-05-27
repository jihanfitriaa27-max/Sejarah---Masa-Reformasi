export function Footer() {
  return (
    <footer className="absolute bottom-6 left-6 md:left-12 flex items-center space-x-5 z-20 animate-fade-in-up delay-1000">
      {/* Teks Informasi Tugas */}
      <p className="text-white/40 text-xs tracking-wider font-medium">
        Project Sejarah
      </p>
      
      {/* Pembatas Kecil */}
      <div className="w-1 h-1 rounded-full bg-white/20" />
    </footer>
  );
}