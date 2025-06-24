import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Modules from "./components/Modules";
import Screenshots from "./components/Screenshots";
import MetricsCards from "./components/MetricsCards";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
        <Modules />
        <Screenshots />
        <MetricsCards />
      </main>
      <Footer />
    </div>
  );
}

export default App;