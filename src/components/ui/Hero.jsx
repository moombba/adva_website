export function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-[#333333] pointer-events-none select-none">
      <div className="flex flex-col items-center text-center px-4 max-w-6xl">
        <div className="overflow-hidden">
          <h1 className="text-[8vw] md:text-[6vw] leading-[1] font-display font-bold uppercase tracking-tight select-none drop-shadow-[0_0_30px_rgba(0,0,0,0.02)] animate-in fade-in slide-in-from-bottom-12 duration-1000">
            Atelier des Verre & Acier
          </h1>
        </div>
        <div className="mt-12 flex flex-col items-center gap-4">
          <div className="h-[1px] w-24 bg-[#333333] opacity-20 animate-in fade-in duration-1000 delay-500"></div>
          <p className="text-[12px] md:text-[14px] uppercase tracking-[1em] opacity-40 font-bold font-display animate-in fade-in zoom-in duration-1000 delay-300 translate-x-[0.5em]">
            Architecture & Maîtrise d'œuvre
          </p>
        </div>
      </div>
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30 animate-bounce">
        <span className="text-[9px] uppercase tracking-[0.4em] font-display font-bold">Découvrir</span>
        <div className="w-[1px] h-12 bg-[#333333]"></div>
      </div>
    </section>
  );
}
