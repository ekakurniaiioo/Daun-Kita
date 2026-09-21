import { SearchKatalog } from "./SearchKatalog";
import { FilterKatalog } from "./FilterKatalog";

export function Katalog() {
  return (
    <section className="bg-cream py-24">
      <header className="mb-12">
        <h2 id="koleksi" className="text-3xl text-black font-poppins text-center">
          Koleksi
        </h2>
      </header>

      <section className="max-w-3xl mx-auto flex items-center justify-between gap-4">
        <SearchKatalog />
        <FilterKatalog />
      </section>
    </section>
  );
}
