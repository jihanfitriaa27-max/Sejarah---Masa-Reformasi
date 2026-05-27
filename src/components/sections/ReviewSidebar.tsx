const reviews = [
  { score: "16.", source: "Ferissa Ilen A.A", quote: "XI SIJA 1" },
  { score: "21.", source: "Jihan Fitria Sardjono", quote: "XI SIJA 1" },
];

export function ReviewSidebar() {
  return (
    <div className="space-y-12 pl-4 lg:pl-12">
      {/* Game Reviews */}
      <div className="space-y-6">
        <h3 className="text-sm font-bold tracking-widest text-white uppercase border-b border-white/20 pb-2 mb-4 w-fit">
          Anggota Kelompok
        </h3>
        {reviews.map((review) => (
          <div
            key={review.source}
            className="flex items-center space-x-4 group cursor-pointer text-white"
          >
            <div className="relative w-12 h-12 flex items-center justify-center rounded-full border-2 border-white/30 group-hover:border-white transition-all duration-300 group-hover:scale-110 animate-pulse-border">
              <span className="font-bold text-lg">{review.score}</span>
            </div>
            <div className="group-hover:translate-x-1 transition-transform duration-300">
              <p className="font-bold text-sm">{review.source}</p>
              <p className="text-xs text-gray-300 italic">{review.quote}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
