import React from "react";

const FeaturedCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto px-4 py-12 grid md:grid-cols-3 gap-6">
      {/* Cards */}
      <div className="rounded-full relative hover:scale-105 duration-1000">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Fresh Breakfast</p>
          <p className="px-2">Added Daily</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full rounded-xl object-cover"
          src="https://images.pexels.com/photos/5133763/pexels-photo-5133763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="/"
        />
      </div>
      <div className="rounded-full relative hover:scale-105 duration-1000">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Offer Zone</p>
          <p className="px-2">Best Prices</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full rounded-xl object-cover"
          src="https://images.pexels.com/photos/9743517/pexels-photo-9743517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="/"
        />
      </div>
      <div className="rounded-full relative hover:scale-105 duration-1000">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Desserts</p>
          <p className="px-2">Sweetest Bites</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full rounded-xl object-cover"
          src="https://images.pexels.com/photos/3740193/pexels-photo-3740193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="/"
        />
      </div>
    </div>
  );
};

export default FeaturedCards;
