import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedCards from "./components/FeaturedCards";
import FoodMenu from "./components/FoodMenu";
import Categories from "./components/Categories";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeaturedCards />
      <FoodMenu />
      <Categories />
      <Footer />
    </div>
  );
};

export default App;
