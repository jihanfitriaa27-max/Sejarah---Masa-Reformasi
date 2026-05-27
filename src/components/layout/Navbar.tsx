import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import type { PageId } from "../../App";

const navItems: { label: string; id: PageId }[] = [
  { label: "Beranda",        id: "beranda" },
  { label: "Latar Belakang", id: "latar-belakang" },
  { label: "Amandemen",      id: "amandemen" },
  { label: "Dampak",         id: "dampak" },
  { label: "Kesimpulan",     id: "kesimpulan" },
];

interface NavbarProps {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
}

export function Navbar({ activePage, onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="relative flex justify-between items-center py-4 lg:py-5">
      {/* Logo */}
      <motion.div
        className="flex items-center cursor-pointer flex-shrink-0"
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0], transition: { duration: 0.5 } }}
        whileTap={{ scale: 0.9 }}
        onClick={() => onNavigate("beranda")}
      >
        <img
          src="/smkn7smg.png"
          alt="Logo SMK"
          className="w-10 h-10 md:w-12 md:h-12 object-contain"
          style={{
            filter: "brightness(0) invert(1) drop-shadow(0 0 6px rgba(205,22,28,0.5))",
          }}
        />
      </motion.div>

      {/* Desktop Nav — capsule di tengah */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
        <div
          className="flex items-center gap-1 px-3 py-2 rounded-full"
          style={{
            background: "rgba(0,0,0,0.35)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
        {navItems.map((item, i) => (
          <a
            key={item.id}
            href="#"
            onClick={(e) => { e.preventDefault(); onNavigate(item.id); }}
            className="flex items-center text-white/80 hover:text-white transition-all duration-300 group relative px-4 py-1.5 text-sm font-medium tracking-wide uppercase whitespace-nowrap"
            style={{ animationDelay: `${0.1 + i * 0.1}s` }}
          >
            {item.label}
            {/* Underline aktif */}
            <span
              className={`absolute bottom-0 left-4 right-4 h-[2px] bg-white transition-all duration-300 rounded-full ${
                activePage === item.id ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              }`}
            />
          </a>
        ))}
        </div>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden text-white/70 hover:text-white transition-all duration-300"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-20 left-0 right-0 z-50 glass-panel mx-4 rounded-xl p-6 md:hidden animate-fade-in-down">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href="#"
                onClick={(e) => { e.preventDefault(); onNavigate(item.id); setMobileMenuOpen(false); }}
                className={`text-sm uppercase tracking-wide font-medium py-2 border-b border-white/10 transition-colors ${
                  activePage === item.id ? "text-white" : "text-white/70 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
