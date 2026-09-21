export default function Drawer({ isOpen, onClose, children }) {
  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={onClose}
      />

      <div
        className={`fixed top-0 right-0 z-50 h-full w-80 max-w-[80vw] bg-forest-light p-6 shadow-xl transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b-2 border-black pb-4 mb-6">
          <h2 className="text-lg font-bold text-gray-800">Keranjang</h2>
          <button
            onClick={onClose}
            className="rounded-lg px-3 py-1.5 text-black hover:bg-amber-500 cursor-pointer"
          >
            ✕
          </button>
        </div>

        <div>{children}</div>
      </div>
    </>
  );
}
