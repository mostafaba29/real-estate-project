import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar.jsx'; 
import Home from './Pages/Home.jsx'; 
import Listing from './Pages/Listing.jsx';
import About from './Pages/About.jsx';
import Blog from './Pages/Blog.jsx';
import Contact from "./Pages/Contact.jsx";
import AddProperty from "./Pages/Add-property.jsx";
import AgentPage from "./Pages/AgentPage.jsx";
import Contactme from "./Pages/Contactme.jsx";
import Studio from './Pages/Studio.jsx';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/About" element={<About />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/add-property" element={<AddProperty />} />
        <Route path="/AgentPage" element={<AgentPage />} />
        <Route path="/Contactme" element={<Contactme />} />
        <Route path="/Studio" element={<Studio />} />
      </Routes>
  </Router>
  );
}

export default App;
