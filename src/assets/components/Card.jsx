export function Card({ plants, search, filter, addToCart }) {
  const filteredPlants = plants.filter((plant) => {
    const matchSearch = plant.nama.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "" || plant.kategori === filter;
    return matchSearch && matchFilter;
  });

  if (filteredPlants.length === 0) {
    return (
      <div className="py-16 text-center">
        <p className="font-poppins text-lg text-gray-500">
          Tanaman yang kamu cari tidak ditemukan.
        </p>
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredPlants.map((plant) => (
          <div
            key={plant.id}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-forest/20 bg-cream shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <span className="absolute top-3 left-3 z-10 rounded-full bg-forest/80 px-3 py-1 font-inter text-xs font-medium text-cream backdrop-blur-md">
              {plant.kategori}
            </span>

            <figure className="relative h-56 w-full overflow-hidden bg-[#DCEBE3]">
              <img
                src={plant.image}
                alt={plant.nama}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </figure>

            <div className="flex flex-1 flex-col justify-between bg-forest-light/30 p-5">
              <div>
                <h3 className="font-poppins text-xl font-bold leading-tight text-black">
                  {plant.nama}
                </h3>
              </div>

              <div className="mt-4 flex items-center justify-between gap-2 border-t border-forest/10 pt-3">
                <div>
                  <span className="block font-inter text-xs text-gray-500">
                    Harga
                  </span>
                  <p className="font-inter text-lg font-bold text-black">
                    Rp {plant.harga.toLocaleString("id-ID")}
                  </p>
                </div>

                <button
                  disabled={plant.stok === 0}
                  onClick={() => addToCart(plant)}
                  className={`cursor-pointer rounded-xl px-4 py-2 font-poppins text-xs font-semibold transition-all duration-200 active:scale-95 ${
                    plant.stok === 0
                      ? "cursor-not-allowed bg-gray-300 text-gray-500"
                      : "bg-forest text-cream hover:bg-amber-500 hover:text-black shadow-sm"
                  }`}
                >
                  {plant.stok === 0 ? "Stok Habis" : "+ Keranjang"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
