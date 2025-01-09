import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CatalogPage from "./pages/CatalogPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CatalogPage />} />
      </Routes>
    </Router>
  );
}

export default App;
