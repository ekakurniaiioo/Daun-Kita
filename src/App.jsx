import { useState } from "react";
import { Navbar } from "./assets/components/Navbar";
import { Hero } from "./assets/components/Hero";
import "./index.css";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <Hero />
      </main>
    </>
  );
}

export default App;
