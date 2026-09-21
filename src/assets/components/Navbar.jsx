import { useState } from "react";
import { ShoppingCart, Sprout, CircleMinus, CirclePlus } from "lucide-react";
import Drawer from "./Drawer.jsx";

export function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
        className="text-cream hover:text-amber-500 cursor-pointer"
      >
        <ShoppingCart />
      </button>

      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <div className="flex flex-col justify-between h-[calc(100vh-140px)]">
          <div className="overflow-y-auto pr-1">
            <div className="flex gap-4 items-center mb-4 pb-4 border-b border-black">
              <figure className="shrink-0">
                <img
                  src="/plants/Monstera-Deliciosa.png"
                  alt="Plant"
                  className="h-20 w-20 object-cover border border-black rounded-sm"
                />
              </figure>

              <div className="flex-1 flex flex-col justify-between h-full gap-2">
                <div>
                  <p className="text-dark font-poppins text-base font-semibold leading-snug">
                    Monstera Deliciosa
                  </p>
                  <p className="text-dark font-poppins text-sm font-medium">
                    Rp 150.000
                  </p>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <button className="text-dark hover:text-amber-500 cursor-pointer transition">
                      <CircleMinus size={18} />
                    </button>
                    <span className="text-dark font-inter font-medium text-sm">
                      1
                    </span>
                    <button className="text-dark hover:text-amber-500 cursor-pointer transition">
                      <CirclePlus size={18} />
                    </button>
                  </div>

                  <button className="text-xs text-red-600 hover:underline cursor-pointer">
                    Hapus
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t-2 border-black pt-4 mt-auto">
            <div className="flex justify-between items-center mb-4">
              <span className="font-poppins text-dark">Total:</span>
              <span className="font-poppins font-bold text-lg text-dark">
                Rp 150.000
              </span>
            </div>
            <button className="w-full bg-forest hover:bg-amber-500 text-cream hover:text-black font-poppins font-semibold py-2.5 rounded-sm border border-black transition cursor-pointer">
              Pesan Via WhatsApp
            </button>
          </div>
        </div>
      </Drawer>
    </nav>
  );
}
