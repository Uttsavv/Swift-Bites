import React from "react";
import { categories } from "../data/data";

const Categories = () => {
  return (
    <div className="max-w-[1640px] mx-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Categories
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8">
        {/* Cards */}
        {categories.map((item, idx) => (
          <div
            key={idx}
            className="bg-gray-100 rounded-lg p-4 flex justify-between items-center hover:shadow-sm hover:cursor-pointer hover:scale-105 duration-500"
          >
            <h2 className="font-bold text-gray-800 sm:text-xl">{item.name}</h2>
            <img src={item.image} alt={item.name} className="w-20" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
