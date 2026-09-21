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
    <section className="bg-cream">
      <div className="max-w-6xl mx-auto px-6 pt-8 pb-16">
        <h1 className="sr-only">Hijaukan Rumahmu Bersama Daun Kita</h1>

        <img
          src="/DaunKitaHero.jpg"
          alt="Daun Kita Hero"
          className="w-full h-auto rounded-3xl shadow-lg"
        />

        <div className="mt-10 text-center">
          <p className="font-poppins text-xl font-medium text-forest max-w-xl mx-auto">
            Tanaman hias segar, dikirim langsung ke rumahmu.
          </p>

          <a
            href="#koleksi"
            className="btn btn-lg mt-6 border-none rounded-full bg-forest text-cream font-poppins font-medium shadow-md hover:bg-amber-500 hover:text-black transition-colors duration-300"
          >
            Lihat Koleksi
            <MoveDown size={20} />
          </a>
        </div>

        <ul className="mt-14 grid gap-4 grid-cols-3">
          {perks.map(({ icon: Icon, title, desc }) => (
            <li
              key={title}
              className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest">
                <Icon size={22} />
              </span>
              <div>
                <h3 className="font-poppins font-medium text-gray-900">
                  {title}
                </h3>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
