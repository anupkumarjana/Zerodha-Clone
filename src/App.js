import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Products from "./pages/Products";
import Signup from "./pages/Signup";
import Support from "./pages/Support";

function App() {
  return (
    <BrowserRouter>
      <Header />
        {" "}
        {/* Adjust padding to accommodate fixed header */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/products" element={<Products />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/support" element={<Support />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
