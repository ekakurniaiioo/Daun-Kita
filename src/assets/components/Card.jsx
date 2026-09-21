export function Card({ dummyPlants }) {
  return (
    <section className="max-w-6xl grid grid-cols-3 mx-auto gap-16">
      {dummyPlants.map((plant) => (
        <div key={plant.id} className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img src="/DaunKitaHero.jpg" alt="Plant" />
          </figure>
          <div className="card-body bg-forest-light">
            <p className="text-black font-inter">{plant.kategori}</p>
            <h2 className="text-xl text-black font-poppins">
              {plant.nama}
            </h2>
            <div className="card-actions justify-between items-center">
              <p className="text-xl text-black font-inter">Rp {plant.harga.toLocaleString('id-ID')}</p>
              <button className="btn bg-forest rounded-4xl font-poppins">
                + Keranjang
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
