import { useState } from "react";
import {
  ShoppingCart,
  ShoppingBag,
  Sprout,
  CircleMinus,
  CirclePlus,
} from "lucide-react";
import Drawer from "./Drawer.jsx";

export function Navbar({ cart, setCart }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const totalHarga = cart.reduce((total, item) => {
    return total + item.harga * item.quantity;
  }, 0);

  function addQuantity(id) {
    setCart(
      cart.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }

        return item;
      }),
    );
  }

  function minQuantity(id) {
    setCart(
      cart.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }

        return item;
      }),
    );
  }

  function pesanViaWhatsApp() {
    const teks = "Halo Daun Kita! Aku mau pesan:";
    const alamat = "Dikirim ke alamat 'Alamat kamu' ya kak!";

    const pesanan = cart
      .map((item) => {
        const total = item.harga * item.quantity;

        return `-${item.nama} Rp ${item.harga.toLocaleString("id-ID")} x${item.quantity} = Rp ${total.toLocaleString("id-ID")}`;
      })
      .join("\n");

    const totalHarga = cart.reduce((total, item) => {
      return total + item.harga * item.quantity;
    }, 0);

    const pesan = `${teks}

${pesanan}

Total: Rp ${totalHarga.toLocaleString("id-ID")}

${alamat}`;

    window.open(
      `https://wa.me/6285156956290?text=${encodeURIComponent(pesan)}`,
    );
  }

  return (
    <>
      <nav className="flex items-center justify-between bg-forest/95 backdrop-blur-md border-b-4 border-amber-500 rounded-b-sm px-6 md:px-16 lg:px-24 py-3 shadow-md transition-all">
        <a
          href="#"
          className="flex items-center gap-2.5 cursor-pointer group select-none"
        >
          <div className="p-2 rounded-xl bg-white/10 border border-white/10 group-hover:bg-amber-500/20 group-hover:border-amber-500/30 transition-all duration-300">
            <Sprout
              className="text-amber-500 group-hover:scale-110 transition-transform duration-300"
              size={22}
            />
          </div>
          <span className="text-2xl font-bold text-cream font-poppins tracking-wide">
            Daun{" "}
            <span className="text-amber-500 group-hover:text-cream transition-colors duration-300">
              Kita
            </span>
          </span>
        </a>

        <button
          onClick={() => setIsDrawerOpen(true)}
          className="relative p-2.5 rounded-xl bg-white/10 border border-white/10 text-cream hover:text-black hover:bg-amber-500 hover:border-amber-500 cursor-pointer transition-all duration-300 group shadow-sm active:scale-95"
          aria-label="Buka Keranjang"
        >
          <ShoppingCart
            size={20}
            className="group-hover:scale-105 transition-transform"
          />

          {cart.length > 0 && (
            <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-amber-500 text-[11px] font-extrabold text-black ring-2 ring-forest shadow-md animate-in fade-in zoom-in">
              {cart.length}
            </span>
          )}
        </button>
      </nav>

      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <div className="flex flex-col justify-between h-[calc(100vh-140px)]">
          {cart.length > 0 ? (
            <div className="overflow-y-auto pr-1 flex-1">
              {cart.map((plant) => (
                <div
                  key={plant.id}
                  className="flex gap-4 items-center mb-4 pb-4 border-b border-black/20"
                >
                  <figure className="shrink-0">
                    <img
                      src={plant.image}
                      alt={plant.nama}
                      className="h-20 w-20 object-cover border border-black/20 rounded-md"
                    />
                  </figure>

                  <div className="flex-1 flex flex-col justify-between h-full gap-2">
                    <div>
                      <p className="text-dark font-poppins text-base font-semibold leading-snug">
                        {plant.nama}
                      </p>
                      <p className="text-dark font-poppins text-sm font-medium">
                        Rp{" "}
                        {(plant.harga * plant.quantity).toLocaleString("id-ID")}
                      </p>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => minQuantity(plant.id)}
                          disabled={plant.quantity === 1}
                          className="text-dark hover:text-amber-500 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-colors"
                        >
                          <CircleMinus size={18} />
                        </button>
                        <span className="text-dark font-inter font-medium text-sm">
                          {plant.quantity}
                        </span>
                        <button
                          onClick={() => addQuantity(plant.id)}
                          disabled={plant.quantity >= plant.stok}
                          className="text-dark hover:text-amber-500 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-colors"
                        >
                          <CirclePlus size={18} />
                        </button>
                      </div>

                      <button
                        onClick={() =>
                          setCart(cart.filter((item) => item.id !== plant.id))
                        }
                        className="text-xs text-red-600 hover:underline cursor-pointer font-medium"
                      >
                        Hapus
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
              <div className="w-20 h-20 bg-forest/10 rounded-full flex items-center justify-center mb-4">
                <ShoppingBag size={40} className="text-forest" />
              </div>

              <h3 className="text-xl font-bold text-dark font-poppins mb-1">
                Keranjang kamu masih kosong
              </h3>

              <p className="text-sm text-gray-500 font-inter max-w-xs mb-6">
                Sepertinya kamu belum menambahkan tanaman hias ke dalam
                keranjang.
              </p>

              <button
                onClick={() => setIsDrawerOpen(false)}
                className="bg-forest hover:bg-amber-500 text-cream hover:text-black font-poppins text-sm px-6 py-2.5 rounded-lg font-medium transition-colors cursor-pointer shadow-sm"
              >
                Mulai Belanja
              </button>
            </div>
          )}

          <div className="border-t-2 border-black pt-4 mt-auto">
            <div className="flex justify-between items-center mb-4">
              <span className="font-poppins text-dark">Total:</span>
              <span className="font-poppins font-bold text-lg text-dark">
                Rp {cart.length > 0 ? totalHarga.toLocaleString("id-ID") : "0"}
              </span>
            </div>

            {cart.length > 0 ? (
              <button
                onClick={pesanViaWhatsApp}
                className="w-full bg-forest hover:bg-amber-500 text-cream hover:text-black font-poppins font-semibold py-2.5 rounded-sm border border-black transition cursor-pointer shadow-sm"
              >
                Pesan Via WhatsApp
              </button>
            ) : (
              <button
                disabled
                className="w-full bg-gray-300 text-gray-500 font-poppins font-semibold py-2.5 rounded-sm border border-gray-400 cursor-not-allowed opacity-70"
              >
                Pesan Via WhatsApp
              </button>
            )}
          </div>
        </div>
      </Drawer>
    </>
  );
}
