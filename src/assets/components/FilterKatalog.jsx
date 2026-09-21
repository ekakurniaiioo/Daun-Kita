export function FilterKatalog() {
  return (
    <div>
      <form className="filter">
        <input
          className="btn bg-forest font-poppins hover:bg-amber-500 hover:text-dark"
          type="reset"
          value="×"
        />
        <input
          className="btn bg-forest font-poppins hover:bg-amber-500 hover:text-dark"
          type="radio"
          aria-label="Indoor"
        />
        <input
          className="btn bg-forest font-poppins hover:bg-amber-500 hover:text-dark"
          type="radio"
          aria-label="Gantung"
        />
        <input
          className="btn bg-forest font-poppins hover:bg-amber-500 hover:text-dark"
          type="radio"
          aria-label="Gantung"
        />
        <input
          className="btn bg-forest font-poppins hover:bg-amber-500 hover:text-dark"
          type="radio"
          aria-label="Kaktus & Sukulen"
        />
      </form>
    </div>
  );
}
