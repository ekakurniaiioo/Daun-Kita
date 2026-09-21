import { useState } from "react";
import { Navbar } from "./assets/components/Navbar";
import { Hero } from "./assets/components/Hero";
import { Katalog } from "./assets/components/Katalog";
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
    </>
  );
}

export default App;
