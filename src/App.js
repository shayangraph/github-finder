import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Footer from "./Component/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-betwin h-screen">
        <Navbar />
        <main className="container mx-auto px-3 pb-12">
          
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
