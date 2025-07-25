import { Route, Routes, useLocation } from "react-router-dom";
import React, { Suspense, useEffect, lazy } from "react";
import "./App.css";
import NotFound from "./Components/Error404";

const Navbar = lazy(() => import("./Components/NavBar"));
const Footer = lazy(() => import("./Components/Footer"));
const FloatingButtons = lazy(() => import("./Components/TopAndWhatsAppButton"));
const Home = lazy(() => import("./Pages/Home"));
const Services = lazy(() => import("./Pages/Services"));
const Portfolio = lazy(() => import("./Pages/Portfolio"));
const Contact = lazy(() => import("./Pages/Contact"));
const About = lazy(() => import("./Pages/About"));

function App() {
  const location = useLocation().pathname;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Suspense
      fallback={
        <div className="loader-bg bg-dark">
          <span className="loader"></span>
        </div>
      }
    >
      <Navbar />
      <FloatingButtons />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/" element={<Services />} />
        <Route path="/portfolio/" element={<Portfolio />} />
        <Route path="/contact/" element={<Contact />} />
        <Route path="/about/" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Suspense>
  );
}

export default App;
