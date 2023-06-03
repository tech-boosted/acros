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
import WrittenContent from "./components/Content/WrittenContent";
import { articles, blogs, caseStudies } from "./utils/Variable";
import Technology from "./pages/Technology";
import Admin from "./components/Admin/Admin";

function App() {
  function getCategoryRoutes(category) {
    var arr = [];

    if (category === "Blogs") {
      blogs.forEach((item, index) => {
        arr.push(
          <Route
            key={index}
            path={`blogs/0${index + 1}`}
            element={
              <WrittenContent category={"Blogs"} indexValue={Number(index)} />
            }
          />
        );
      });
    } else if (category === "Articles") {
      articles.forEach((item, index) => {
        arr.push(
          <Route
            key={index}
            path={`articles/0${index + 1}`}
            element={
              <WrittenContent
                category={"Articles"}
                indexValue={Number(index)}
              />
            }
          />
        );
      });
    } else if (category === "CaseStudies") {
      caseStudies.forEach((item, index) => {
        arr.push(
          <Route
            key={index}
            path={`caseStudies/0${index + 1}`}
            element={
              <WrittenContent
                category={"CaseStudies"}
                indexValue={Number(index)}
              />
            }
          />
        );
      });
    }
    return arr;
  }

  return (
    <Router>
      <div className="container md:w-[80vw] m-auto w-[90vw] block">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/career" element={<Career />} />
          <Route path="/agency" element={<Services />} />
          <Route path="/operations" element={<Operations />} />
          <Route path="/technology" element={<Technology />} />

          <Route exact path="/admin" element={<Admin />} />

          {getCategoryRoutes("Blogs")}
          {getCategoryRoutes("Articles")}
          {getCategoryRoutes("CaseStudies")}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
