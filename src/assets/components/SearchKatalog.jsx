import { Search, X } from "lucide-react";

export function SearchKatalog({ search, setSearch }) {
  return (
    <div className="relative w-full">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
        <Search className="h-4 w-4 text-forest/70" />
      </div>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Cari tanaman..."
        className="w-full rounded-xl border border-forest/30 bg-cream/80 py-2.5 pr-9 pl-10 font-inter text-sm text-dark placeholder:text-dark/50 transition-all focus:border-forest focus:bg-cream focus:outline-none focus:ring-2 focus:ring-forest/20"
      />

      {search && (
        <button
          onClick={() => setSearch("")}
          className="absolute inset-y-0 right-0 flex items-center pr-3 text-dark/40 hover:text-dark cursor-pointer"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}