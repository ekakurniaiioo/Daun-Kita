import { useState } from "react";
import { Navbar } from "./assets/components/Navbar";
import { Hero } from "./assets/components/Hero";
import { Katalog } from "./assets/components/Katalog";
import { Footer } from "./assets/components/Footer";
import "./index.css";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <Hero />
        <Katalog />
      </main>

      <Footer />
    </>
  );
}

export default App;
