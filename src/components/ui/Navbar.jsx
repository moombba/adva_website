export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full p-10 flex justify-between items-center z-50 text-[#333333] text-[11px] font-bold uppercase tracking-[0.3em] font-display">
      <div className="text-2xl tracking-tighter normal-case hover:scale-105 transition-transform cursor-pointer font-bold">ADVA</div>
      <div className="flex gap-12 opacity-60 hover:opacity-100 transition-opacity duration-500">
        <a href="#work" className="hover:text-black transition-colors relative group">
          Projets
          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#333333] transition-all group-hover:w-full"></span>
        </a>
        <a href="#about" className="hover:text-black transition-colors relative group">
          L'Agence
          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#333333] transition-all group-hover:w-full"></span>
        </a>
        <a href="#contact" className="hover:text-black transition-colors relative group">
          Contact
          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#333333] transition-all group-hover:w-full"></span>
        </a>
      </div>
    </nav>
  );
}
