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
    <nav className="flex justify-between bg-forest border-b-amber-500 border-b-4 rounded-b-sm px-24 py-2.5">
      <div className="flex items-center gap-2 cursor-pointer">
        <div className="p-2">
          <Sprout className="text-cream hover:text-amber-500" />
        </div>
        <div className="group">
          <span className="text-2xl text-cream font-poppins flex items-center group-hover:text-amber-500">
            Daun{" "}
            <span className="text-amber-500 group-hover:text-cream">Kita</span>
          </span>
        </div>
      </div>
      <button
        onClick={() => setIsDrawerOpen(true)}
        className="text-cream hover:text-amber-500 cursor-pointer group transition-colors duration-300"
      >
        <div className="indicator">
          <ShoppingCart />
          <span className="indicator-item text-black bg-forest-light/60 text-sm font-inter px-1.5 rounded-full backdrop-blur-2xl group-hover:bg-black group-hover:text-cream">
            {cart.length}
          </span>
        </div>
      </button>

      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        {cart.length > 0 ? (
          <div className="flex flex-col justify-between h-[calc(100vh-140px)]">
            <div className="overflow-y-auto pr-1">
              {cart.map((plant) => (
                <div
                  key={plant.id}
                  className="flex gap-4 items-center mb-4 pb-4 border-b border-black"
                >
                  <figure className="shrink-0">
                    <img
                      src={plant.image}
                      alt="Plant"
                      className="h-20 w-20 object-cover border border-black rounded-sm"
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
                          className="text-dark hover:text-amber-500 cursor-pointer transition-colors duration-200"
                        >
                          <CircleMinus size={18} />
                        </button>
                        <span className="text-dark font-inter font-medium text-sm">
                          {plant.quantity}
                        </span>
                        <button
                          onClick={() => addQuantity(plant.id)}
                          disabled={plant.quantity >= plant.stok}
                          className="text-dark hover:text-amber-500 cursor-pointer transition-colors duration-200"
                        >
                          <CirclePlus size={18} />
                        </button>
                      </div>

                      <button
                        onClick={() => {
                          setCart(cart.filter((item) => item.id !== plant.id));
                        }}
                        className="text-xs text-red-600 hover:underline cursor-pointer"
                      >
                        Hapus
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t-2 border-black pt-4 mt-auto">
              <div className="flex justify-between items-center mb-4">
                <span className="font-poppins text-dark">Total:</span>
                <span className="font-poppins font-bold text-lg text-dark">
                  Rp {totalHarga.toLocaleString("id-ID")}
                </span>
              </div>
              <button
                onClick={pesanViaWhatsApp}
                className="w-full bg-forest hover:bg-amber-500 text-cream hover:text-black font-poppins font-semibold py-2.5 rounded-sm border border-black transition cursor-pointer"
              >
                Pesan Via WhatsApp
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-between h-[calc(100vh-140px)]">
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

            <div className="border-t-2 border-black pt-4 mt-auto">
              <div className="flex justify-between items-center mb-4">
                <span className="font-poppins text-dark">Total:</span>
                <span className="font-poppins font-bold text-lg text-dark">
                  Rp 0
                </span>
              </div>
              <button className="w-full bg-forest/70 text-cream font-poppins font-semibold py-2.5 rounded-sm border border-black cursor-not-allowed">
                Pesan Via WhatsApp
              </button>
            </div>
          </div>
        )}
      </Drawer>
    </nav>
  );
}
