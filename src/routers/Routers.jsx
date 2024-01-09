import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import CarListing from "../pages/CarListing/CarListing";
import CarDetails from "../pages/CarDetails/CarDetails";
import Blog from "../pages/Blog/Blog";
import BlogDetails from "../pages/BlogDetails/BlogDetails";
import Contact from "../pages/Contact/Contact";
import NotFound from "../pages/NotFound/NotFound";

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cars" element={<CarListing />} />
        <Route path="/car-details" element={<CarDetails />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default Routers;
