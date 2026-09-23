import { MoveDown, Leaf, Truck, MessageCircle } from "lucide-react";

export function Hero() {
  const perks = [
    {
      icon: Leaf,
      title: "Segar & Sehat",
      desc: "Tanaman dipilih langsung sebelum dikirim.",
    },
    {
      icon: Truck,
      title: "Dikirim ke Rumah",
      desc: "Dikemas rapi supaya sampai dengan aman.",
    },
    {
      icon: MessageCircle,
      title: "Pesan via WhatsApp",
      desc: "Tanpa login, dibalas 09.00–20.00.",
    },
  ];

  return (
    <section id="hero" className="bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8 pb-12 sm:pb-16">
        <h1 className="sr-only">Hijaukan Rumahmu Bersama Daun Kita</h1>

        <img
          src="/DaunKitaHero.jpg"
          alt="Daun Kita Hero"
          className="w-full h-auto rounded-2xl sm:rounded-3xl shadow-lg object-cover max-h-[450px]"
        />

        <div className="mt-6 sm:mt-10 text-center">
          <p className="font-poppins text-lg sm:text-xl font-medium text-forest max-w-xl mx-auto leading-relaxed">
            Tanaman hias segar, dikirim langsung ke rumahmu.
          </p>

          <a
            href="#koleksi"
            className="btn btn-md sm:btn-lg mt-5 sm:mt-6 border-none rounded-full bg-forest text-cream font-poppins font-medium shadow-md hover:bg-amber-500 hover:text-black transition-colors duration-300"
          >
            Lihat Koleksi
            <MoveDown size={20} />
          </a>
        </div>

        <ul className="mt-10 sm:mt-14 grid gap-4 grid-cols-1 md:grid-cols-3">
          {perks.map(({ icon: Icon, title, desc }) => (
            <li
              key={title}
              className="flex items-start gap-4 rounded-2xl bg-white p-4 sm:p-5 shadow-sm"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest">
                <Icon size={22} />
              </span>
              <div>
                <h3 className="font-poppins font-medium text-gray-900 text-base">
                  {title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-0.5">{desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}