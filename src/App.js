import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedCards from "./components/FeaturedCards";
import FoodMenu from "./components/FoodMenu";
import Categories from "./components/Categories";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeaturedCards />
      <FoodMenu />
      <Categories />
    </div>
  );
};

export default App;
