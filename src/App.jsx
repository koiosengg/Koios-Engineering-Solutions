import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ThreeDscan from "./components/ThreeDscan";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GeneralEngineering from "./components/GeneralEngineering";
import MechanicalDesign from "./components/MechanicalDesign";
import PrivacyPolicy from "./components/PrivacyPolicy";
function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route
              path="/general_engineering"
              element={<GeneralEngineering />}
            />
            <Route path="/mechanical_design" element={<MechanicalDesign />} />
            <Route path="/3d_scanning" element={<ThreeDscan />} />
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
