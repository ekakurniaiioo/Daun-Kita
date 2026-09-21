export function FilterKatalog({ setFilter }) {
  return (
    <div>
      <form
        onChange={(event) => setFilter(event.target.value)}
        className="filter"
      >
        <input
          className="btn bg-forest font-poppins hover:bg-amber-500 hover:text-dark"
          type="reset"
          name="filter"
          value="×"
          onClick={() => setFilter("")}
        />
        <input
          className="btn bg-forest font-poppins hover:bg-amber-500 hover:text-dark"
          type="radio"
          name="filter"
          value="Indoor"
          aria-label="Indoor"
        />
        <input
          className="btn bg-forest font-poppins hover:bg-amber-500 hover:text-dark"
          type="radio"
          name="filter"
          value="Outdoor"
          aria-label="Outdoor"
        />
        <input
          className="btn bg-forest font-poppins hover:bg-amber-500 hover:text-dark"
          type="radio"
          name="filter"
          value="Gantung"
          aria-label="Gantung"
        />
        <input
          className="btn bg-forest font-poppins hover:bg-amber-500 hover:text-dark"
          type="radio"
          name="filter"
          value="Kaktus & Sukulen"
          aria-label="Kaktus & Sukulen"
        />
      </form>
    </div>
  );
}
