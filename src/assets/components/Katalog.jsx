import { useState } from "react";
import { SearchKatalog } from "./SearchKatalog";
import { FilterKatalog } from "./FilterKatalog";
import { Card } from "./Card";
import { dummyPlants } from "../data/Plants";

export function Katalog() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  return (
    <section className="min-h-screen bg-cream py-24">
      <header className="mb-12">
        <h2 id="koleksi" className="text-3xl text-black font-poppins text-center">
          Koleksi
        </h2>
      </header>

      <section className="max-w-3xl mx-auto flex items-center justify-between gap-4 mb-24">
        <SearchKatalog 
        search={search}
        setSearch={setSearch}
        />
        <FilterKatalog 
        setFilter={setFilter}
        />
      </section>

        <Card 
        dummyPlants={dummyPlants}
        search={search}
        filter={filter}
        />
    </section>
  );
}
