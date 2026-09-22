export function Card({ dummyPlants, search, filter, addToCart }) {
  return (
    <section className="max-w-6xl grid grid-cols-3 mx-auto gap-16">
      {dummyPlants
        .filter((plant) => {
          const matchSearch = plant.nama
            .toLowerCase()
            .includes(search.toLowerCase());
          const matchFilter = filter === "" || plant.kategori === filter;

          return matchSearch && matchFilter;
        })
        .map((plant) => (
          <div
            key={plant.id}
            className="card w-96 overflow-hidden rounded-xl border border-forest bg-cream shadow-md"
          >
            <figure className="h-64 bg-[#DCEBE3]">
              <img
                src={plant.image}
                alt={plant.nama}
                className="h-full w-full object-cover"
              />
            </figure>

            <div className="card-body bg-forest-light p-6">
              <div>
                <p className="text-sm text-forest font-inter">
                  {plant.kategori}
                </p>

                <h2 className="mt-1 text-2xl font-bold text-black font-poppins">
                  {plant.nama}
                </h2>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <p className="text-xl font-medium text-black font-inter">
                  Rp {plant.harga.toLocaleString("id-ID")}
                </p>

                <button
                  disabled={plant.stok === 0}
                  onClick={() => {
                    addToCart(plant);
                    alert(`${plant.nama} berhasil ditambahkan ke keranjang!`);
                  }}
                  className={
                    plant.stok === 0
                      ? "btn rounded-full bg-forest/40 text-cream font-poppins"
                      : "btn rounded-full bg-forest text-cream font-poppins transition hover:bg-amber-500 hover:text-black"
                  }
                >
                  {plant.stok === 0 ? "Stok Habis" : "+ Keranjang"}
                </button>
              </div>
            </div>
          </div>
        ))}
    </section>
  );
}
