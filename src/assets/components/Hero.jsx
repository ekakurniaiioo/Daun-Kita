export function Hero() {
  return (
    <section>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "https://placehold.co/400x400?text=DAUNKITA",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-poppins">
              Hijaukan Rumahmu Bersama Daun Kita
            </h1>
            <p className="mb-5 font-inter">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta,
              reprehenderit dignissimos ipsum possimus quasi voluptatum.
            </p>
            <button className="btn bg-forest font-poppins">
              Lihat Koleksi
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
