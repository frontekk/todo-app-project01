import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ContactForm from "./pages/ContactForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<ContactForm />} />
    </Routes>
  );
}

export default App;
