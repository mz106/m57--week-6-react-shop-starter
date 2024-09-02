import { useState, useEffect } from "react";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products?limit=8");

      const data = await response.json();
      console.log(data);
      setProducts(data);
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home products={products} />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
