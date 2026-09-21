export function SearchKatalog({ search, setSearch }) {
  return (
    <div>
      <label className="input bg-cream/60 border border-black transition-colors duration-300 has-[:focus]:bg-forest/40">
        <svg
          className="h-[1em] text-dark"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input
          value={search}
          type="search"
          className="grow text-dark placeholder:text-dark"
          placeholder="Search..."
          onChange={(event) => setSearch(event.target.value)}
        />
      </label>
    </div>
  );
}
