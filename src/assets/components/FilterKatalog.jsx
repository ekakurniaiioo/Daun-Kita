export function FilterKatalog({ setFilter }) {
  return (
    <div>
      <form
        onChange={(event) => setFilter(event.target.value)}
        className="flex gap-2 flex-wrap"
      >
        <input
          className="btn bg-cream/60 text-dark font-poppins hover:bg-amber-500 hover:text-dark checked:bg-forest checked:text-cream border border-black transition-colors duration-300"
          type="radio"
          name="filter"
          value=""
          aria-label="Semua"
          defaultChecked
        />
        <input
          className="btn bg-cream/60 text-dark font-poppins hover:bg-amber-500 hover:text-dark checked:bg-forest checked:text-cream border border-black transition-colors duration-300"
          type="radio"
          name="filter"
          value="Indoor"
          aria-label="Indoor"
        />
        <input
          className="btn bg-cream/60 text-dark font-poppins hover:bg-amber-500 hover:text-dark checked:bg-forest checked:text-cream border border-black transition-colors duration-300"
          type="radio"
          name="filter"
          value="Outdoor"
          aria-label="Outdoor"
        />
        <input
          className="btn bg-cream/60 text-dark font-poppins hover:bg-amber-500 hover:text-dark checked:bg-forest checked:text-cream border border-black transition-colors duration-300"
          type="radio"
          name="filter"
          value="Gantung"
          aria-label="Gantung"
        />
        <input
          className="btn bg-cream/60 text-dark font-poppins hover:bg-amber-500 hover:text-dark checked:bg-forest checked:text-cream border border-black transition-colors duration-300"
          type="radio"
          name="filter"
          value="Kaktus & Sukulen"
          aria-label="Kaktus & Sukulen"
        />
      </form>
    </div>
  );
}
