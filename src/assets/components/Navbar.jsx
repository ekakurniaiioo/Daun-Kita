import { ShoppingCart, Sprout } from "lucide-react";

export function Navbar() {
  return (
    <nav className="flex justify-between bg-forest border-b-amber-500 border-b-4 rounded-b-sm px-24 py-2.5">
      <div className="flex items-center gap-2 cursor-pointer">
        <div className="p-2">
          <Sprout className="text-cream hover:text-amber-500" />
        </div>
        <div className="group">
        <span className="text-2xl text-cream font-poppins flex items-center group-hover:text-amber-500">
          Daun <span className="text-amber-500 group-hover:text-cream">Kita</span>
        </span>
        </div>
      </div>
      <button className="text-cream hover:text-amber-500">
        <ShoppingCart />
      </button>
    </nav>
  );
}
