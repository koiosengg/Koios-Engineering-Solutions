import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Whatsapp from "./components/Whatsapp";
import Home from "./components/Home";
import Footer from "./components/Footer";
import GeneralEngineering from "./components/GeneralEngineering";
import MechanicalDesign from "./components/MechanicalDesign";
import MechanicalManufacturing from "./components/MechanicalManufacturing";
import VehicleDevelopment from "./components/VehicleDevelopment";
import AutomotiveDesign from "./components/AutomotiveDesign";
import AutomotiveManufacturing from "./components/AutomotiveManufacturing";
import ElectricVehicle from "./components/ElectricVehicle";
import ThreeDscan from "./components/ThreeDscan";
import About from "./components/About";
import Contact from "./components/Contact";
import PrivacyPolicy from "./components/PrivacyPolicy";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Whatsapp />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route
              path="/general_engineering"
              element={<GeneralEngineering />}
            />
            <Route path="/mechanical_design" element={<MechanicalDesign />} />
            <Route
              path="/mechanical_manufacturing"
              element={<MechanicalManufacturing />}
            />
            <Route
              path="/vehicle_development"
              element={<VehicleDevelopment />}
            />
            <Route path="/automotive_design" element={<AutomotiveDesign />} />
            <Route
              path="/automotive_manufacturing"
              element={<AutomotiveManufacturing />}
            />
            <Route path="/electric_vehicle" element={<ElectricVehicle />} />
            <Route path="/3d_scanning" element={<ThreeDscan />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy_policy" element={<PrivacyPolicy />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
