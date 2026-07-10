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
import ThreeDprinting from "./components/ThreeDprinting";
import About from "./components/About";
import Contact from "./components/Contact";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Blog from "./components/Blog";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Whatsapp />
        <main>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route
                path="/general-engineering-services"
                element={<GeneralEngineering />}
              />
              <Route path="/mechanical_design" element={<MechanicalDesign />} />
              <Route
                path="/mechanical_manufacturing"
                element={<MechanicalManufacturing />}
              />
              <Route
                path="/vehicle-development"
                element={<VehicleDevelopment />}
              />
              <Route
                path="/automotive-design-services"
                element={<AutomotiveDesign />}
              />
              <Route
                path="/automotive-manufacturing-solutions"
                element={<AutomotiveManufacturing />}
              />
              <Route
                path="/electric-vehicle-development-services"
                element={<ElectricVehicle />}
              />
              <Route path="/3d-scanning" element={<ThreeDscan />} />
              <Route path="/3d-printing" element={<ThreeDprinting />} />
              <Route path="/about-us" element={<About />} />
              <Route path="/contact-us" element={<Contact />} />
              <Route path="/privacy_policy" element={<PrivacyPolicy />} />
              <Route path="/blogs/*" element={<Blog />} />
              <Route path="*" element={<Home />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
