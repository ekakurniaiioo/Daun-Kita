import { useEffect, useState } from "react";
import { Navbar } from "./assets/components/Navbar";
import { Hero } from "./assets/components/Hero";
import { Katalog } from "./assets/components/Katalog";
import { Footer } from "./assets/components/Footer";
import "./index.css";

function App() {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <header className="sticky top-0 z-30">
        <Navbar cart={cart} setCart={setCart}/>
      </header>

      <main>
        <Hero />
        <Katalog cart={cart} setCart={setCart} />
      </main>

      <Footer />
    </>
  );
}

export default App;
