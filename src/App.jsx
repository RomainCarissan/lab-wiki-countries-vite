import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CountryDetails from "./pages/CountryDetailsPage";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      {/* <h1>LAB | React WikiCountries</h1> */}
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:countryId" element={<CountryDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
