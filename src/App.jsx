import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import { getProducts } from "./service/apiProduct";

function App() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto]">
      <Navbar />
      <main className="w-full mx-auto my-10">
        <Home />
      </main>
    </div>
  );
}

export default App;
