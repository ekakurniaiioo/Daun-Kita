import { Sprout, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-forest text-cream border-t-4 border-amber-500">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 py-8 px-6 md:px-16 lg:px-24">
        <aside className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
          <div className="flex items-center gap-2">
            <Sprout className="text-amber-500" size={28} />
            <span className="text-2xl font-bold font-poppins tracking-wide">
              Daun<span className="text-amber-500">Kita</span>
            </span>
          </div>

          <div className="flex items-center gap-2 text-cream/80 text-sm font-inter mt-1">
            <Clock size={16} className="text-amber-500 shrink-0" />
            <span>Jam balas chat (09.00 sampai 20.00)</span>
          </div>
        </aside>

        <nav className="flex flex-col items-center md:items-end gap-2">
          <h6 className="text-base font-semibold font-poppins text-cream/90">
            Social
          </h6>
          <div className="flex gap-4 items-center">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram DaunKita"
              className="p-2.5 rounded-full bg-white/10 hover:bg-amber-500 hover:text-black transition-all duration-300 group shadow-sm active:scale-95 text-cream"
            >
              <svg
                aria-label="Instagram"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current group-hover:scale-110 transition-transform"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.069-1.644-.069-4.849 0-3.204.012-3.583.069-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
              </svg>
            </a>
          </div>
        </nav>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs font-inter text-cream/60">
        © {new Date().getFullYear()} DaunKita. All rights reserved.
      </div>
    </footer>
  );
}
