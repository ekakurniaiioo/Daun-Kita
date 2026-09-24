import { useEffect, useState } from "react";
import { SearchKatalog } from "./SearchKatalog";
import { FilterKatalog } from "./FilterKatalog";
import { Card } from "./Card";
import { dummyPlants } from "../data/plants";

export function Katalog({ cart, setCart }) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [plants, setPlants] = useState(
    JSON.parse(localStorage.getItem("dummyPlants")) || dummyPlants,
  );

  useEffect(() => {
    localStorage.setItem("dummyPlants", JSON.stringify(plants));
  }, [plants]);

  function addToCart(plant) {
    const existingPlant = cart.find((item) => item.id === plant.id);

    if (existingPlant) {
      setCart(
        cart.map((item) => {
          if (item.id === plant.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }

          return item;
        }),
      );
    } else {
      setCart([
        ...cart,
        {
          ...plant,
          quantity: 1,
        },
      ]);
    }
  }

  return (
    <section className="min-h-screen bg-cream py-24">
      <header className="mb-12">
        <h2
          id="koleksi"
          className="text-3xl text-black font-poppins text-center"
        >
          Koleksi
        </h2>
      </header>

      <section className="mx-auto mb-12 max-w-5xl rounded-2xl border border-forest/20 bg-forest-light/60 p-4 shadow-md backdrop-blur-md md:mb-16 md:p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="w-full md:w-1/3">
            <SearchKatalog search={search} setSearch={setSearch} />
          </div>

          <div className="hidden h-8 w-1 bg-forest/20 md:block" />

          <div className="w-full md:w-auto">
            <FilterKatalog setFilter={setFilter} />
          </div>
        </div>
      </section>

      <Card
        plants={plants}
        search={search}
        filter={filter}
        addToCart={addToCart}
      />
    </section>
  );
}
