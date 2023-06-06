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
import Technology from "./pages/Technology";
import Admin from "./components/Admin/Admin";
import Protected from "./utils/Protected";
import SignIn from "./components/Admin/SignIn";
import { useEffect } from "react";
import { useState } from "react";
import { getMiddleware } from "./middleware";

function App() {
  const [articles, setArticles] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [cs, setCS] = useState([]);

  useEffect(() => {
    const callback = (res) => {
      console.log(res);
      let tempArticle = res.data.resources.filter((item) => {
        return item.type === "Article";
      });
      let tempBlog = res.data.resources.filter((item) => {
        return item.type === "Blog";
      });
      let tempCS = res.data.resources.filter((item) => {
        return item.type === "Case Study";
      });

      setArticles(tempArticle);
      setBlogs(tempBlog);
      setCS(tempCS);

      console.log(tempArticle);
      console.log(tempBlog);
    };
    getMiddleware("/resource/all", callback, false);
  }, []);

  function getCategoryRoutes(category) {
    var arr = [];

    if (category === "Blogs") {
      blogs.forEach((item, index) => {
        arr.push(
          <Route
            key={index}
            path={`blogs/0${index + 1}`}
            element={<WrittenContent obj={item} />}
          />
        );
      });
    } else if (category === "Articles") {
      articles.forEach((item, index) => {
        arr.push(
          <Route
            key={index}
            path={`articles/0${index + 1}`}
            element={<WrittenContent obj={item} />}
          />
        );
      });
    } else if (category === "CaseStudies") {
      cs.forEach((item, index) => {
        arr.push(
          <Route
            key={index}
            path={`caseStudies/0${index + 1}`}
            element={<WrittenContent obj={item} />}
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
          <Route path="/resources" element={<Resources blogs={blogs} articles={articles} cs={cs} />} />
          <Route path="/career" element={<Career />} />
          <Route path="/agency" element={<Services />} />
          <Route path="/operations" element={<Operations />} />
          <Route path="/technology" element={<Technology />} />

          <Route element={<Protected />}>
            <Route path="/admin/*" element={<Admin />} />
          </Route>

          <Route path={"/sign-in"} element={<SignIn />} />

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
