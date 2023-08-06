import React, { useState } from "react";
import {
  AiFillTag,
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsCartFill, BsSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdHelp } from "react-icons/md";
import { FaUserFriends, FaWallet } from "react-icons/fa";

const Navbar = () => {
  const [drawer, setDrawer] = useState(false);
  const [deliveryMode, setDeliveryMode] = useState(true);

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* Left Side */}
      <div className="flex items-center">
        <div className="cursor-pointer p-2 rounded-full hover:bg-gray-100">
          <AiOutlineMenu size={27} onClick={() => setDrawer(!drawer)} />
        </div>
        <h1 className="text-2xl sm:text-3xl px-2">
          Swift <span className="font-bold">Bites</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[13px]">
          <p
            className={`${
              deliveryMode ? "bg-black text-white" : "hover:scale-105"
            } rounded-full p-2 cursor-pointer duration-300`}
            onClick={() => setDeliveryMode(true)}
          >
            Delivery
          </p>
          <p
            className={`${
              !deliveryMode ? "bg-black text-white" : "hover:scale-105"
            } rounded-full p-2 cursor-pointer duration-300`}
            onClick={() => setDeliveryMode(false)}
          >
            Pickup
          </p>
        </div>
      </div>
      {/* Search Input */}
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px} sm:w-[400px] lg:w-[500px] hover:shadow-sm">
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent focus:outline-none w-full p-2"
          type="text"
          placeholder="Search foods"
        />
      </div>
      {/* Cart Button */}
      <button className="bg-black text-white rounded-full hidden md:flex items-center py-2 hover:shadow-md">
        <BsCartFill size={20} className="mr-2" /> Cart
      </button>

      {/* Side Slide-In Menu */}
      {/* Overlay */}
      {drawer ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0 transition-opacity duration-1000"></div>
      ) : (
        ""
      )}

      {/* Drawer */}
      <div
        className={
          drawer
            ? "fixed left-0 top-0 w-[300px] h-screen z-10 bg-white duration-300"
            : "fixed left-[-100%] top-0 w-[300px] h-screen z-10 bg-white duration-300"
        }
      >
        <div className="flex items-center justify-between">
          <div className="text-2xl p-4">
            Swift <span className="font-bold">Bites</span>
          </div>
          <div className="mr-2 cursor-pointer p-2 rounded-full hover:bg-gray-100">
            <AiOutlineClose size={30} onClick={() => setDrawer(!drawer)} />
          </div>
        </div>

        <nav>
          <ul className="flex flex-col py-4 text-gray-800">
            <li className="text-lg py-4 pl-4 flex items-center hover:bg-gray-100">
              <TbTruckDelivery size={25} className="mr-4" /> Orders
            </li>
            <li className="text-lg py-4 pl-4 flex items-center hover:bg-gray-100">
              <MdFavorite size={25} className="mr-4" /> Favourites
            </li>
            <li className="text-lg py-4 pl-4 flex items-center hover:bg-gray-100">
              <FaWallet size={25} className="mr-4" /> Wallet
            </li>
            <li className="text-lg py-4 pl-4 flex items-center hover:bg-gray-100">
              <MdHelp size={25} className="mr-4" /> Help
            </li>
            <li className="text-lg py-4 pl-4 flex items-center hover:bg-gray-100">
              <AiFillTag size={25} className="mr-4" /> Promotions
            </li>
            <li className="text-lg py-4 pl-4 flex items-center hover:bg-gray-100">
              <BsSaveFill size={25} className="mr-4" /> Best One
            </li>
            <li className="text-lg py-4 pl-4 flex items-center hover:bg-gray-100">
              <FaUserFriends size={25} className="mr-4" /> Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
