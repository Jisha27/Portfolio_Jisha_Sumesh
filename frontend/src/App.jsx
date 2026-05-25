import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import { About } from "./components/About";

function App() {
  return (
    <>
      <Navbar />
      <HeroBanner/>
      <About/>
    </>
  );
}

export default App;
