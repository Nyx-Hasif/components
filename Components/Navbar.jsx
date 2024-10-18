"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [isRotate, setIsRotate] = useState(false);
  const [isOpen,setIsOpen] = useState(false);

  const handleRotate = () => {
    setIsRotate(!isRotate); // use negate value to toggle rotate...isRotate initial = true when click !isRotate = false and click again !isRotate = true
    setIsOpen(!isOpen)
  };



  return (
    <div className="flex flex-col fixed top-0 left-0 w-full z-50 bg-white">
      <div className="flex flex-row justify-between items-center  py-2 px-4 border border-black ">
        <Link href={"/"}>
          <Image src={assets.logo} width={40} height={40} alt={"logo"} />
        </Link>

        <div className="sm:flex hidden  flex-row gap-4">
          <Link href={"/"}>{"Home"}</Link>
          <Link href={"/about"}>{"About"}</Link>
          <Link href={"/contact"}>{"Contact"}</Link>
        </div>
        <div className="flex  flex-row gap-4 ">
          <Link
            href={"/dashboard/object"}
            className="px-2 py-1 border border-black shadow-md rounded-full hover:bg-black hover:text-white"
          >
            {"Sidebar"}
          </Link>
        </div>
        {/* Hamburger menu in mobile view */}
        <div
          className="sm:hidden border border-black cursor-pointer"
          onClick={handleRotate}
        >
          <IoMenu
            className={`text-4xl transition-transform duration-300 ${
              isRotate ? "rotate-360" : ""
            }`}
          />
        </div>
      </div>

      <div
        className={`flex flex-col border border-black ${
          isOpen ? "max-h-[150px]" : "max-h-0"
        }  text-center transition-height duration-300 ease-in-out overflow-hidden sm:hidden  `}
      >
        <Link
          href={"/"}
          className="text-xl py-1 px-1 hover:bg-slate-100 transition-all duration-300"
        >
          {"Home"}
        </Link>
        <Link
          href={"/about"}
          className="text-xl py-1 px-1 hover:bg-slate-100 transition-all duration-300"
        >
          {"About"}
        </Link>
        <Link
          href={"/contact"}
          className="text-xl py-1 px-1 hover:bg-slate-100 transition-all duration-300"
        >
          {"Contact"}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
