import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import FloatingButtons from "./Components/TopAndWhatsAppButton";

function App() {
  return (
    <div>
      <Navbar />
      <FloatingButtons/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/" element={<Services />} />
        <Route path="/portfolio/" element={<Portfolio />} />
        <Route path="/contact/" element={<Contact />} />
        <Route path="/about/" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
