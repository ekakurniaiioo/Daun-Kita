export function FilterKatalog({ setFilter }) {
  const kategori = [
    "",
    "Indoor",
    "Outdoor",
    "Gantung",
    "Kaktus & Sukulen",
  ];

  return (
    <div className="w-full overflow-x-auto pb-2 md:pb-0 scrollbar-none">
      <form
        onChange={(event) => setFilter(event.target.value)}
        className="flex gap-2 flex-nowrap md:flex-wrap items-center min-w-max md:min-w-0"
      >
        {kategori.map((item) => (
          <input
            key={item}
            className="btn btn-sm md:btn-md bg-cream/60 text-dark font-poppins hover:bg-amber-500 hover:text-dark checked:bg-forest checked:text-cream border border-black transition-colors duration-300 cursor-pointer"
            type="radio"
            name="filter"
            value={item}
            aria-label={item || "Semua"}
            defaultChecked={item === ""}
          />
        ))}
      </form>
    </div>
  );
}
