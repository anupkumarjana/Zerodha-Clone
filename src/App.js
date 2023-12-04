import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Products from "./pages/Products";
import Signup from "./pages/Signup";
import Support from "./pages/Support";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
      <Routes>
        <Route path="/about" element={<About/>}/>
      </Routes>
      <Routes>
        <Route path="/pricing" element={<Pricing />}/>
      </Routes>
      <Routes>
        <Route path="/products" element={<Products />}/>
      </Routes>
      <Routes>
        <Route path="/signup" element={<Signup />}/>
      </Routes>
      <Routes>
        <Route path="/support" element={<Support />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
