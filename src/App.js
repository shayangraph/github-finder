import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-betwin h-screen">
        <Navbar />
        <main>Content</main>
      </div>
    </Router>
  );
}

export default App;
