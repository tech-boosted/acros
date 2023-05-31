import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import Career from "./pages/Career";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Services from "./pages/Services";
import Operations from "./pages/Operations";

function App() {
  return (
    <Router>
      <div className="container md:w-[80vw] m-auto w-[90vw] block">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/career" element={<Career />} />
          <Route path="/agency" element={<Services />} />
          <Route path="/operations" element={<Operations />} />
          <Route path="/technology" element={<Operations />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
