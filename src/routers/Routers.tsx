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
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import SearchResults from "../pages/SearchResults/SearchResults";

const Routers: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/cars" element={<CarListing />} />
      <Route path="/car-details/:id" element={<CarDetails />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/blogs/:id" element={<BlogDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/results" element={<SearchResults />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
