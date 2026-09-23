export function FilterKatalog({ setFilter }) {
  return (
    <div className="w-full overflow-x-auto pb-2 md:pb-0 scrollbar-none">
      <form
        onChange={(event) => setFilter(event.target.value)}
        className="flex gap-2 flex-nowrap md:flex-wrap items-center min-w-max md:min-w-0"
      >
        <input
          className="btn btn-sm md:btn-md bg-cream/60 text-dark font-poppins hover:bg-amber-500 hover:text-dark checked:bg-forest checked:text-cream border border-black transition-colors duration-300 cursor-pointer"
          type="radio"
          name="filter"
          value=""
          aria-label="Semua"
          defaultChecked
        />
        <input
          className="btn btn-sm md:btn-md bg-cream/60 text-dark font-poppins hover:bg-amber-500 hover:text-dark checked:bg-forest checked:text-cream border border-black transition-colors duration-300 cursor-pointer"
          type="radio"
          name="filter"
          value="Indoor"
          aria-label="Indoor"
        />
        <input
          className="btn btn-sm md:btn-md bg-cream/60 text-dark font-poppins hover:bg-amber-500 hover:text-dark checked:bg-forest checked:text-cream border border-black transition-colors duration-300 cursor-pointer"
          type="radio"
          name="filter"
          value="Outdoor"
          aria-label="Outdoor"
        />
        <input
          className="btn btn-sm md:btn-md bg-cream/60 text-dark font-poppins hover:bg-amber-500 hover:text-dark checked:bg-forest checked:text-cream border border-black transition-colors duration-300 cursor-pointer"
          type="radio"
          name="filter"
          value="Gantung"
          aria-label="Gantung"
        />
        <input
          className="btn btn-sm md:btn-md bg-cream/60 text-dark font-poppins hover:bg-amber-500 hover:text-dark checked:bg-forest checked:text-cream border border-black transition-colors duration-300 cursor-pointer"
          type="radio"
          name="filter"
          value="Kaktus & Sukulen"
          aria-label="Kaktus & Sukulen"
        />
      </form>
    </div>
  );
}
