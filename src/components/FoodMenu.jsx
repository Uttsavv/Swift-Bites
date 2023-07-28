import React, { useState } from "react";
import { data } from "../data/data.js";

const FoodMenu = () => {
  const [foods, setFoods] = useState(data);

  //Filter by Food Type
  const filterFoodType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  // Filter by Food Price
  const filterFoodPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <div className="max-w-[1640px] mx-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Our Top Picks
      </h1>

      {/* Filter Options */}
      <div className="flex flex-col lg:flex-row justify-between pt-4">
        {/* Food Options */}
        <div>
          <p className="font-bold">Food Type</p>
          <div className="flex justify-between flex-wrap max-w-[600px] w-full">
            <button
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1"
              onClick={() => setFoods(data)}
            >
              All
            </button>
            <button
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1"
              onClick={() => filterFoodType("burger")}
            >
              Burger
            </button>
            <button
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1"
              onClick={() => filterFoodType("pizza")}
            >
              Pizza
            </button>
            <button
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1"
              onClick={() => filterFoodType("biryani")}
            >
              Biryani
            </button>
            <button
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1"
              onClick={() => filterFoodType("chicken")}
            >
              Chicken
            </button>
          </div>
        </div>
        {/* Price Range */}
        <div>
          <p className="font-bold">Price Range</p>
          <div className="flex justify-between flex-wrap max-w-[450px] w-full">
            <button
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1"
              onClick={() => setFoods(data)}
            >
              All
            </button>
            <button
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1"
              onClick={() => filterFoodPrice("₹")}
            >
              ₹
            </button>
            <button
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1"
              onClick={() => filterFoodPrice("₹₹")}
            >
              ₹₹
            </button>
            <button
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1"
              onClick={() => filterFoodPrice("₹₹₹")}
            >
              ₹₹₹
            </button>
            <button
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1"
              onClick={() => filterFoodPrice("₹₹₹₹")}
            >
              ₹₹₹₹
            </button>
          </div>
        </div>
      </div>
      {/* Display Foods */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {/* Cards */}
        {foods.map((item, idx) => (
          <div
            key={idx}
            className="border shadow-lg hover:scale-105 duration-300 rounded-t-lg hover:cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold">{item.name}</p>
              <p>
                <span className="bg-orange-500 text-white rounded-full p-1">
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodMenu;
