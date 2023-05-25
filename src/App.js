import './App.css';
import {Route, BrowserRouter as Router, Routes}  from "react-router-dom"
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Resources from './pages/Resources';
import Contact from './pages/Contact';

function App() {
  return (
   <Router>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path = "/about-us" element ={<AboutUs/>}/>
      <Route path = "/contact-us" element ={<Contact/>}/>
      <Route path = "/resources" element ={<Resources/>}/>
    </Routes>
   </Router>
  );
}

export default App;
